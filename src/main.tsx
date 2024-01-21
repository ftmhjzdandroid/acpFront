import ReactDOM from "react-dom/client";
import App from "./App";
import "./theme/style.scss";
import { logger } from "./utils/logger";
import { HashRouter } from 'react-router-dom';
import AcpProvider from "./services/provider";

if (process.env.NODE_ENV === "development") {
  logger.log("==================================== worker.start ");
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AcpProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </AcpProvider>
);
