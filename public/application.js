var appName = 'mean';
var app = angular.module(appName, ['ngResource', 'ngRoute', 'ngSanitize', 'pascalprecht.translate', 'example', 'users', 'todos', 'books']);

app.config(['$locationProvider', function($locationProvider) {
		$locationProvider.hashPrefix('!');
	}
]);


app.config(['$translateProvider', function ($translateProvider) {
	$translateProvider.useSanitizeValueStrategy('escape');
	$translateProvider.translations('en', {
    'TITLE': 'Diogo Pires Aurélio',
    'FOO': 'This is a paragraph',
		'BUTTON_TEXT_PT': 'PT | português',
		'BUTTON_TEXT_EN': 'EN | inglês',
		'HOME': 'Home',
		'BOOKS': 'Books',
		'BOOKREVIEWS': 'Bookreviews',
		'PAPERS': 'Papers',
		'LECTURES': 'Lectures',
		'INTERVIEWS': 'Interviews',
		'UNIVERSITY': 'University',
		'CV': 'CV',
		'ADMIN_MENU': 'ADMIN MENU',
		'BIO': 'BIO',
		'PROF_AT': 'Professor at',
		'ABOUT': 'About',
		'CREATE_BOOK': 'Create book'
  });

  $translateProvider.translations('pt', {
    'TITLE': 'Diogo Pires Aurélio',
    'FOO': 'Dies ist ein Absatz',
		'BUTTON_TEXT_PT': 'PT | portuguese',
		'BUTTON_TEXT_EN': 'EN | english',
		'HOME': 'Início',
		'BOOKS': 'Livros',
		'BOOKREVIEWS': 'Bookreviews',
		'PAPERS': 'Papers',
		'LECTURES': 'Aulas',
		'INTERVIEWS': 'Entrevistas',
		'UNIVERSITY': 'Universidade',
		'CV': 'CV',
		'ADMIN_MENU': 'ADMIN MENU',
		'BIO': 'BIO',
		'PROF_AT': 'Professor na',
		'ABOUT': 'Sobre',
		'CREATE_BOOK': 'Criar livro no sistema'
  });

  $translateProvider.preferredLanguage('en');
}]);


if (window.location.hash === '#_=_') window.location.hash = '#!';

angular.element(document).ready(function() {
	angular.bootstrap(document, [appName]);
});

//var app = angular.module('mean', ['example', 'ngRoute']);
