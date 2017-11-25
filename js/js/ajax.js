var Ajax = Class.create(function () {
    this.sendRequest = function (url, data, callback) {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: url,
            data: data,
            success: function (response) {
                callback(response);
            }
        });
    };
});
