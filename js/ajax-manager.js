var AjaxManager = Class.create(function () {

    var sendRequest = function (method, url, data) {
        return $.ajax({
            type: method,
            dataType: 'json',
            url: url,
            data: data
        });
    };

    this.post = function (url, data, callback) {
        return sendRequest('POST', url, data, callback);
    };

    this.get = function (url, data, callback) {
        return sendRequest('GET', url, data, callback);
    };

    // this.http('GET', '/', {name: 'Roma'}).then((response) => {
    //
    // });
    // this.http = function (method, url, data) {
    //
    //     return new Promise(function (resolve, reject) {
    //
    //         var request = new XMLHttpRequest();
    //         request.open(method, url);
    //
    //         request.onreadystatechange = function (data) {
    //             if (data.readyState === XMLHttpRequest.DONE) {
    //                 if (data.status === 200) {
    //                     resolve(JSON.parse(data.responseText));
    //                 } else {
    //                     reject(data);
    //                 }
    //             }
    //         };
    //
    //         request.send('?' + Object
    //                 .keys(data)
    //                 .map(function (key) { return key + '=' + data[key]; })
    //                 .join('&')
    //         );
    //     });
    // }
});
