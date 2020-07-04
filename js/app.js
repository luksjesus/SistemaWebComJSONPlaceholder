if (document.getElementById('tablePostagens') != null) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            var DataTable = $('#tablePostagens').DataTable({
                "language": {
                    "url": "http://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese.json"
                },
                "scrollX": true,
                iDisplayLength: 15,
                columns: [
                    { data: 'userId' },
                    { data: 'id' },
                    { data: 'title' },
                    { data: 'body' },
                ]
            });
            DataTable.rows.add(json).draw();

        })

}
if (document.getElementById('tableAlbums') != null) {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(json => {
            var DataTable = $('#tableAlbums').DataTable({
                "language": {
                    "url": "http://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese.json"
                },
               // "scrollX": true deixa a tabela responsiva.
                iDisplayLength: 15,
                columns: [
                    { data: 'userId' },
                    { data: 'id' },
                    { data: 'title' },
                ]
            });
            DataTable.rows.add(json).draw();

        })
}

if (document.getElementById('tableTodos') != null) {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {
            var DataTable = $('#tableTodos').DataTable({
                "language": {
                    "url": "http://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese.json"
                },
               // "scrollX": true,
                iDisplayLength: 15,
                columns: [
                    { data: 'userId' },
                    { data: 'id' },
                    { data: 'title' },
                    { data: 'completed' },
                ]
            });
            DataTable.rows.add(json).draw();

        })
}