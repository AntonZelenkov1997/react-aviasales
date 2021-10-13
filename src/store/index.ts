import { configure } from "mobx";
import { createContext } from "react";
import ticketsStore from "./ticketsStore/ticketsStore";

configure({ enforceActions: "always" })

const store = createContext({
  ticketsStore
});

export default store;
