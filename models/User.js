
import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    isAdmin: {
      type: Boolean  
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