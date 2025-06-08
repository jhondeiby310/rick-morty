import { ReactNode } from "react";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";

type Props = {
  children: ReactNode;
};

/**
 * Main layout that defines the overall structure of the app.
 * The sidebar is always displayed on desktop; on mobile, it only appears as home.
 * The sidebar is hidden in the character detail on mobile.
 */
export default function MainLayout({ children }: Props) {
  const router = useRouter();
  const isHome = router.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <aside className={`${isHome ? "block" : "hidden"} md:block`}>
        <Sidebar />
      </aside>

      <main className="flex-1 p-4 md:p-6">
        {!isHome && children}
      </main>
    </div>
  );
}
