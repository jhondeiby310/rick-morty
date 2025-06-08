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
      className={`w-full h-11 cursor-pointer px-3 py-1 text-sm font-semibold rounded-lg border transition ${active
        ? "bg-primary-light text-primary border-primary-light"
        : "bg-white text-gray-900 border-gray-200 hover:bg-gray-50"
        }`}
    >
      {label}
    </button>
  );
}