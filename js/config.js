var Config = Class.create(function () {
    
    this.constructor = function (config) {
        this.entires = config || [];
    };
    
    this.get = function (key) {
        if(typeof this.entires[key] !== 'undefined') {
            return this.entires[key];
        } else {
            throw new Error(key + ' is not defined');
        }
    };

    this.set = function (key, value) {
        if(this.has(key)) {
            this.entires[key] = value;
        } else {
            throw new Error(key + ' is already defined');
        }
    };

    this.has = function (key) {
        var result = false;
        (this.entires[key] !== 'undefined') ? result = true : result = false;
        return result;
    }
    
});