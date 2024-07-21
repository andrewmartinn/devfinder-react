import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserDetails from "./pages/UserDetails";
import Home from "./pages/Home";
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user/:username",
        element: <UserDetails />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};
export default App;
