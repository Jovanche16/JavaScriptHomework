function createTable() {
    let rows = document.getElementById('rows').value;
    let columns = document.getElementById('columns').value;

    let table = document.createElement('table');

    for (let i = 1; i <= rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 1; j <= columns; j++) {
            let td = document.createElement('td');
            //td.innerText = `Row #${i} Column #${j}`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    let tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = "";
    tableContainer.appendChild(table);
}

document.getElementById('tableForm').addEventListener('submit', function (event) {
    event.preventDefault();
    createTable();
});
