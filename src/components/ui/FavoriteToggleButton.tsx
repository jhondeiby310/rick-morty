import FavoriteIcon from "./FavoriteIcon";

/**
 * Button that activates or deactivates the favorite status.
 */
export default function FavoriteToggleButton({
    style,
    isFavorite,
    onClick,
}: {
    style?: string
    isFavorite: boolean;
    onClick: (e: React.MouseEvent) => void;
}) {
    return (
        <button
            data-testid="favorite-button"
            onClick={onClick}
            className={`p-1 rounded-full bg-white cursor-pointer ${style}`}
        >
            <FavoriteIcon isFavorite={isFavorite} />
        </button>
    );
}