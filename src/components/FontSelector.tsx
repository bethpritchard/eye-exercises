import { FONTS } from "../constants";
import Selector from "./Selector";

interface fontSelectorProps {
  selectedFont: string;
  onFontChange: (value: string) => void;
}

function FontSelector({ selectedFont, onFontChange }: fontSelectorProps) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-900">Font:</label>
      <Selector
        label="Select a font"
        options={FONTS}
        selectedValue={selectedFont}
        onValueChange={onFontChange}
      />
    </div>
  );
}

export default FontSelector;
