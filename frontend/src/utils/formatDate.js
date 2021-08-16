import { format } from 'date-fns'

export const getStandardDate = (date) => {
    return format(new Date(date), 'MM/dd/yyyy');
}