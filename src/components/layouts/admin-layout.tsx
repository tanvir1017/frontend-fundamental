import { Outlet } from "react-router-dom";
import Sidebar from "../shared/admin/sidebar";

const AdminLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 h-screen sticky top-0 left-0 overflow-auto">
        <Sidebar />
      </div>
      <div className="col-span-10 h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
