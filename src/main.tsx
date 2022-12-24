import {
  ChakraProvider,
  ColorModeProvider,
  ThemeProvider,
} from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ApplicationProvider } from "./contexts/ApplicationContext";
import { AuthProvider } from "./contexts/AuthContext";
import { theme } from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ChakraProvider resetCSS>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <AuthProvider>
            <ApplicationProvider>
              <App />
            </ApplicationProvider>
          </AuthProvider>
        </ColorModeProvider>
      </ThemeProvider>
    </ChakraProvider>
  </BrowserRouter>
);
