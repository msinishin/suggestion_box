app.factory('suggestions', ['$q', function($q) {
    var data = [
        {
            id: '1',
            title: 'Free pizza at club meetings',
            upvotes: 1,
            comments: []
        },
        {
            id: '2',
            title: 'End all club emails with Laffy Taffy jokes',
            upvotes: 9,
            comments: []
        },
        {
            id: '3',
            title: 'Retrofit water fountain with Gatorade',
            upvotes: 7,
            comments: []
        },
        {
            id: '4',
            title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings,',
            upvotes: 13,
            comments: []
        }
    ];

    var cachedData = [];

    var api = {};
    api.getPosts = function() {
        var deferred = $q.defer();
        setTimeout(function() {
            cachedData = [];
            for (var i = 0; i < data.length; i++) {
                cachedData.push(data[i]);
            }
            deferred.resolve(cachedData);
        }, 3000);
        return deferred.promise;
    };

    api.getCachedPosts = function() {
        return cachedData;
    };

    api.addPost = function(post) {
        var deferred = $q.defer();
        post.id = cachedData.length + 1 + '';
        setTimeout(function() {
            data.push(post);
            deferred.resolve(post.id);
        }, 2000);
        return deferred.promise;
    };

    api.findCachedPost = function(id) {
        for (var i = 0; i < cachedData.length; i++) {
            var post = cachedData[i];
            if (post.id === id) {
                return post;
            }
        }
    };

    api.updatePost = function(post) {
        var deferred = $q.defer();
        setTimeout(function() {
            deferred.resolve(post.id);
        }, 2000);
        return deferred.promise;
    };

    return api;
}]);
