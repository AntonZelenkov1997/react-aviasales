import { makeAutoObservable } from "mobx";

import {
  AVIA_SALES_BASE_URI,
  AVIA_SALES_SEARCH_ID,
} from "../../API/AVIA_SALES/AVIA_SALES";

type ticketsStoreType = {
  tickets: arrayTicket;
  SET_TICKETS: () => Promise<void>;
  GET_TICKETS: arrayTicket
};

const ticketsStore: ticketsStoreType = makeAutoObservable({
  tickets: [],

  async SET_TICKETS() {
      console.log('Async function'); 
  },

  get GET_TICKETS() {
      return this.tickets
  }
} as ticketsStoreType);

export default ticketsStore;
