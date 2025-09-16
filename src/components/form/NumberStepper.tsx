const NumberStepper = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) => {
  return (
    <div className="flex aspect-square w-10 items-center border border-gray-300 hover:border-black">
      <span className="p-2 text-center">{value}</span>
      <div className="flex flex-col">
        <button
          className="cursor-pointer text-[9px] font-semibold"
          onClick={(e) => {
            e.preventDefault();
            onChange(value + 1);
          }}
        >
          ▲
        </button>
        <button
          className="cursor-pointer text-[9px] font-semibold disabled:text-gray-400"
          onClick={(e) => {
            e.preventDefault();
            onChange(value - 1);
          }}
          disabled={value <= 0}
        >
          ▼
        </button>
      </div>
    </div>
  );
};
export default NumberStepper;
