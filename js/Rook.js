class Rook extends ChessPice {
    constructor(_name, position) {
        super(_name, position);

    }
    setPosition(_newPosition) {
        this.position = _newPosition;
    }
    //function move  return true or false and cotaine position 
    checkMove(targetPosX, targetPosY, isSelected = false) {
        // first two conditions to check it no out of the board
        if (targetPosX < 0 && targetPosX > 7 || targetPosY < 0 && targetPosY > 7) {
            alert("out of board exception of rook");
            return false;
        }
        else if (targetPosX === this.position.getPosX() && targetPosY === this.position.getPosY()) {
            return true;
        }
        if (isSelected) {
            for (let [x, y, rest] of Player.arr) {
                if(x==targetPosX && y==targetPosY){
                    return false;
                }
            }
        }
        // this conditions to check the movement of rook pice 
        if (this.position.getPosY() === targetPosY && targetPosX < this.position.getPosX()) {
            return this.checkMove(targetPosX + 1, targetPosY,true);
        }
        else if (this.position.getPosY() === targetPosY && targetPosX > this.position.getPosX()) {
            return this.checkMove(targetPosX - 1, targetPosY,true);
        }
        else if (this.position.getPosX() === targetPosX && targetPosY < this.position.getPosY()) {
            return this.checkMove(targetPosX, targetPosY + 1,true);
        }
        else if (this.position.getPosX() === targetPosX && targetPosY > this.position.getPosY()) {
            return this.checkMove(targetPosX, targetPosY - 1,true);
        }
        else {
            return false; //move as not possiple
        }

    }
    capture(TargetPosX, TargetPosY) {
        return this.checkMove(TargetPosX, TargetPosY);
    }
    shadowMove(TargetPosX, TargetPosY) {
        return this.checkMove(TargetPosX, TargetPosY);
    }
}
