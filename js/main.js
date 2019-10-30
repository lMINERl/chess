
let tile = new Tile();
tile.drawBoard();
// let bishop_W = new Bishop("Bishop-0", new Position(5, 5));
// bishop_W.initialize();

// var pice = document.getElementById("tile5,5");
// pice.addEventListener("click", function () {
//     bishop_W.movePiceToPosition(new Position(6, 6));
//     console.log(bishop_W.position);
// });
// debugger;

Player.initialize();
// Player.switchPlayer();

for (let [x, y, obj] of Player.arr) {
    obj.initialize();
}
let f_fristClick = true;
let tiles = document.getElementsByClassName("tile");
//Player.switchPlayer();
let gameover = false;

let last_piece = -1;
for (let i = 0; i < 64; ++i) {
    tiles[i].addEventListener("click", (e) => {
        //firstClick
        if (gameover) {
            alert("game over");
            return;
        }

        if (e.target.nodeName === "IMG" && f_fristClick) {
            for (let i = 0; i < Player.arr.length; ++i) {
                let [x, y, obj] = Player.arr[i];

                if (x == e.target.parentNode.id[4] && y == e.target.parentNode.id[6]) {
                    if (Player.currentPlayer() != obj._name[obj._name.length - 1]) {
                        // debugger;
                        alert("not your piece to move");
                        return;
                    }
                    last_piece = i;
                    break;
                }
                last_piece = -1;
            }
            f_fristClick = !f_fristClick;
        } else {
            // debugger;
            //2nd click
            let targetPosX;
            let targetPosY;
            //2nd click is attack
            if (e.target.nodeName === "IMG") {
                //capture move
                targetPosX = Number(e.target.parentNode.id[4]);
                targetPosY = Number(e.target.parentNode.id[6]);
                //todo check if u want to attack emeny player or not
                if (!f_fristClick && last_piece !== -1) {

                    if (Player.arr[last_piece][2].capture(targetPosX, targetPosY)) {
                        for (let [x, y, obj] of Player.arr) {
                            if (x == targetPosX && y == targetPosY) {
                                if (!Player.currentPlayer() != obj._name[obj._name.length - 1]) {
                                    f_fristClick = true;
                                    alert("you cant eat your own piece");
                                    return;
                                }
                            }
                        }
                        Player.arr[last_piece][2].capturePiece(new Position(targetPosX, targetPosY));
                        // p1.score++;
                        let t = true;
                        for (let i = 0; i < Player.arr.length; ++i) {
                            let [x, y, obj] = Player.arr[i];
                            if (obj._name === "King-" + !Player.currentPlayer()) {
                                
                                t = false;
                                break;
                            }
                        }
                        if(Player.arr.incudes())
                        if (t) {
                            gameover = true;
                            alert("gameover");
                            return;
                        }
                        Player.switchPlayer();
                        ShouldDisplayTheDesignOfTheSecondPlayer();
                    } else {
                        alert("move is not valid");
                    }
                } else {
                    alert("no piece");
                }
            } else {
                //normal move
                // debugger;
                targetPosX = Number(e.target.id[4]);
                targetPosY = Number(e.target.id[6]);
                if (!f_fristClick && last_piece !== -1) {
                    // debugger;
                    if (Player.arr[last_piece][2].checkMove(targetPosX, targetPosY)) {
                        Player.arr[last_piece][2].movePiceToPosition(new Position(targetPosX, targetPosY));

                        Player.switchPlayer();
                        ShouldDisplayTheDesignOfTheSecondPlayer();
                    } else {
                        alert("move is not valid");
                    }
                } else {
                    alert("no piece");
                }
            }
            f_fristClick = !f_fristClick;
        }

    });

}
function ShouldDisplayTheDesignOfTheSecondPlayer() {
    if (Player.currentPlayer() === 0) {

    }
}

//////////////////////////////////////////////////
