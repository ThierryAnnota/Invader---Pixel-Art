const app = {
    pixelNumber : 8,
    cellSize : 50,
    colorSelected : '',
    gridCells : document.querySelector(".gridCellsNumber"),
    cellPixel : document.querySelector(".cellPixelSize"),
    
    saveImage () {
    document.getElementById('saveImage').addEventListener('click', function () {
        const artPainting = document.querySelector(".table");
        html2canvas(artPainting, {scrollX: 0, 
            scrollY: 0,
            windowWidth: artPainting.scrollWidth,
            windowHeight: artPainting.scrollHeight})
            .then(picture => {
                // toDataURL génère l'image. Sa qualité à 1 signifie 100% 
            const imageToSave = picture.toDataURL("image/jpeg", 1)
                // création d'un élément a pour simuler un téléchargement
            const downloadLink = document.createElement("a");
            downloadLink.href = imageToSave;
            downloadLink.download = "pixel-art.jpeg"; 
            downloadLink.click(); 
        })
    })
    },

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
            app.gridCells.innerHTML = gridSize;
            const pixelSizeElement = document.querySelector('.cellSize');
            const pixelSizeCell = parseInt(pixelSizeElement.value);
            app.cellSize = pixelSizeCell;
            app.cellPixel.innerHTML = pixelSizeCell;
            console.log(typeof(pixelSizeCell));
            console.log(pixelSizeCell + 'dans le boardSize');
            app.createTable();
            gridSizeElement.value="";
            pixelSizeElement.value='';
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
                console.log(app.cellSize);
                td.style.width = `${app.cellSize}px`
                td.style.height = `${app.cellSize}px`
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
        app.saveImage();
    },
}

app.init();








