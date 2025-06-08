import FavoriteToggleButton from "../../ui/FavoriteToggleButton";

type Props = {
    image: string;
    alt: string;
    isFavorite: boolean;
    onToggle: () => void;
};

/**
 * Displays the character's avatar with a favorite icon in the corner.
 */
export default function CharacterAvatarWithIcon({
    image,
    alt,
    isFavorite,
    onToggle,
}: Props) {
    return (
        <div className="relative w-20 h-20 mb-2">
            <img
                src={image}
                alt={alt}
                className="w-20 h-20 rounded-full object-cover"
            />
            <FavoriteToggleButton
                isFavorite={isFavorite}
                onClick={onToggle}
                style="absolute bottom-0 left-14"
            />
        </div>
    );
}
