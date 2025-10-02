import { RouteDefinition, RouterProps } from "@solidjs/router";
import { lazy } from "solid-js";

const PagesRoutes: RouteDefinition[] = [{
    path: '/',
    component: lazy(() => import('@routes/home/Home'))
}];

export default PagesRoutes;