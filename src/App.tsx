import type { Component } from "solid-js";
import { Router } from "@solidjs/router";
import PagesRoutes from "@routes/index";
import Page from "@templates/Page/Page";
import { ThemesContextProvider } from "@tools/themes/themes.context";

const App: Component = () => {
  return (
    <ThemesContextProvider>
      <Router root={Page}>{PagesRoutes}</Router>
    </ThemesContextProvider>
  );
};

export default App;
