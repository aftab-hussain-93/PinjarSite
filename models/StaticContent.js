
import mongoose from 'mongoose'

const StaticSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    text: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
    {
        collection: 'content'
    })

export default mongoose.models.content || mongoose.model('content', StaticSchema)