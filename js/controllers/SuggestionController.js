app.controller(
    'SuggestionController',
    ['$scope', 'usSpinnerService', 'suggestions', '$routeParams',
    function($scope, usSpinnerService, suggestions, $routeParams) {
        $scope.post = suggestions.findCachedPost($routeParams.id);

        var updatePost = function() {
            // Turn on a spinner while loading data from server
            usSpinnerService.spin('spinner-1');

            suggestions.updatePost($scope.post)
                .then(function(data) {
                    // Turn off a spinner when data is loaded
                    usSpinnerService.stop('spinner-1');
                }, function(error) {
                    console.log('Get post error:' + error);
                });
        };

        $scope.addComment = function() {
            if (!$scope.new_comment || $scope.new_comment === "") {
                return;
            }

            $scope.post.comments.push({
                body: $scope.new_comment,
                upvotes: 0
            });

            $scope.new_comment = "";
            updatePost();
        };

        $scope.upVoteComment = function(comment) {
            comment.upvotes += 1;
            updatePost();
        };

        $scope.new_comment = "";
}]);
