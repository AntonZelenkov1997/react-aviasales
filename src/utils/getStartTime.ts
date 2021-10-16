const getStartTime = (dateStirng: string) => {
    const date = new Date(dateStirng);

    const hours = `0${date.getHours()}`.slice(-2)
    const minutes = `0${date.getMinutes()}`.slice(-2)

    return `${hours}:${minutes}`
}

export default getStartTime;