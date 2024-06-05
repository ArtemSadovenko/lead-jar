import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../network/AuthProvider";
import { ProtectedRoute } from "./protectedRoute";
import SingIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import AssistantPage from "../pages/AssistantPage";
import LeadsPage from "../pages/LeadsPage";
import BlogPage from "../pages/BlogPage";
import TemplatesPage from "../pages/TemplatesPage";
import TeamPage from "../pages/TeamPage";
import Container from "@mui/material/Container";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import CreateLeadPage from "../pages/CreateLeadPage";

const Routes = () => {
  const {token} = useAuth();

  const isDev = process.env.REACT_APP_DEV;

  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "/about-us",
      element: <div>About Us</div>,
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = (isDev?
    

    [
      
    ]


    :
    [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [ 
        {
        path: "/dashboard",
        element: <Home />,
      },
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/ai-assistant",
        element: <AssistantPage />,
      },
      {
        path: "/dashboard/leads",
        element: <LeadsPage />,
      },
      {
        path: "/dashboard/blog",
        element: <BlogPage />,
      },
      {
        path: "/dashboard/templates",
        element: <TemplatesPage />,
      },
      {
        path: "/dashboard/team",
        element: <TeamPage />,
      },
      {
        path: "/dashboard/leads/create",
        element: <CreateLeadPage/>
      }
      ]
    },
  ])

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = (isDev? 
    [ 
      {
      path: "/dashboard",
      element: <Home />,
    },
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/dashboard/ai-assistant",
      element: <AssistantPage />,
    },
    {
      path: "/dashboard/leads",
      element: <LeadsPage />,
    },
    {
      path: "/dashboard/blog",
      element: <BlogPage />,
    },
    {
      path: "/dashboard/templates",
      element: <TemplatesPage />,
    },
    {
      path: "/dashboard/team",
      element: <TeamPage />,
    },
    {
      path: "/dashboard/leads/create",
      element: <CreateLeadPage/>
    }
    ]
    :
    [
    {
        path: "/login",
        element: <SingIn />,
      },
      {
        path:"/login/sign-up",
        element: <SignUp/>
      },
  ])

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;