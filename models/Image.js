
import mongoose from 'mongoose'

const ImageSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    url: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
    {
        collection: 'images'
    })

export default mongoose.models.images || mongoose.model('images', ImageSchema)