import { RouteDefinition } from "@solidjs/router";
import { lazy } from "solid-js";

const PagesRoutes: RouteDefinition[] = [
  {
    path: "",
    component: lazy(() => import("@templates/Page/Page")),
    children: [
      {
        path: "/",
        component: lazy(() => import("@routes/home/Home")),
      },
      {
        path: "/document",
        component: lazy(() => import("@routes/document/Document")),
      },
      {
        path: "/cep",
        component: lazy(() => import("@routes/cep/Cep")),
      },
    ],
  },
];

const PagelessRoutes: RouteDefinition[] = [{ path: "*404" }];

export default [...PagesRoutes, ...PagelessRoutes];
