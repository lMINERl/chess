class Tile {
    constructor() {
        this.positionX = 0;
        this.positionY = 0;
    }

    drawBoard() {
        var chessBoard;
        chessBoard = document.createElement("div"); 
        for (let i = 0; i < 8; i++) {
            var block = document.createElement("div");
            block.style.marginLeft="30rem";
            document.body.append(block);

            if (i % 2 == 0) {
                for (let j = 0; j < 4; j++) {
                    block.innerHTML += "<div class='tile' id='tile" + this.positionX + "," + this.positionY + "' style='width:65px;height:65px;background-color:rgb(238,237,209);display:inline-block'></div>"
                    document.body.append(chessBoard);
                    this.positionX++;
                    block.innerHTML += "<div class='tile' id='tile" + this.positionX + "," + this.positionY + "' style='width:65px;height:65px;background-color:rgb(120,150,86);display:inline-block'></div>"
                    document.body.append(chessBoard);
                    this.positionX++;
                    if (this.positionX > 7) {
                        this.positionX = 0;
                    }
                }
            }
            else {

                for (let j = 0; j < 4; j++) {
                    block.innerHTML += "<div class='tile' id='tile" + this.positionX + "," + this.positionY + "' style='width:65px;height:65px;background-color:rgb(120,150,86);display:inline-block'></div>"
                    document.body.append(chessBoard);
                    this.positionX++;
                    block.innerHTML += "<div class='tile' id='tile" + this.positionX + "," + this.positionY + "' style='width:65px;height:65px;background-color:rgb(238,237,209);display:inline-block'></div>"
                    document.body.append(chessBoard);
                    this.positionX++;
                    if (this.positionX > 7) {
                        this.positionX = 0;
                    }
                }
            }



            this.positionY++;
            document.body.append(chessBoard);
        }


    }
}
