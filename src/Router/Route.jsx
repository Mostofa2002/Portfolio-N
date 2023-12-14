import { createBrowserRouter } from "react-router-dom";

import Root from "../Root/Root";
import Home from "./../Components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
