var SECRETS = require('./../secrets');

module.exports = {
	port: SECRETS.PROD.APP_PORT,
	db: 'mongodb://' +SECRETS.PROD.DB_HOST +'/' + SECRETS.PROD.APP_PORT.DB_NAME,
	facebook: {
		clientID: SECRETS.PROD.facebook.clientID,
		clientSecret: SECRETS.PROD.facebook.clientSecret,
		callbackURL: 'http://' + SECRETS.PROD.APP_HOST +':'+ SECRETS.PROD.APP_PORT +'/oauth/facebook/callback'
	},
	twitter: {
		clientID: SECRETS.PROD.twitter.clientID,
		clientSecret: SECRETS.PROD.twitter.clientSecret,
		callbackURL: 'http://' + SECRETS.PROD.APP_HOST +':'+ SECRETS.PROD.APP_PORT +'/oauth/twitter/callback'
	}
};
