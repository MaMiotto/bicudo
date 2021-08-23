import { format } from 'date-fns'

export const getStandardDate = (date) => {
    date = new Date()
    return format(date, 'dd/MM/yyyy');
}