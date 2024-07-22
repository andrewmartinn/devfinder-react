import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserDetails from "./pages/UserDetails";
import Home from "./pages/Home";
import RootLayout from "./layout/RootLayout";
import GithubProvider from "./context/github/GithubContext";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users/:username",
        element: <UserDetails />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <GithubProvider>
      <RouterProvider router={router} />
    </GithubProvider>
  );
};
export default App;
