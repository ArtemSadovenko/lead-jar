import React from "react";
import "./App.css";

import Container from "@mui/material/Container";
import AuthProvider from "./network/AuthProvider";
import Routes from "./navigation/navigation";

// const router = createBrowserRouter([
//   {
//     path: "/dashboard",
//     element: <Home />,
//   },
//   {
//     path: "/",
//     element: <Dashboard />,
//   },
//   {
//     path: "/dashboard/ai-assistant",
//     element: <AssistantPage />,
//   },
//   {
//     path: "/dashboard/leads",
//     element: <LeadsPage />,
//   },
//   {
//     path: "/dashboard/blog",
//     element: <BlogPage />,
//   },
//   {
//     path: "/dashboard/templates",
//     element: <TemplatesPage />,
//   },
//   {
//     path: "/dashboard/team",
//     element: <TeamPage />,
//   },

//   {
//     path: "/login",
//     element: <SingIn />,
//   },
//   {
//     path:"/login/sign-up",
//     element: <SignUp/>
//   },
//   {
//     path: "/dashboard/leads/create",
//     element: <CreateLeadPage/>
//   }
// ]);

function App() {
  return (
    <Container  style={{ margin: 0, padding: 0 }}>
          <AuthProvider>
            <Routes />
          </AuthProvider>
    </Container>
  );
}

export default App;
