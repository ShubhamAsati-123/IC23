import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Infinity from "./pages/Infinity";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/infinity",
      element: <Infinity />,
    },
    
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
