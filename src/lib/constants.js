const registerNewEvent = 'INSERT INTO "public"."eventlogs"(type,description,source,date) VALUES ($1,$2,$3,now()::timestamp)'

const getEventLogs = 'SELECT * FROM EventLogs ORDER BY date DESC LIMIT $1 OFFSET $2'

const Constants = {
    registerNewEvent,
    getEventLogs
}

export default Constants;