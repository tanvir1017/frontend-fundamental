import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-gray-light h-full p-2 lg:p-5 transition-all duration-200">
      <nav>
        <ul className="space-y-3">
          <li className="">
            <NavLink
              className={({ isActive }) =>
                cn(
                  "bg-gray p-3 w-full rounded-md hover:bg-gray-dark hover:text-white flex items-center justify-start",
                  {
                    "bg-gray-dark text-white": isActive,
                  }
                )
              }
              to="/admin/dashboard"
            >
              {/* <PanelRightClose strokeWidth={0.75} /> */}
              <LayoutDashboard className="shrink-0" strokeWidth={0.75} />
              <span className="truncate ">Admin</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                cn(
                  "bg-gray p-3 w-full rounded-md hover:bg-gray-dark hover:text-white flex items-center justify-start",
                  {
                    "bg-gray-dark text-white": isActive,
                  }
                )
              }
              to="/admin/add-service"
            >
              <span className="truncate ">Add Service</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                cn(
                  "bg-gray p-3 w-full rounded-md hover:bg-gray-dark hover:text-white flex items-center justify-start",
                  {
                    "bg-gray-dark text-white": isActive,
                  }
                )
              }
              to="/admin/service-list"
            >
              <span className="truncate ">Service List</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
