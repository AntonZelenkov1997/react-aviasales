import { configure } from "mobx";
import { createContext } from "react";

import asideStopsFilterStore from "./asideStopsFilterStore/asideStopsFilterStore";
import tabsFilterStore from "./tabsFilterStore/tabsFilterStore";
import ticketsStore from "./ticketsStore/ticketsStore";

configure({ enforceActions: "always" })

const store = createContext({
  ticketsStore,
  tabsFilterStore,
  asideStopsFilterStore
});

export default store;
