var mongoose = require('mongoose'),
	Todo = mongoose.model('Book');

var getErrorMessage = function(err) {
	if (err.errors) {
		for (var errName in err.errors) {
			if (err.errors[errName].message) return err.errors[errName].message;
		}
	} else {
		return 'Unknown server error';
	}
};

exports.create = function(req, res) {
	var book = new Book(req.body);
	book.creator = req.user;
	book.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.json(book);
		}
	});
};

exports.list = function(req, res) {
	Book.find().sort('-date_published').populate('creator', 'name').exec(function(err, books) {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.json(books);
		}
	});
};

exports.read = function(req, res) {
	res.json(req.book);
};

exports.bookByID = function(req, res, next, id) {
	Todo.findById(id).populate('creator', 'name').exec(function(err, book) {
		if (err)
			return next(err);

		if (!book)
			return next(new Error('Failed to load book ' + id));

		req.book = book;
		next();
	});
};

exports.update = function(req, res) {
	var book = req.book;
	book.title = req.body.title;
	book.description = req.body.description;
	book.date_published = req.body.date_published;
	book.publisher = req.body.publisher;
	book.tags = req.body.tags;

	book.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.json(book);
		}
	});
};

exports.delete = function(req, res) {
	var book = req.book;
	book.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.json(book);
		}
	});
};

exports.hasAuthorization = function(req, res, next) {
	if (req.book.creator.id !== req.user.id) {
		return res.status(403).send({
			message: 'User is not authorized'
		});
	}
	next();
};
