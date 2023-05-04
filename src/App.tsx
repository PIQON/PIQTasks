import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./pages/root/root";
import { Login } from "./pages/forms/login/login";
import { Register } from "./pages/forms/register/register";
import { ProtectedRoute } from "./pages/protected-route/protected-route";

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
            <h1>Hello</h1>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
