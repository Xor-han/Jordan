import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout";
import { Shop } from "../pages/Shop";
import { Contact } from "../pages/Contact";
import App from "../App";

export const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
