interface selectorProps {
  label: string;
  options: string[];
  selectedValue: string;
  onValueChange: (value: string) => void;
}

function Selector({
  label,
  options,
  selectedValue,
  onValueChange,
}: selectorProps) {
  console.log(selectedValue);
  return (
    <div>
      <label
        htmlFor="selector"
        className="block text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        id="selector"
        value={selectedValue}
        onChange={(e) => onValueChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Selector;
