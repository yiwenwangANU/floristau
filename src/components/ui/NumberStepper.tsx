const NumberStepper = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) => {
  return (
    <div className="flex items-center border border-gray-300 aspect-square w-10">
      <span className="text-center p-2">{value}</span>
      <div className="flex flex-col">
        <button
          className="cursor-pointer  font-semibold text-[9px]"
          onClick={() => onChange(value + 1)}
        >
          ▲
        </button>
        <button
          className="cursor-pointer font-semibold text-[9px] disabled:text-gray-400"
          onClick={() => onChange(value - 1)}
          disabled={value <= 0}
        >
          ▼
        </button>
      </div>
    </div>
  );
};
export default NumberStepper;
