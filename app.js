const app = {
    pixelNumber : 8,
    colorSelected : '',
    
    boardSize () {
        const formElement = document.querySelector(".configuration");
        formElement.addEventListener("submit", handleBoardSize);
        function handleBoardSize(event){
            event.preventDefault();
            const formElement = event.currentTarget;
            console.log(formElement);
            const gridSizeElement = document.querySelector('.gridSize');
            console.log(gridSizeElement);
            const gridSize = parseInt(gridSizeElement.value);
            console.log(gridSize);
            app.pixelNumber = gridSize;
            app.createTable();
            gridSizeElement.value="";
        };
    },

    createTable (){
    
        const board = document.querySelector("#invader");
        board.innerHTML = '';
        const table = document.createElement("table");
        table.classList.add("table");
        board.append(table);
        
        
        const tableElement = document.querySelector(".table");
        for (let lineNumber=1 ; lineNumber<=app.pixelNumber ; lineNumber++) {
            const tr = document.createElement('tr');
            tr.classList.add('line');
            for (let cellNumber=1 ; cellNumber<=app.pixelNumber ; cellNumber++) {
                const td = document.createElement('td');
                td.classList.add('cell');
                td.addEventListener('click', app.changeColor);
                tr.append(td);
            };
            tableElement.append(tr);
        };
    },

    selectColor(){
        const colorButtons = document.querySelectorAll('.color');
        colorButtons.forEach(button => {
            button.addEventListener('click', app.chooseColor);
        });
    },
    
    chooseColor(event){
        const clickedButton = event.target;
        console.log(clickedButton.classList[1]);
        app.colorSelected = clickedButton.classList[1];
        console.log('dans le changeColor, après le chooseColor, colorSelected est : ' + app.colorSelected);
    },
    changeColor(event){     
        const clickedCell = event.target;
        console.log('ça clique');
        clickedCell.style.backgroundColor = app.colorSelected;
    },
    
    init (){
        app.boardSize();
        app.selectColor();
        app.createTable();
    },
}

app.init();








