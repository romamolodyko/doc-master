var TagSelectGenerator = Class.create(function () {

    this.select = function (name, defaultClass, options) {
        // return '<select name="'+name+'" class="'+defaultClass+'">'+options+'</select>'
        var select = $('<select></select>');
        select.addClass(name);
        select.attr('name', name);
        select.append(options);
        return select;

    };

    this.option = function (value, name, id, selected) {
        var isSelected = selected ? 'selected="selected"' : '';
        return '<option data-id="'+id+'" value="'+value+'" '+isSelected+'>'+value+'</option>'
    };

    this.create = function (id, data, setting) {
        var options = '';
        data.forEach(function (item, i, arr) {
            options += this.option(item.option, item.option, item.id, false);
        }.bind(this));

        return this.select(setting.tagName, setting.tagName, options);
    };

    this.addSelect = function (parent, id, data, setting) {
        var select = this.create(id, data, setting);
        $(parent).append(select);

        return select;
    };

});
