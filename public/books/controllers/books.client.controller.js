angular.module('books').controller('BooksController', ['$scope', '$routeParams', '$location', 'Authentication', '$translate', '$sce', 'Books', 
	function($scope, $routeParams, $location, Authentication, Books, $translate, $sce) {
		$scope.authentication = Authentication;
		$scope.changeLanguage = function (langKey) {
	    $translate.use(langKey);
	  };
		$scope.create = function() {
			var book = new Books({
				title: this.title,
				description: this.description,
				date_created: this.year,
				publisher: this.publisher,
				picture_url: this.picture_url,
				tags: this.tags
			});

			book.$save(function(response) {
				$location.path('books/' + response._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.books = Books.query();
		};

		$scope.findOne = function() {
			$scope.book = Books.get({
				bookId: $routeParams.bookId
			});
		};

		$scope.update = function() {
			$scope.book.$update(function() {
				$location.path('books/' + $scope.book._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.delete = function(book) {
			if (book) {
				todo.$remove(function() {
					for (var i in $scope.books) {
						if ($scope.books[i] === book) {
							$scope.books.splice(i, 1);
						}
					}
				});
			} else {
				$scope.book.$remove(function() {
					$location.path('books');
				});
			}
		};
	}
]);
