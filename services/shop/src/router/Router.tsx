import { createBrowserRouter } from "react-router-dom";
// @ts-ignore
import { App } from "@/components/App";
// @ts-ignore
import { Shop } from "@/pages/shop";
import { Suspense } from "react";

const routes = [
  {
    path: "/shop",
    element: <App />,
    children: [
      {
        path: "/shop/main",
        element: (
          <Suspense fallback={"Loading..."}>
            <Shop />
          </Suspense>
        ),
      },
      {
        path: "/shop/second",
        element: (
          <Suspense fallback={"Loading..."}>
            <div style={{ color: "red" }}>asd asd </div>
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
