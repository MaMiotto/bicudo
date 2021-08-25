import { format } from 'date-fns'

export const isValidDate = (date) =>{
    const newDate = new Date(date)
    const value = newDate.toString()
    if (value === "Invalid Date") return false
    else return true
}

export const getStandardDate = (date) => {
    date = new Date(date)
    if(isValidDate(date)) return format(date, 'dd/MM/yyyy');
    else return null
}