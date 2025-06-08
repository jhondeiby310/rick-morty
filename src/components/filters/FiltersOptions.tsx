/**
 * Filter options. Change style if active.
 */
type FilterButtonProps = {
  /** Text to display inside the button. */
  label: string;
  /** Whether it is selected or not. */
  active?: boolean;
  /** On-click function. */
  selectOption: () => void;
};

export default function FilterOptions({ label, active = false, selectOption }: FilterButtonProps) {
  return (
    <button
      onClick={selectOption}
      className={`w-full h-10 cursor-pointer px-3 py-1 text-sm rounded-md border transition ${active
        ? "bg-[#EEE3FF] text-[#8054C7] border-[#EEE3FF]"
        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
        }`}
    >
      {label}
    </button>
  );
}