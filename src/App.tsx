import React from "react";
import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SingIn from "./pages/SignIn";
import SingUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import AssistantPage from "./pages/AssistantPage";
import LeadsPage from "./pages/LeadsPage";
import BlogPage from "./pages/BlogPage";
import TemplatesPage from "./pages/TemplatesPage";
import TeamPage from "./pages/TeamPage";
import Container from "@mui/material/Container";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import CreateLeadPage from "./pages/CreateLeadPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
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
    path: "/login",
    element: <SingIn />,
  },
  {
    path:"/login/sign-up",
    element: <SignUp/>
  },
  {
    path: "/dashboard/leads/create",
    element: <CreateLeadPage/>
  }
]);

function App() {
  return (
    <Container  style={{ margin: 0, padding: 0 }}>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
