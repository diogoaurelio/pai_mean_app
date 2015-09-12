angular.module('example').controller('ExampleController', ['$scope', 'Authentication', '$translate', '$sce',
	function($scope, Authentication, $translate, $sce) {
		$scope.authentication = Authentication;
		$scope.changeLanguage = function (langKey) {
	    $translate.use(langKey);
	  };
	}
]);
