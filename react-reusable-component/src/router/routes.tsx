import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddAdmin from "../pages/admin/add-admin";
import Admin from "../pages/admin/admin";
import Home from "../pages/home/home";

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
        path: "about-us",
        element: <h1>This is about</h1>,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        index: true,
        element: <h1>Admin Panel</h1>,
      },
      {
        path: "add-admin",
        element: <AddAdmin />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Page not found</h1>,
  },
]);
export default router;
