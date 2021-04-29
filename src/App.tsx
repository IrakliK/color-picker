import "./App.scss";
import { ColorPicker } from "./components/ColorPicker";
import randomColor from "randomcolor";
import { useState } from "react";

const App = () => {
  const [color, setColor] = useState(randomColor());

  const handleRefresh = () => {
    setColor(randomColor());
  };

  return (
    <>
      <ColorPicker color={color} refresh={handleRefresh}></ColorPicker>
    </>
  );
};

export default App;
