import CharacterSidebarList from "../character/list/CharacterSidebarList";
import SeacrhAndFilters from "../filters/SearchAndFilters";

/**
 * Main application sidebar.
 * Contains the search engine, active filters, and the character list.
 */
export default function Sidebar() {

  return (
    <aside className="w-full md:w-[375px] h-screen flex flex-col bg-white md:bg-[#f3f4f636] px-4 pt-[42px] pb-10 border-r border-[#f3f4f636]">
      <SeacrhAndFilters />
      <div className="mt-6 px-1 flex-1 overflow-y-auto scrollbar-custom">
        <CharacterSidebarList />
      </div>
    </aside>
  );
}
