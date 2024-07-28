import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserDetails from "./pages/UserDetails";
import Home from "./pages/Home";
import RootLayout from "./layout/RootLayout";
import GithubProvider from "./context/github/GithubContext";
import ToastServiceProvider from "./context/toast-service/ToastServiceContext";

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
  return (
    <GithubProvider>
      <ToastServiceProvider>
        <RouterProvider router={router} />
      </ToastServiceProvider>
    </GithubProvider>
  );
};
export default App;
