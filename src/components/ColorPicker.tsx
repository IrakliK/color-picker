import React, { FC, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorPicker.scss";
import Button from "react-bootstrap/Button";

interface ColorProps {
  color: string;
  refresh: () => void;
}

export const ColorPicker: FC<ColorProps> = (props: ColorProps) => {
  const COLOR = props.color.toUpperCase();

  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = () => {
    setIsCopied(true);
  };

  const handleRefreshClick = () => {
    setIsCopied(false);
    return props.refresh();
  };

  return (
    <div className="top">
      <div className="title" style={{ backgroundColor: COLOR }}>
        <h1>RANDOM COLOR PICKER</h1>
        <div className="hash">{COLOR}</div>
        <CopyToClipboard text={COLOR} onCopy={handleCopy}>
          <Button variant="dark" disabled={isCopied}>
            <span>{isCopied ? "✅ " : "📋 "}</span>
          </Button>
        </CopyToClipboard>
        <Button variant="light" onClick={handleRefreshClick}>
          Refresh
        </Button>
        <div className={`message ${isCopied ? "visible" : ""}`}>
          Copied Color to Clipboard !
        </div>
      </div>
    </div>
  );
};
