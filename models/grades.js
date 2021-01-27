import { db } from '../models/index.js'

const schema = new db.mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
    min: [0, 'Min value 0'],
  },
  lastModified: {
    type: Date,
    required: true,
    default: Date.now(),
  },
})

const model = new db.mongoose.model('grades', schema)

export { model }
