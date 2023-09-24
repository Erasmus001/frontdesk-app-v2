import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";
import { Popover } from "@mantine/core";

const DashboardLayout = () => {
  return (
    <main className="w-screen flex items-start justify-start h-screen">
      <Sidebar />
      <section className="flex flex-1 h-full items-start justify-start flex-col">
        <header className="w-full h-20 bg-blue-200 text-black flex items-center justify-end px-12 shadow-lg">
          <Popover arrowPosition="side" shadow="sm">
            <Popover.Dropdown>
              <h2>Hello</h2>
              <h2>Hello</h2>
              <h2>Hello</h2>
              <h2>Hello</h2>
            </Popover.Dropdown>
          </Popover>
        </header>
        <div className="w-full h-[calc(100vh-80px)] overflow-y-auto bg-blue-50">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default DashboardLayout;
