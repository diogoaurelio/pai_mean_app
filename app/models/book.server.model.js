var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
//Reference Doc: http://mongoosejs.com/docs/schematypes.html
var BookSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
  updated: {
    type: Date,
    default: Date.now
  },
	title: {
		type: String,
		default: '',
		trim: true,
		required: "Title can't be blank"
	},
  description: {
    type: String,
    default: '',
    trim: true
  },
  date_published: {
    type: Date,
    default: ''
  },
  publisher: {
    type: String,
    default: '',
    trim: true
  },
  picture_url: {
    type: String,
    default: '',
    trim: true
  },
  tags: {
    type: [String],
    default: '',
    trim: true
  },
	creator: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});
mongoose.model('Book', BookSchema);
