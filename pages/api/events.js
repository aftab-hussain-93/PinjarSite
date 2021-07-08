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


const allEvents = [
    {
        id: 1,
        eventName: "EventName",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, hic saepe nisi ab, rem obcaecati nobis cum recusandae ipsam modi illum non. Similique quos magnam perspiciatis, quod necessitatibus molestias atque?`,
        img: `/events/event_img1.jpeg`,
        dateTime: `25-JULY-2021`
    },
    {
        id: 2,
        eventName: "EventName2",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, hic saepe nisi ab, rem obcaecati nobis cum recusandae ipsam modi illum non. Similique quos magnam perspiciatis, quod necessitatibus molestias atque?`,
        img: `/events/event_img1.jpeg`,
        dateTime: `25-JULY-2021`
    },
    {
        id: 3,
        eventName: "EventName3",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, hic saepe nisi ab, rem obcaecati nobis cum recusandae ipsam modi illum non. Similique quos magnam perspiciatis, quod necessitatibus molestias atque?`,
        img: `/events/event_img1.jpeg`,
        dateTime: `25-JULY-2020`
    },
    {
        id: 4,
        eventName: "EventName4",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, hic saepe nisi ab, rem obcaecati nobis cum recusandae ipsam modi illum non. Similique quos magnam perspiciatis, quod necessitatibus molestias atque?`,
        img: `/events/event_img1.jpeg`,
        dateTime: `25-JULY-2020`
    },

]