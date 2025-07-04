/**
 * Circular charge indicator.
 */
export default function Spinner() {
    return (
        <div role="status" className="flex justify-center items-center h-full py-10">
            <div className="w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
    );
}