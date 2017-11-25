var Container = {

    telnum: '',
    container: '#items-container',

    add: function () {
        var id = this.getIdLastContainer();
        var el = $('<div></div>');
        el.addClass('list_items');
        el.attr('id', 'item'+id);
        this.addBtnDelete(el, id, '-');
        $(this.container).append(el);
        return id;
    },

    getIdLastContainer: function () {
        var length = $('#items-container').has('div').length;
        return (length) ? this.telnum = parseInt($('.container').find('.list_items:last').attr('id').slice(4))+1 : this.telnum = 0;
    },

    addBtnDelete: function (el, id, name) {
        var button = $('<button></button>');
        button.addClass('button remove_category');
        button.html(name);
        $(el).append(button);
    },

    deleteContainer: function (id) {
        if (id !== 0) {
            $('div#item'+id).remove();
        }
    },

    deleteElementsFrom: function (container, el) {
        $(container + ' .'+el).nextAll().remove();
    }
};
