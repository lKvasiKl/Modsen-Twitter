import ReactDOM from "react-dom/client";

import { AppWrapper } from "components/AppWrapper";
import { App } from "components/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppWrapper>
    <App />
  </AppWrapper>,
);
