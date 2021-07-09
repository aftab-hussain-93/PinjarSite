import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    displayName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        index: { unique: true }
    },
    isAdmin: {
        type: Boolean,
        default: false
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
    collection: 'users'
})

export default mongoose.models.users || mongoose.model('users', UserSchema )