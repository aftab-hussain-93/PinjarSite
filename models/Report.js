
import mongoose from 'mongoose'

const ReportSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    url: {
        type: String,
        required: true
    },
    deletedAt: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
    {
        collection: 'reports'
    })

export default mongoose.models.reports || mongoose.model('reports', ReportSchema)