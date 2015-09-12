var SECRETS = require('./../secrets');

module.exports = {
	port: SECRETS.DEV.APP_PORT,
	db: 'mongodb://' +SECRETS.DEV.DB_HOST +'/' + SECRETS.DEV.APP_PORT.DB_NAME,
	facebook: {
		clientID: SECRETS.DEV.facebook.clientID,
		clientSecret: SECRETS.DEV.facebook.clientSecret,
		callbackURL: 'http://' + SECRETS.DEV.APP_HOST +':'+ SECRETS.DEV.APP_PORT +'/oauth/facebook/callback'
	},
	twitter: {
		clientID: SECRETS.DEV.twitter.clientID,
		clientSecret: SECRETS.DEV.twitter.clientSecret,
		callbackURL: 'http://' + SECRETS.DEV.APP_HOST +':'+ SECRETS.DEV.APP_PORT +'/oauth/twitter/callback'
	}
};
