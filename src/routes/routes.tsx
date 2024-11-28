import App from "@/App";
import AdminLayout from "@/components/layouts/admin-layout";
import About from "@/pages/about/about";
import AddService from "@/pages/admin/add-service";
import Dashboard from "@/pages/admin/dashboard";
import ServiceList from "@/pages/admin/service-list";
import Home from "@/pages/home/index";
import Services from "@/pages/services/services";
import { createBrowserRouter, Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/admin/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "service-list",
        element: <ServiceList />,
      },
      {
        path: "add-service",
        element: <AddService />,
      },
    ],
  },
]);

export default router;
