import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, {useMemo} from "react";
import {Provider, useSelector} from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Page from "./common/page/Page";
import { store } from "./store/configureStore";
import { isDarkMode } from "./store/ui/uiSelectors";

function App() {
  const darkMode = useSelector(isDarkMode);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary:  {
            main: "#F0E3C9"
          },
          secondary: {
            main: "#D3D3D3"
          },
          text: {
            primary: "#212121",
          },
        },
        typography: {
          fontFamily: '"Raleway", serif',
        },
      }),
    [darkMode],
  );

  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Page />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
