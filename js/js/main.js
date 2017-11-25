$(document).ready(function () {

    addContainer();

    $('#add_category').on('click', function () {
        addContainer();
    });

    $('#items-container').on('click', '.remove_category', function () {
        // var em = new ElementManager();
        var id = parseInt($(this).closest('.list_items').attr('id').slice(4));
        Container.deleteContainer(id);
    });
});

function addContainer() {
    var manager = new Manager(Container.add(), {
        'idPrefix': 'item',
        'typeRenderHtml': 'select'
    });
    manager.start();
}
