
import mongoose from 'mongoose'

const PageSchema = new mongoose.Schema({
    name: String,
    url: String
});

const ArticleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    pages: [PageSchema],
    images: [String],
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
        collection: 'article'
    })

export default mongoose.models.article || mongoose.model('article', ArticleSchema)