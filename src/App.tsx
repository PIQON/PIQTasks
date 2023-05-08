import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Root } from "./pages/root/root";
import { Login } from "./pages/forms/login/login";
import { Register } from "./pages/forms/register/register";
import { ProtectedRoute } from "./pages/protected-route/protected-route";
import { Dashboard } from "./pages/dashboard/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
        errorElement: <Navigate to="/" />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
