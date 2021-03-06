export const getMonthName = (monthNum) => {
    if (monthNum >= 0 && monthNum < 12) {
        const month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";
        return month[monthNum]
    }
    return null
}

export const formatDate = (date) => {
    const dateObj = new Date(date)
    const [month, day, year] = [dateObj.getMonth(), dateObj.getDate(), dateObj.getFullYear()];
    const monthName = getMonthName(month)
    return `${day}-${monthName}-${year}`
}

export const formatFullDate = (date) => {
    const dateObj = new Date(date)
    return `${dateObj.toDateString()} ${dateObj.toLocaleTimeString()}`
}