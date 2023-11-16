import { TEXTS } from "../constants";
import Selector from "./Selector";

interface TextSelectorProps {
  selectedText: string;
  onTextChange: (value: string) => void;
}

function TextSelector({ selectedText, onTextChange }: TextSelectorProps) {
  const textsMap: Record<string, string> = Object.fromEntries(
    TEXTS.map((text, index) => [`${index + 1}`, text])
  );
  console.log(textsMap);

  return (
    <div>
      <label className="text-sm font-medium text-gray-900">Text:</label>
      <Selector
        label="Select a text"
        options={Object.keys(textsMap)}
        selectedValue={
          Object.keys(textsMap).find((key) => textsMap[key] === selectedText)!
        }
        onValueChange={(value) => onTextChange(textsMap[value])}
      />
    </div>
  );
}

export default TextSelector;
