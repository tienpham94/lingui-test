import React from "react";
import { render } from "react-dom";
import Inbox from "./Inbox.js";
import catalogCs from "./locales/cs/messages.js";

import { I18nProvider } from "@lingui/react";

const catalogs = { cs: catalogCs };

const App = () => (
  <I18nProvider language="cs" catalogs={catalogs}>
    <Inbox />
  </I18nProvider>
);

render(<App />, document.getElementById("root"));
