import { cn } from "cn-utility";
import { Link, useMatch } from "react-router-dom";

const AdminLayout = () => {
  const route = useMatch("/admin/add-admin");
  return (
    <header
      className={cn("py-2 px-10 h-screen", {
        "bg-red-500": route?.pathname === "/admin/add-admin",
        "bg-blue-500": route?.pathname !== "/admin/add-admin",
      })}
    >
      <nav>
        <ul className="flex items-center gap-6">
          <Link to={"/"} className="underline">
            <li>Home</li>
          </Link>
          <Link to={"/admin/add-admin"} className="underline">
            <li>Add Admin</li>
          </Link>
        </ul>
        <div className="flex items-center gap-6">
          <button className="bg-red-500 text-white px-4 py-2 rounded-md">
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};

export default AdminLayout;
