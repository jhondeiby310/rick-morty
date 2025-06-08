import FilterOptions from "./FiltersOptions";

type FiltersSectionProps = {
  title: string;
  options: readonly string[];
  selected: string;
  onSelect: (val: string) => void;
};

export default function FiltersSection({
  title,
  options,
  selected,
  onSelect,
}: FiltersSectionProps) {
  return (
    <div className="mb-6">
      <p className="text-sm font-semibold mb-3 text-gray-700">{title}</p>
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
