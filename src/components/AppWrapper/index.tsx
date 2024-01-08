import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { ThemeWrapperProvider } from "components/ThemeWrapper";
import { Children } from "components/ThemeWrapper/types";
import { GlobalStyle } from "constants/styles/global";
import { ErrorBoundary } from "components/ErrorBoundary";
import { store } from "store";

export const AppWrapper = ({ children }: Children) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeWrapperProvider>
          <GlobalStyle />
          <ErrorBoundary>{children}</ErrorBoundary>
        </ThemeWrapperProvider>
      </Provider>
    </BrowserRouter>
  );
};
