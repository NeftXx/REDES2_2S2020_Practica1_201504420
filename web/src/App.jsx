import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Router as Wouter } from "wouter";
import Router from "./Router";
import { NavBar, Footer } from "./components";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode],
  );

  return (
    <Wouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <main>
          <Router />
        </main>
        <Footer />
      </ThemeProvider>
    </Wouter>
  );
}

export default App;
