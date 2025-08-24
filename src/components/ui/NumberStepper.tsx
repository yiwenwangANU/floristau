const NumberStepper = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) => {
  return (
    <div className="flex items-center">
      <button
        className="bg-gray-200 p-2 rounded-l"
        onClick={() => onChange(value - 1)}
      >
        -
      </button>
      <span>{value}</span>
      <button
        className="bg-gray-200 p-2 rounded-r"
        onClick={() => onChange(value + 1)}
      >
        +
      </button>
    </div>
  );
};
export default NumberStepper;
