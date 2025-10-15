import PagesRoutes from "@routes/index";
import { MultiProvider } from "@solid-primitives/context";
import { Router } from "@solidjs/router";
import { i18nContextProvider } from "@tools/i18n/i18n.context";
import { ThemesContextProvider } from "@tools/themes/themes.context";
import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <MultiProvider values={[ThemesContextProvider, i18nContextProvider]}>
      <Router>{PagesRoutes}</Router>
    </MultiProvider>
  );
};

export default App;
