type Props = {
  message?: string;
  imageSrc?: string;
  altText?: string;
};

/**
 * Visual component for displaying errors. Includes optional image.
 */
export default function ErrorMessage({
  message = "An unexpected error occurred. Please try again.",
  imageSrc = "/rick.png",
  altText = "Error",
}: Props) {
  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <div className="flex flex-row gap-4 items-center max-w-md bg-red-50 border border-red-200 px-6 py-6 rounded-lg shadow-sm">
        <img
          src={imageSrc}
          alt={altText}
          className="w-10 h-10"
        />
        <p className="text-lg font-medium text-red-600">{message}</p>
      </div>
    </div>
  );
}
