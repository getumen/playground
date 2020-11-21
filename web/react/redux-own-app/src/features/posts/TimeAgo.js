import { formatDistanceToNow, parseISO } from "date-fns"


export const TimeAgo = ({ timestamp }) => {
    let timeAgo = ''
    if (timestamp) {
        const date = parseISO(timestamp)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
    }

    return (
        <span titile={timestamp}>
            &nbsp; <i>{timeAgo}</i>
        </span>
    )
}