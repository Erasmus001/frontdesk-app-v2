import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="w-[20%] h-full flex items-start justify-start flex-col text-black bg-white shadow-md">
      {/* header */}
      <div className="w-full flex items-center justify-center bg-gray-100 h-28">
        <h2 className="font-bold text-2xl text-blue-500">LogoIpsium</h2>
      </div>

      <div className="w-full h-full flex-1 flex items-start justify-between">
        <div className="w-full flex items-start justify-start flex-col gap-3 p-4 px-6">
          <NavLink
            to={"/dashboard"}
            className="p-1 w-full rounded-md text-gray-700 font-semibold"
          >
            Dashboard
          </NavLink>
          <NavLink
            to={"/visitors"}
            className="p-1 w-full rounded-md text-gray-700 font-semibold"
          >
            Visitors
          </NavLink>
          <NavLink
            to={"/enquiries"}
            className="p-1 w-full rounded-md text-gray-700 font-semibold"
          >
            Enquires
          </NavLink>
          <NavLink
            to={"/deliveries"}
            className="p-1 w-full rounded-md text-gray-700 font-semibold"
          >
            Deliveries
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;