app.controller('HomeController', ['$scope', 'usSpinnerService', 'suggestions', function($scope, usSpinnerService, suggestions) {
    var loadPosts = function() {
        // Turn on a spinner while loading data from server
        usSpinnerService.spin('spinner-1');

        suggestions.getPosts()
            .then(function(data) {
                $scope.posts = data;

                // Turn off a spinner when data is loaded
                usSpinnerService.stop('spinner-1');
            }, function(error) {
                console.log('Get post error:' + error);
            });
    };

    $scope.upVote =function(post) {
        post.upvotes += 1;

        // Turn on a spinner while loading data from server
        usSpinnerService.spin('spinner-1');
        suggestions.updatePost(post)
            .then(function(data) {
                // Turn off a spinner when data is loaded
                usSpinnerService.stop('spinner-1');
            }, function(error) {
                console.log('Get post error:' + error);
            });
    };

    $scope.addSuggestion = function() {
        if(!$scope.title || $scope.title === "") {
            return;
        }

        // Turn on a spinner while loading data from server
        usSpinnerService.spin('spinner-1');
        var newPost = {
            title: $scope.title,
            upvotes: 0,
            comments: []
        };
        suggestions.addPost(newPost)
            .then(function(data) {
                newPost.id = data;
                $scope.posts.push(newPost);

                // Turn off a spinner when data is loaded
                usSpinnerService.stop('spinner-1');
            }, function(error) {
                console.log('Get post error:' + error);
            });

        $scope.title = "";
    };

    $scope.posts = suggestions.getCachedPosts();
    if ($scope.posts.length === 0) {
        loadPosts();
    }
}]);
