import { ArrowLeftIcon } from "@heroicons/react/24/solid";

/**
 * Back button component.
 */
export default function BackButton({
    style,
    onClick
}: {
    style?: string,
    onClick: (e: React.MouseEvent) => void;
}) {
    return (
        <button
            data-testid="back-button"
            onClick={onClick}
            className={`cursor-pointer ${style}`}>
            <ArrowLeftIcon className="w-6 h-6 text-primary" />
        </button>
    );
}