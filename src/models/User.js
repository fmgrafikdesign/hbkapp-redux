var m = require("mithril");

var User = {
    list: [],
    loadList: function() {
        // XHR call
        return m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/users",
            withCredentials: true
        })
            .then(function(result) {
                User.list = result.data
            })
    },
    current: {},
    load: function(id) {
        return m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/users/" + id,
            widthCredentials: true
            }
        )
            .then(function(result) {
                User.current = result
            })
    },
    loadLocal: function(id) {
        return User.current = User.list.find(function(user) { return user.id == id })
    },
    save: function() {
        return m.request({
            method: "PUT",
            url: "https://rem-rest-api.herokuapp.com/api/users/" + User.current.id,
            data: User.current,
            withCredentials: true
        });
    }
};

module.exports = User;