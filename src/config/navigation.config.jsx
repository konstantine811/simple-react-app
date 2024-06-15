// page components
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";
import Explain from "../components/pages/Explain";
import Home from "../components/pages/Home";
import NotFound from "../components/pages/NotFound";
import Login from "../components/pages/Login";
import Community from "../components/pages/Community";

export const NAV_PATHS = {
  HOME: "/",
  ABOUT: "/about",
  EXPLAIN: "/explain",
  CONTACT: "/contact",
  LOGIN: "/login",
  COMMUNITY: "/community",
};

export const NAV_ITEMS = [
  {
    path: NAV_PATHS.HOME,
    title: "Home",
    element: <Home />,
  },
  {
    path: NAV_PATHS.COMMUNITY,
    title: "Community",
    element: <Community />,
  },
  {
    path: NAV_PATHS.ABOUT,
    title: "About",
    element: <About />,
  },
  {
    path: NAV_PATHS.EXPLAIN,
    title: "Explain",
    element: <Explain />,
  },
  {
    path: NAV_PATHS.CONTACT,
    title: "Contact",
    element: <Contact />,
  },
  {
    path: "*",
    isNotNav: true,
    element: <NotFound />,
  },
  {
    path: NAV_PATHS.LOGIN,
    isNotNav: true,
    element: <Login />,
  },
];
