app.factory('suggestions', [function() {
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

    var api = {};
    api.getPosts = function() {
        return data
    };

    api.addPost = function(post) {
        post.id = data.length + 1 + '';
        data.push(post)
    };

    api.findPost = function(id) {
        for (var i = 0; i < data.length; i++) {
            var post = data[i];
            if (post.id === id) {
                return post;
            }
        }
    };

    api.updatePost = function(post) {

    };

    return api;
}]);
