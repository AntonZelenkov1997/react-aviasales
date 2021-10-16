const getDuration = (duration: number) => {
    const date = new Date()

    date.setMinutes(duration)

    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${hours}ч ${minutes}м`
}

export default getDuration;