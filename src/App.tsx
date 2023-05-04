import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./pages/root/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
