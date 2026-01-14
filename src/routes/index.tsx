import HomeLayout from "@/layouts/HomeLayout";
import HomePage from "@/pages/Home";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
