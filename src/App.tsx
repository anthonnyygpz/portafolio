import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
