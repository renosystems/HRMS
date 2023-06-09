import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "evergreen-ui";
import { I18nextProvider } from "react-i18next";
import { AuthProvider } from "./Utils/Auth/AuthProvider";
import i18n from "./Utils/internationalization/i18n";
import App from "./App";
import { getTheme } from "./Utils/Themes/Themes";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <I18nextProvider i18n={i18n}>
      <AuthProvider>
        {/* The theme id to be fetched from user profile/settings or whatever structure provided by BE in future */}
        <ThemeProvider value={getTheme("default")}>
          <App />
        </ThemeProvider>
      </AuthProvider>
    </I18nextProvider>
    {process.env.NODE_ENV === "development" && (
      <ReactQueryDevtools initialIsOpen={false} />
    )}
  </QueryClientProvider>
);
