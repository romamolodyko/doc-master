var Manager = Class.create(function () {

    this.constructor = function (element, config) {
        this.idItemContainer = element;
        this.config = new Config(config);
        this.httpClient = new AjaxManager();
        this.renderer = new SelectRenderer();
        this.items = [];
        this.currentQuery = '';
        this.data = '';
        this.serviceId = '';
    };

    this.start = function () {
        this.sendAjaxRequest('app.php?type=categories', '').done();
    };

    this.normalizeId = function (id) {
        return 'id' + id;
    };

    this.getUserData = function (id) {
        return this.httpClient.get('http://github.com/json/data/user' + 'id' + id);
    };

    this.getUserImage = function (data) {
        return data.user.imagePath;
    };

    this.sendAjaxRequest = function (url, id) {

        // this.httpClient.get('/get', function (id) {
        //     this.httpClient.get('http://github.com/json/data/user' + 'id' + id, function () {
        //         $('img').attr('src', data.user.imagePath);
        //     });
        // });
        //
        // this.httpClient.get('/get')
        //     .then(this.normalizeId.bind(this))
        //     .then(this.getUserData.bind(this))
        //     .then(this.getUserImage.bind(this))
        //     .then(function (data) {
        //         $('img').attr('src', imagePath);
        //     });

        this.httpClient.get(url, {serviceId: this.serviceId, idItem: id, currentQuery: this.currentQuery})
            .then(function(data) {
                return JSON.parse(data);
            })
            .then(function(data) {
                this.init(data);
            })
            .then(JSON.parse)
            .then(this.init.bind(this))
        ;
    };

    this.init = function (response) {
        this.setData(response);
        var el = this.render();
        (!this.isLastService(response)) ? this.listenOption(el) : console.log('end');
    };

    // will return jquery select object
    this.render = function () {
      return this.renderer.addSelect(this.idToString(), this.idItemContainer, this.data.data, this.data.setting);
    };

    this.setData = function (response) {
        this.data = response;
        this.currentQuery = response.setting.currentQuery;
    };

    this.do = function (selectedElement) {
        var id = $(selectedElement).attr('data-id');
        var key = $(selectedElement).closest('select').attr('class');
        this.listenCategoryChanges(id, key);

        if(this.isQueryExist(key)) {
            ElementManager.deleteFrom(this.idToString(), key);
            this.clearQuery(key);
            this.currentQuery = this.items[key];
        }

        this.registerQueryId(key, this.currentQuery);
        this.sendAjaxRequest('app.php?type=option', id);

    };

    this.listenOption = function (container) {
        $(container).on('change', function () {
            var self = this;
            var className = $(container).attr('class');
            $(this.idToString() +' .' + className +' option:selected').each(function () {
                self.do(this);
            });
        }.bind(this));
    };

    this.isQueryExist = function (key) {
        return (key in this.items);
    };

    this.registerQueryId = function (key, value) {
        this.items[key] = value;
    };

    this.clearQuery = function (key) {
        for(var i in this.items) {
            if(this.items[i] > this.items[key]) {
                delete this.items[i];
            }
        }
    };

    this.isService = function () {
        return (this.serviceId.length === 0);
    };

    this.isServiceChange = function (id, key) {
        if(key === 'category') {
            return (this.serviceId !== id);
        }
    };

    this.listenCategoryChanges = function (id, key) {
        if(this.isService() || this.isServiceChange(id, key)) {
            this.serviceId = id;
            this.items = [];
            this.currentQuery = '';
            ElementManager.deleteFrom(this.idToString(), key);
        }
    };

    this.idToString = function () {
        return '#'+this.config.get('idPrefix')+this.idItemContainer;
    };

    this.isLastService = function (response) {
        return (response.setting.last);
    }
});