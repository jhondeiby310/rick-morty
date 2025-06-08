import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";

type Props = {
  isFavorite: boolean;
  size?: number;
};

/**
 * Heart icon that changes depending on whether it is a favorite or not.
 */
export default function FavoriteIcon({ isFavorite, size = 6}: Props) {
  const Icon = isFavorite ? HeartSolid : HeartOutline;
  const color = isFavorite ? "text-[#63D838]" : "text-gray-400";

  return <Icon data-testid="favorite-icon" className={`w-${size} h-${size} ${color}`} />;
}
