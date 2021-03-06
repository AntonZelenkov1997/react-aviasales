declare type segmentsType = [
  {
    // Код города (iata)
    origin: string;
    // Код города (iata)
    destination: string;
    // Дата и время вылета туда
    date: string;
    // Массив кодов (iata) городов с пересадками
    stops: string[];
    // Общее время перелёта в минутах
    duration: number;
  },
  {
    // Код города (iata)
    origin: string;
    // Код города (iata)
    destination: string;
    // Дата и время вылета обратно
    date: string;
    // Массив кодов (iata) городов с пересадками
    stops: string[];
    // Общее время перелёта в минутах
    duration: number;
  }
]

declare type Ticket = {
  id: number,
  // Цена в рублях
  price: number;
  // Код авиакомпании (iata)
  carrier: string;
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: segmentsType
}

declare type arrayTicket = Array<Ticket>

declare type responseTicket = {
    tickets: arrayTicket,
    stop: boolean
}