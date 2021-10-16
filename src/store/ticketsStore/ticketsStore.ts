import axios from "axios";
import { flow, makeAutoObservable, toJS } from "mobx";
import { CancellablePromise } from "mobx/dist/api/flow";

import { AVIA_SALES_BASE_URI } from "../../API/AVIA_SALES/AVIA_SALES";
import transformTicketsData from "../../utils/transformTicketsData";

type ticketsStoreType = {
  searchId: null;
  tickets: arrayTicket;
  searchIsCompleted: boolean;
  SET_TICKETS: () => CancellablePromise<void>;
  GET_TICKETS: arrayTicket;
  GET_TICKETS_BY_PRICE: arrayTicket;
  SET_SEARCH_ID_FOR_TICKETS: () => CancellablePromise<void>;
  GET_TICKETS_BY_TIME: arrayTicket;
  GET_TICKETS_IS_EMPTY: boolean;
  GET_SEARCH_IS_COMPLETED: boolean
};

const ticketsStoreObject: ticketsStoreType = {
  searchId: null,
  tickets: [],
  searchIsCompleted: false,

  SET_SEARCH_ID_FOR_TICKETS: flow(function* (this: ticketsStoreType) {
    try {
      const response = yield axios.get(`${AVIA_SALES_BASE_URI}/search`);
      this.searchId = response.data.searchId;
    } catch (error) {
      console.error(
        "SET_SEARCH_ID_FOR_TICKETS: ",
        "не удалось получить searchId"
      );
      alert("Не удалось получить ответ сервера. Попробуйте позже :(");
    }
  }),

  SET_TICKETS: flow(function* (this: ticketsStoreType) {
    try {
      const response = yield axios({
        method: "GET",
        url: `${AVIA_SALES_BASE_URI}/tickets`,
        params: {
          searchId: this.searchId,
        },
      });

      this.tickets = [...this.tickets, ...transformTicketsData(response.data.tickets)];
      this.searchIsCompleted = response.data.stop;
    } catch (error) {
      console.error("SET_TICKETS: ", "не удалось получить билеты");
    }
  }),

  get GET_TICKETS() {
    return this.tickets;
  },

  get GET_TICKETS_BY_PRICE() {
    return [...this.tickets].sort((a, b) => a.price - b.price);

  },

  // Я не понял что имеется ввиду под фильтром "самый быстрый", поэтому сделал сортировку по меньшему времяпрепровождению в пути
  get GET_TICKETS_BY_TIME() {
    return [...this.tickets].sort(
      (a, b) => a.segments[0].duration - b.segments[0].duration
    );
  },

  get GET_TICKETS_IS_EMPTY() {
    return this.tickets.length === 0
  },

  get GET_SEARCH_IS_COMPLETED() {
    return this.searchIsCompleted
  }
};

const ticketsStore = makeAutoObservable(ticketsStoreObject);

export default ticketsStore;
