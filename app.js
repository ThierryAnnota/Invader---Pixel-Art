const board = document.querySelector("#invader");
const table = document.createElement("table");
table.classList.add("table");
board.append(table);

const tableElement = document.querySelector(".table");
for (let lineNumber=1 ; lineNumber<=8 ; lineNumber++) {
    const tr = document.createElement('tr');
    tr.classList.add('line');
    for (let cellNumber=1 ; cellNumber<=8 ; cellNumber++) {
        const td = document.createElement('td');
        td.classList.add('cell');
        td.addEventListener('click', changeColor);
        tr.append(td);
    };
    tableElement.append(tr);
};

function changeColor(event){
    console.log('clicky');
    console.log(event);
    const clickedCell = event.target;
    clickedCell.classList.toggle('black');
}


