import React, { FC, useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorPicker.scss";

interface ColorProps {
  color: string;
}
/*
 TODO when changing view/frames button should go back to its previous state
*/
export const ColorPicker: FC<ColorProps> = (props: ColorProps) => {
  const COLOR = props.color.toUpperCase();

  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = () => {
    setIsCopied(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  }, [isCopied]);

  return (
    <div className="top">
      <div className="title" style={{ backgroundColor: props.color }}>
        <h1>RANDOM COLOR PICKER</h1>
        <div className="hash">{COLOR}</div>
        <CopyToClipboard text={COLOR} onCopy={handleCopy}>
          <button>
            <span>{isCopied ? "✅ " : "📋 "}</span>
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};
