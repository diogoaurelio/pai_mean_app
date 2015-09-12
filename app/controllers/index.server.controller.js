exports.render = function(req, res) {
    res.render('index', {
    	title: 'Diogo Pires Aurélio webpage',
    	user: JSON.stringify(req.user)
    });
};
