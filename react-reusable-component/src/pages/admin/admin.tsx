import { Outlet } from "react-router-dom";
import AdminLayout from "../../components/layout/admin-layout";

const Admin = () => {
  return (
    <div className="flex">
      <div className="flex-[1]">
        <AdminLayout />
      </div>
      <div className="flex-[5]">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
