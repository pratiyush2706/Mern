import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  description: {
    type: String
  },
  responsible: {
    type: String
  },
  priority: {
    type: String
  }
});

export default mongoose.model('Todo', TodoSchema);