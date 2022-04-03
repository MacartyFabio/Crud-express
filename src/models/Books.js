import mongoose from "mongoose"

const bookSchema = new mongoose.Schema(
    {
        id:                 {type: 'string'},
        title:              {type: 'string', required: true},
        author:             {type:  mongoose.Schema.Types.ObjectId, ref:'authors', required: true},
        publishing_company: {type: 'string', required: true},
        pages:              {type: 'Number'}
    }
)

const books = mongoose.model('books', bookSchema)

export default books