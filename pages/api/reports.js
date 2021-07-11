// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../utils/dbConnect'
import Report from '../../models/Report'
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
                const allReports = await Report.find({})
                res.status(200).json({ success: true, reports: allReports })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'POST':
            try {
                const reportData = req.body
                const report = await Report.create(reportData)
                res.status(201).json({ success: true, data: report })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }

}