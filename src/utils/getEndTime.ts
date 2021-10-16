type getEndTimeType = (dateString: string, duration: number) => string

const getEndTime: getEndTimeType = (dateString, duration) => {

    const date = new Date(dateString);

    date.setMinutes(date.getMinutes() + duration);

    const hours = `0${date.getHours()}`.slice(-2)
    const minutes = `0${date.getMinutes()}`.slice(-2)

    return `${hours}:${minutes}`
}

export default getEndTime;