// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../utils/dbConnect'
import Event from '../../models/Event'
import NextCors from 'nextjs-cors';

export default async (req, res) => {

    await NextCors(req, res, {
        // Options
        methods: ['GET', 'POST'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    const { method } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const allEvents = await Event.find({ })
                res.status(200).json({ events: [...allEvents] })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'POST':
            try {
                const eventData = req.body
                const event = await Event.create(eventData)
                res.status(201).json({ success: true, data: event })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
    
}

