
import mongoose from 'mongoose'

const EventSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    venue: {
        city: {
            type: String
        },
        state: {
            type: String
        },
        country: {
            type: String
        },
        fullAddress: {
            type: String
        }
    },
    eventDate: {
        type: Date
    },
    photo: {
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
        collection: 'events'
    })

export default mongoose.models.events || mongoose.model('events', EventSchema)