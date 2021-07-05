
import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
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