import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="w-[20%] h-screen bg-whiteflex items-start justify-start flex-col gap-4 text-black p-6 bg-white shadow-md">
      {/* header */}
      <header className="w-full p-5 px-0 h-16">
        <h2 className="font-bold text-2xl text-blue-500">Frontdesk</h2>
      </header>

      <div className="w-full flex-1 bg-gray-300 flex items-start justify-start flex-col gap-3">
        <NavLink to={''}>Dashboard</NavLink>
        <NavLink to={''}>Dashboard</NavLink>
        <NavLink to={''}>Dashboard</NavLink>
      </div>

      <div>
        <NavLink to={"/settings"}>Settings</NavLink>
      </div>
    </nav>
  );
};

export default Sidebar;
