import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ServiceDetails from "../pages/Services/ServiceDetails";
import AllServices from "../pages/Services/AllServices";
import About from "../pages/About/About";
import Blogs from "../pages/Blogs/Blogs";
import Contacts from "../pages/Contacts/Contacts";
import TermsOfUse from "../pages/TermsOfUsePage/TermsOfUsePage";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import CookiePolicy from "../pages/CookiePolicy/CookiePolicy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <AllServices />,
      },
      {
        path: "/services-details/:id",
        element: <ServiceDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/termsOfUse",
        element: <TermsOfUse />,
      },
      {
        path: "/privacyPolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/cookiePolicy",
        element: <CookiePolicy />,
      },
    ],
  },
]);

export default router;