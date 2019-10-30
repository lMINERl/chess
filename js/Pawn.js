class Pawn extends ChessPice {
    constructor(_name, position) {
        super(_name, position);
        this.isFristMove = 1;
    }
    setPosition(_newPosition) {
        this.position = _newPosition;
    }
    //function move  return true or false and cotaine position 
    checkMove(targetPosX, targetPosY) {
        // debugger;
        if (targetPosX < 0 && targetPosX > 7 || targetPosY < 0 && targetPosY > 7) {
            alert("out of board exception of Pawn");
            return false;
        } else {

            let temp = this.isFristMove;
            if (this.isFristMove) {
                if ([2, -2].indexOf(this.position.getPosY() - targetPosY) === -1) {
                    temp = 0;
                }
               
            }
            if (targetPosX === this.position.getPosX() && !Player.currentPlayer()) {
                if (targetPosY === this.position.getPosY() - 1 - temp) {
                    this.isFristMove = 0;
                    return true;
                }
                return false;
            } else if (targetPosX === this.position.getPosX() && targetPosY == this.position.getPosY() + 1 + temp) {
                this.isFristMove = 0;
                return true;
            } else {
                return false
            }
        }
    }
    capture(targetPosX, targetPosY) {
        if (targetPosX < 0 && targetPosX > 7 || targetPosY < 0 && targetPosY > 7) {
            alert("out of board exception of rook");
            return false;
        }
        // debugger;
        if ([1, -1].indexOf(this.position.getPosX() - targetPosX) !== -1) {
            if (!Player.currentPlayer()) {
                if (targetPosY === this.position.getPosY() - 1) {
                    this.isFristMove = 0;
                    return true;
                }
                return false;
            } else {
                if (targetPosY === this.position.getPosY() + 1) {
                    this.isFristMove = 0;
                    return true;
                }
                return false;
            }
        } else {
            return false;
        }
    }
    shadowMove(TargetPosX, TargetPosY) {
        return this.checkMove(TargetPosX, TargetPosY);
    }
}

//test each one speratily all of them

// p.move(5,3); 2 moves for white
// p.move(5,4); 1 move for white
// p.move(5,6);//false more than 2 moves

//Player.currentPlayer=flase;


// p.capture(6,4);
// p.capture(4,4);
// p.capture(6,6);//false cause white is moving
// p.capture(4,6);//false cause white is moving
// p.capture(5,5);//false cant capture itself
// Player.currentPlayer=false;
// p.capture(6,4);//false cause black is moving
// p.capture(4,4);//false cause black is moving
// p.capture(6,6);
// p.capture(4,6);
// p.capture(5,5);//false cant capture itself