import FilterOptions from "./FiltersOptions";

type FiltersSectionProps = {
  title: string;
  options: readonly string[];
  selected: string;
  onSelect: (val: string) => void;
};

/**
 * Renders a section of selectable filter options with a title.
 */
export default function FiltersSection({
  title,
  options,
  selected,
  onSelect,
}: FiltersSectionProps) {
  return (
    <div className="mb-6">
      <p className="text-base md:text-sm font-medium mb-3 text-gray-500">{title}</p>
      <div className="flex gap-2">
        {options.map((option) => (
          <FilterOptions
            key={option}
            label={option}
            active={selected === option}
            selectOption={() => onSelect(option)}
          />
        ))}
      </div>
    </div>
  );
}
