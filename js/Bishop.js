

class Bishop extends ChessPice {
    constructor(_name, position) {
        super(_name, position);
    }
    setPosition(_newPosition) {
        this.position = _newPosition;
    }
    checkMove(targetPosX, targetPosY,isSelected=false) {
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
        if (targetPosX > this.position.getPosX() && targetPosY > this.position.getPosY()) {
            return this.checkMove(targetPosX - 1, targetPosY - 1,true);
        }
        else if (targetPosX < this.position.getPosX() && targetPosY < this.position.getPosY()) {
            return this.checkMove(targetPosX + 1, targetPosY + 1,true);
        }
        else if (targetPosX < this.position.getPosX() && targetPosY > this.position.getPosY()) {
            return this.checkMove(targetPosX + 1, targetPosY - 1,true);
        }
        else if (targetPosX > this.position.getPosX() && targetPosY < this.position.getPosY()) {
            return this.checkMove(targetPosX - 1, targetPosY + 1,true);
        }
        else {
            return false; //move as not possiple

        }
    }
    shadowMove(targetPosX, targetPosY) {
        return this.checkMove(targetPosX, targetPosY);
    }
    capture(targetPosX,targetPosY) {
        return this.checkMove(targetPosX,targetPosY);
    }
}
