import { Link } from "react-router-dom";

const AdminLayout = () => {
  return (
    <header className="bg-purple-300 py-2 px-10 h-screen ">
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
