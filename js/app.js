const displayLength = 10;
const cdn = {
    "sProcessing":   "A processar...",
    "sLengthMenu":   "Mostrar _MENU_ registos",
    "sZeroRecords":  "Não foram encontrados resultados",
    "sInfo":         "Mostrando de _START_ até _END_ de _TOTAL_ registos",
    "sInfoEmpty":    "Mostrando de 0 até 0 de 0 registos",
    "sInfoFiltered": "(filtrado de _MAX_ registos no total)",
    "sInfoPostFix":  "",
    "sSearch":       "Procurar:",
    "sUrl":          "",
    "oPaginate": {
        "sFirst":    "Primeiro",
        "sPrevious": "Anterior",
        "sNext":     "Seguinte",
        "sLast":     "Último"
    }
}
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
        "language": cdn,
        iDisplayLength: displayLength,
        columns: xArray
    });
    DataTable.rows.add(json).draw();
}