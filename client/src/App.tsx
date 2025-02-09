import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import Layout from "./pages/Layout";
import Error from "./pages/Error";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import TemplatesPage from "./pages/Templates";
import Favorites from "./pages/Favorites";
import AccountDashboard from "./pages/AccountDashboard";
import FakeEditor from "./pages/EditorTools";
import EditorLayout from "./pages/EditorLayout";
import Domains from "./pages/Domains";
import Dashboard from "./pages/Dashboard";
import Assets from "./components/EditorComponents/sidebarComponents/Assets";
import UserWebsite from "./pages/UserWebsite";
import LogoMaker from "./pages/LogoMaker";
import MakerCore from "./pages/MakerCore";
import Wrapper3Pro from "./components/basicEditor3Pro/Wrapper3Pro";

import "./App.css";
import EditorTestingEnv from "./pages/EditorTestingEnv";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "/templates/",
          element: <TemplatesPage />,
        },
        {
          path: "/templates/:filter",
          element: <TemplatesPage />,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
    {
      path: "/userwebsite/:domain?/:id",
      element: <UserWebsite />,
    },
    {
      path: "/accountdashboard/",
      element: <AccountDashboard />,
      children: [
        { path: "domains", element: <Domains /> },
        { path: "dashboard", element: <Dashboard /> },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/my-favorites",
      element: <Favorites />,
    },
    {
      path: "/fakeEditor",
      element: <FakeEditor />,
    },
    {
      path: "/editorTestingEnv",
      element: <EditorTestingEnv />,
    },
    {
      path: "/edituserwebsite/:id",
      element: <EditorLayout />,
    },
    {
      path: "/editor-page/:id?",
      element: <EditorLayout />,
      children: [
        {
          path: "setup-guide/:id?",
          element: <div>Setup Guide Content</div>,
        },
        {
          path: "website/:id?",
          element: <div className="bg-white h-screen">Website Content</div>,
          children: [
            {
              path: "pages/:id?",
              element: <div>Website Content</div>,
            },
            {
              path: "assets/:id?",
              element: <Assets />,
            },
          ],
        },
        {
          path: "products&services",
          element: <div>Pages Content 1</div>,
        },
        {
          path: "content&memberships",
          element: <div>Pages Content 2 3</div>,
        },
        {
          path: "scheduling",
          element: <div>Pages Content 4</div>,
        },
        {
          path: "donations",
          element: <div>Pages Content 5</div>,
        },
        {
          path: "invoicing",
          element: <div>Pages Content 6</div>,
        },
        {
          path: "marketing",
          element: <div>Marketing Content</div>,
        },
        {
          path: "contacts",
          element: <div>Contacts Content</div>,
        },
        {
          path: "analytics",
          element: <div>Analytics Content</div>,
        },
        {
          path: "finance",
          element: <div>Finance Content</div>,
        },
      ],
    },
    {
      path: "/wrapper3",
      element: <Wrapper3Pro />,
    },
    {
      path: "/logo-maker",
      element: <LogoMaker />,
    },
    {
      path: "/logo-maker/:companyNameParams",
      element: <MakerCore />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
