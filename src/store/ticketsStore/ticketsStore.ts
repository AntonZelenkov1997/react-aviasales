import axios from "axios";
import { flow, makeAutoObservable, toJS } from "mobx";
import { CancellablePromise } from "mobx/dist/api/flow";

import {
  AVIA_SALES_BASE_URI,
} from "../../API/AVIA_SALES/AVIA_SALES";
import transformTicketsData from "../../utils/transformTicketsData";

type ticketsStoreType = {
  searchId: null,
  tickets: arrayTicket,
  searchIsCompleted: boolean
  SET_TICKETS: () => CancellablePromise<void>,
  GET_TICKETS: arrayTicket,
  GET_TICKETS_BY_PRICE: arrayTicket,
  SET_SEARCH_ID_FOR_TICKETS: () => CancellablePromise<void>,
  GET_TICKETS_BY_TIME: arrayTicket
};

const ticketsStoreObject: ticketsStoreType = {
  searchId: null,
  tickets: [],
  searchIsCompleted: false,


  SET_SEARCH_ID_FOR_TICKETS: flow(function *(this: ticketsStoreType) {
    try {
      const response = yield axios.get(`${AVIA_SALES_BASE_URI}/search`)
      this.searchId = response.data.searchId

    } catch (error) {
      console.error('SET_SEARCH_ID_FOR_TICKETS: ', 'не удалось получить searchId')
    }
  }),


  SET_TICKETS: flow(function*(this: ticketsStoreType) {
      try {
        const response = yield axios({
          method: 'GET',
          url: `${AVIA_SALES_BASE_URI}/tickets`,
          params: {
            searchId: this.searchId
          }
        })

        this.tickets = transformTicketsData(response.data.tickets);
        this.searchIsCompleted = response.data.stop

      } catch (error) {
        console.error('SET_TICKETS: ', 'не удалось получить билеты');
      }
  }),


  get GET_TICKETS() {
      return this.tickets
  },

  get GET_TICKETS_BY_PRICE() {
      const tick = [...this.tickets];
      tick.sort((a, b) => a.price - b.price)
      return toJS(tick)
  },

  // Я не понял что имеется ввиду под фильтром "самый быстрый", поэтому сделал сортировку по меньшему времяпрепровождению в пути
  get GET_TICKETS_BY_TIME() {
    return [...this.tickets].sort((a, b) => a.segments[0].duration - b.segments[0].duration)
  }
}

const ticketsStore = makeAutoObservable(ticketsStoreObject);



export default ticketsStore;