const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DiaryPostSchema = new Schema({
  description: { type: String, required: true },
  date: { type: String, required: true  },
}, {
  timestamps: true,
});

const DiaryPost = mongoose.model('DiaryPost', DiaryPostSchema);

module.exports = DiaryPost;
