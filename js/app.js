const displayLength = 10;
const cdn = "http://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese.json";
if (document.getElementById('tablePostagens') != null) {
    json = buscarDados(endpoint = 'posts', tableId = 'tablePostagens', columns = ['id', 'title', 'body']);
}
if (document.getElementById('tableAlbums') != null) {
    json = buscarDados(endpoint = 'albums', tableId = 'tableAlbums', columns = ['userId', 'id', 'title']);
}
if (document.getElementById('tableTodos') != null) {
    json = buscarDados(endpoint = 'todos', tableId = 'tableTodos', columns = ['id', 'title', 'completed']);
}

// JS GERAL
function buscarDados(endpoint, tableId, columns) {
    fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
        .then(response => response.json())
        .then(json => {
            carregarDados(tableId, columns, json);
        });
}

function carregarDados(tableId, columns, json) {
    var xArray = [];
    if (columns.length) {
        columns.forEach(element => {
            xArray.push({
                data: element
            })
        });
    }
    var DataTable = $(`#${tableId}`).DataTable({
        "language": {
            "url": cdn
        },
        iDisplayLength: displayLength,
        columns: xArray
    });
    DataTable.rows.add(json).draw();
}