import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import { routeGenerator } from "../utils/routeGenerator";
import { pageRoutes } from "./pages.routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routeGenerator(pageRoutes),
  },
]);
