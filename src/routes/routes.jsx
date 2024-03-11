import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import ServiceDetails from "../pages/Services/ServiceDetails";
import AllServices from "../pages/Services/AllServices";
import About from "../pages/About/About";
import Blogs from "../pages/Blogs/Blogs";
import Contacts from "../pages/Contacts/Contacts";

import Login from "../pages/Login/Login";
// import Footer from "../pages/Shared/Footer/Footer";
import WebDevelopment from "../pages/Home/WebDevelopment/WebDevelopment";
import AppDevelopment from "../pages/Home/AppDevelopment/AppDevelopment";
import DigitalMarketing from "../pages/Home/DigitalMarketing/DigitalMarketing";
import GraphicsDesign from "../pages/Home/GraphicsDesign";
import Cookies from "../pages/Cookies/Cookies";
import Privacy from "../pages/Privacy/Privacy";
import Terms from "../pages/Terms/Terms";
// import TermsOfUsePage from "../pages/TermsOfUsePage/TermsOfUsePage";
// import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
// import CookiePolicy from "../pages/CookiePolicy/CookiePolicy";
// import TermsOfUse from "../pages/TermsOfUsePage/TermsOfUsePage";
// import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
// import CookiePolicy from "../pages/CookiePolicy/CookiePolicy";

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
        element: <Terms />,
      },
      {
        path: "/privacyPolicy",
        element: <Privacy />,
      },
      {
        path: "/web-development",
        element: <WebDevelopment />,
      },

      {
        path: "/cookiePolicy",
        element: <Cookies />,
      },
      { path: "/login", element: <Login /> },

      {
        path: "/app-development",
        element: <AppDevelopment />,
      },
      {
        path: "/digital-marketing",
        element: <DigitalMarketing />,
      },
      {
        path: "/graphics-design",
        element: <GraphicsDesign />,
      },
    ],
  },
]);

export default router;
