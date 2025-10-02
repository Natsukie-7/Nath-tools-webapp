import type { Component } from "solid-js";
import { Router } from "@solidjs/router";
import PagesRoutes from "@routes/index";
import Page from "@templates/Page/Page";

const App: Component = () => {
  return <Router root={Page}>{PagesRoutes}</Router>;
};

export default App;
