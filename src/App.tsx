import Circle from "@uiw/react-color-circle";
import { useState } from "react";
import { COLORS, TEXTS } from "./constants";
import FontSelector from "./components/FontSelector";
import TextSelector from "./components/TextSelector";

function App() {
  const [textColor, setTextColor] = useState("#F44E3B");
  const [fontFamily, setFontFamily] = useState("Consolas");
  const [selectedText, setSelectedText] = useState(TEXTS[0]);

  const handleFontChange = (selectedFont: string) => {
    setFontFamily(selectedFont);
  };

  const handleTextChange = (selectedText: string) => {
    setSelectedText(selectedText);
  };

  return (
    <div className="min-h-screen relative">
      <div className="flex flex-col text-center mb-3">
        <div className="">
          <h1 className="text-4xl font-bold mb-4 mt-4">Eye Exercises</h1>
          <div className="flex justify-center">
            <Circle
              colors={COLORS}
              color={textColor}
              onChange={(color) => {
                setTextColor(color.hex);
              }}
              style={{ margin: "0 auto" }}
            />
          </div>
          <div className="flex justify-center space-x-8 mt-4">
            <FontSelector
              selectedFont={fontFamily}
              onFontChange={handleFontChange}
            />

            <TextSelector
              selectedText={selectedText}
              onTextChange={handleTextChange}
            />
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto text-center">
        <p
          className="text-xl"
          style={{
            color: textColor,
            fontFamily: fontFamily,
          }}
        >
          {selectedText}
        </p>
      </div>
    </div>
  );
}

export default App;
