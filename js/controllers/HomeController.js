app.controller('HomeController', ['$scope', 'suggestions', function($scope, suggestions) {
    $scope.posts = suggestions.getPosts();
    $scope.upVote =function(post) {
        post.upvotes += 1;
    };

    $scope.addSuggestion = function() {
        if(!$scope.title || $scope.title === "") {
            return;
        }

        suggestions.addPost({
            title: $scope.title,
            upvotes: 0,
            comments: []
        });

        $scope.posts = suggestions.getPosts();

        $scope.title = "";
    }
}]);
