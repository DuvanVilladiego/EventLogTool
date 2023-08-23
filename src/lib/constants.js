const registerNewEvent = 'INSERT INTO "public"."eventlogs"(type,description,source,date) VALUES ($1,$2,$3,now()::timestamp)'

const getEventLogs = 'SELECT a.description,a.source,a.date,b.description as type FROM EventLogs a INNER JOIN Category b ON a.type = b.id_category ORDER BY date DESC LIMIT $1 OFFSET $2 '

const getAllCategories = 'SELECT * FROM Category'

const Constants = {
    registerNewEvent,
    getEventLogs,
    getAllCategories
}

export default Constants;