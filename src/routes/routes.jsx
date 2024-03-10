import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ServiceDetails from "../pages/Services/ServiceDetails";
import AllServices from "../pages/Services/AllServices";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path:'/',
          element:<Home/>,
        },
        {
          path: "/services",
          element: <AllServices />
        },
        {
          path: "/services-details/:id",
          element: <ServiceDetails />
        }
      ]
    },
  ]);

export default router;