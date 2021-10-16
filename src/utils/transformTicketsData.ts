type transformTicketsDataType = (ticketsData: arrayTicket) => arrayTicket

const transformTicketsData: transformTicketsDataType = (ticketsData) => {
    return ticketsData.map((item) => ({...item, id: Math.random()}))
}

export default transformTicketsData;