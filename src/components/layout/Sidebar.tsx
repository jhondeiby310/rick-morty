import CharacterSidebarList from "../character/list/CharacterSidebarList";
import SeacrhAndFilters from "../filters/SearchAndFilters";

/**
 * Main application sidebar.
 * Contains the search engine, active filters, and the character list.
 */
export default function Sidebar() {

  return (
    <aside className="relative max-h-screen w-full h-full md:w-[375px] bg-[#f3f4f636] px-4 pt-12 pb-4 border-r border-[#f3f4f636] flex flex-col">
      <SeacrhAndFilters />
      <div className="mt-6 px-1 flex-1 overflow-y-auto scrollbar-custom">
        <CharacterSidebarList />
      </div>
    </aside>
  );
}
