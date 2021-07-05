// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../utils/dbConnect'
import Image from '../../models/Image'

export default async (req, res) => {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const images = await Image.find({}).sort({ createdAt: "desc" }) /* find all the data in our database */
                //Getting only the first occurence of all the images
                res.status(200).json({ success: true, data: images })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
    }
}

const defaultHtmlContent = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <br />
            <p>kannada text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            `

const allArticles = [
    {
        id: 1,
        name: 'preamble',
        title: 'Preamble',
        text: defaultHtmlContent
    },
    {
        id: 2,
        name: 'association_details',
        title: 'Association Details',
        subheading: 'By Laws'
    },
    {
        id: 3,
        name: 'plan_progress',
        title: 'Plan and Progress Reports',       
    },
    {
        id: 4,
        name: 'benefits',
        title: 'Benefits from State and Central Govt',       
    },
]