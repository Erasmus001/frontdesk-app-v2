import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <main className="w-screen flex items-start justify-start h-screen">
      <Sidebar />
      <section className="flex flex-1 h-full items-start justify-start flex-col">
        <header className="w-full h-20 bg-white text-black flex items-center justify-start px-5 shadow-lg">
          <h3>Header</h3>
        </header>
        <div className="w-full h-[calc(100vh-80px)] overflow-y-auto bg-blue-50">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default DashboardLayout;
