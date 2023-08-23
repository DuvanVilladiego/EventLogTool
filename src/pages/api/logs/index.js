import constants from "@/lib/constants"
import { query } from "@/lib/db"

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const result = await query(constants.getEventLogs, [req.query.limit, req.query.offset]);
            res.status(200).json(result.rows);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    } else if (req.method === 'POST') {
        try {
            const result = await query(constants.registerNewEvent, [req.body.type, req.body.description, req.body.source]);
            res.status(200).json(result.rows);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}  