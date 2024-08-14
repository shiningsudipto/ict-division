import Home from "@Pages/home/Home";

export const pageRoutes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];
