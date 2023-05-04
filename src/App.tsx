import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./pages/root/root";
import { Login } from "./pages/forms/login/login";
import { Register } from "./pages/forms/register/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
