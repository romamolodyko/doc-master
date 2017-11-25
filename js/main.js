$(document).ready(function () {

    addContainer();

    // function getCategories() {
    //     return new Promise(function (resolve, reject) {
    //         am.getCategories(resolve);
    //     })
    // }
    // getCategories().then(function (response) {
    //     var manager = new Manager();
    //     var renderer = new SelectRenderer(response.data, response.setting);
    //     var container = renderer.showCategories(element);
    //     var r = manager.listen(container, function (item) {
    //         var id = $(item).attr('id');
    //         idContainer = id;
    //         setOption(id, renderer.idItemContainer);
    //     });
    // });
    //
    // function setOption(id, container) {
    //     getOption(idContainer, id).then(function (response) {
    //         var manager = new Manager();
    //         var renderer = new SelectRenderer(response.data, response.setting);
    //         var el = renderer.showItem(idContainer);
    //         manager.listen(el, function (item) {
    //             var id = $(item).attr('id');
    //             setOption(id, renderer.idItemContainer);
    //         });
    //     })
    // }
    // function getOption(idContainer, idItem) {
    //     return new Promise(function (resolve, reject) {
    //         am.getOptions(idContainer, idItem, resolve);
    //     })
    // }

    $('#add_category').on('click', function () {
        addContainer();
    });

    $('#items-container').on('click', '.remove_category', function () {
        // var em = new ElementManager();
        var id = parseInt($(this).closest('.list_items').attr('id').slice(4));
        ElementManager.delete(id);
    });
});

function addContainer() {
    var manager = new Manager(ElementManager.add(), {
        'idPrefix': 'item',
        'typeRenderHtml': 'select'
    });
    manager.start();
}
