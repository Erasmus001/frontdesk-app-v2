import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <main className="w-screen flex items-start justify-start h-screen">
      <Sidebar />
      <section className="flex flex-1 h-full items-start justify-start flex-col">
        <header className="w-full h-20 bg-white text-black flex items-center justify-start px-5 shadow-md">
          <h3>Header</h3>
        </header>
        <div className="w-full h-full overflow-y-auto bg-gray-100">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default DashboardLayout;
