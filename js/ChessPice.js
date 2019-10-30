
class ChessPice {
    constructor(_name, position) {
        this._name = _name;
        this.position = position;
    }
    initialize() {
        let s = document.getElementById(`tile${this.position.getPosX()},${this.position.getPosY()}`);
        let img = document.createElement(`img`);
        img.src = `img/${this._name}.png`;
        s.appendChild(img);
    }

    //move Pice if Conditions meet of movement
    movePiceToPosition(_newPosition) {
        // debugger;
        console.log(this.position.getPosX());
        //remove the img from the current Position to the new Pos
        this.removePice();

        //assign chess Pice to new Pos
        let s = document.getElementById(`tile${_newPosition.getPosX()},${_newPosition.getPosY()}`);
        let img = document.createElement(`img`);
        img.src = `img/${this._name}.png`;
        s.appendChild(img);

        // debugger;
        //assign the current Pos to new Position
        let last_piece = -1;
        for (let i = 0; i < Player.arr.length; ++i) {
            let [x, y, obj] = Player.arr[i];
            if (x == this.position.getPosX() && y == this.position.getPosY()) {
                // debugger;
                last_piece = i;
                break;
            }
            last_piece = -1;
        }
        // debugger;
        if (last_piece !== -1) {
            Player.arr[last_piece] = [_newPosition.getPosX(), _newPosition.getPosY(), Player.arr[last_piece][2]];
            // debugger;
            
            this.setPosition(_newPosition);
            // this.position = _newPosition;
        }else{
            alert("error in moving from chesspiece");
        }


    }
    //remove the current pice from Chess Board 
    removePice() {
        let ocubiedTile = document.getElementById(`tile${this.position.getPosX()},${this.position.getPosY()}`);
        ocubiedTile.innerHTML = '';
    }
    removePiceFromPos(_targetPos) {
        let ocubiedTile = document.getElementById(`tile${_targetPos.getPosX()},${_targetPos.getPosY()}`);
        ocubiedTile.innerHTML='';
    }
    capturePiece(_targetPos) {
        this.removePice();
        this.removePiceFromPos(_targetPos);
        this.movePiceToPosition(_targetPos);
    }
}
