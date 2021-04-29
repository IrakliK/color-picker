import "./App.scss";
import { ColorPicker } from "./components/ColorPicker";

import randomColor from "randomcolor";

const App = () => {
  return (
    <>
      <ColorPicker color={randomColor()}></ColorPicker>
    </>
  );
};

export default App;
