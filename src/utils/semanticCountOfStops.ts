const semanticCountOfStops = (countOfStops: number) => {
    if (countOfStops === 1) return "1 пересадка";
    if (countOfStops >= 2 && countOfStops <= 4) return `${countOfStops} пересадки`;
    return `${countOfStops} пересадок`;
}

export default semanticCountOfStops;