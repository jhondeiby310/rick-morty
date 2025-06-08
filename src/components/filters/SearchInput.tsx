import FilterPanel from "../filters/FilterPanel";
import { useRef, useEffect } from "react";
import { AdjustmentsVerticalIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useFilters } from "@/context/FiltersContext";
import { useIsMobile } from "@/hooks/useIsMobile";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Search field with icon and button to display a floating filter panel.
 * Automatically closes when clicking outside the panel.
 */
export default function SearchInput() {
    const { search, openFiltersPanel, setSearch, setOpenFiltersPanel } = useFilters();
    const isMobile = useIsMobile();
    const panelRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                !isMobile &&
                panelRef.current &&
                !panelRef.current.contains(e.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(e.target as Node)
            ) {
                setOpenFiltersPanel(false);
            }
        };

        if (openFiltersPanel) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [openFiltersPanel, isMobile]);

    return (
        <div className="relative w-full mb-4">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search or filter results"
                className="w-full h-12 outline-0 bg-[#F3F4F6] px-10 py-2 rounded-md text-sm"
            />

            <button
                ref={buttonRef}
                onClick={() => setOpenFiltersPanel(!openFiltersPanel)}
                className={`absolute cursor-pointer right-2 top-1/2 transform -translate-y-1/2 p-1 rounded-md hover:bg-[#8054C70D] ${openFiltersPanel && "bg-[#EEE3FF] hover:bg-[#EEE3FF]"
                    }`}
            >
                <AdjustmentsVerticalIcon className="w-7 h-7 text-[#8054C7]" />
            </button>

            <AnimatePresence>
                {openFiltersPanel && !isMobile && (
                    <motion.div
                        ref={panelRef}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-14 left-0 right-0 z-50"
                    >
                        <FilterPanel onClose={() => setOpenFiltersPanel(false)} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
