// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.status(200).json({ events: [...allEvents] })
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