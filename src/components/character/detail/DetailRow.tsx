/**
 * Displays a row with a label and its corresponding value.
 */
type DetailRowProps = {
  label: string;
  value: string;
};

export default function DetailRow({ label, value }: DetailRowProps) {
  return (
    <div className={`h-20 flex flex-col justify-center`}>
      <p className="text-base font-semibold">{label}</p>
      <p className="text-base text-gray-500">{value}</p>
    </div>
  );
}
