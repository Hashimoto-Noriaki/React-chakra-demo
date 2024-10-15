import { Home } from "../components/pages/home/Home";
import { Setting } from "../components/pages/home/Setting";
import { UserManagement } from "../components/pages/home/UserManagement";
import { Page404 } from "../components/pages/Page404";
export const homeRoutes = [
  {
    path: "/",
    children: <Home />
  },
  {
    path: "/user_management",
    children: <UserManagement />
  },
  {
    path: "/setting",
    children: <Setting />
  },
  {
    path: "*",
    children: <Page404 />
  }
];