class King extends ChessPice {
    constructor(_name, position) {
        super(_name, position);
    }
    setPosition(_newPosition) {
        this.position = _newPosition;
    }
    checkMove(targetPosX, targetPosY) {
        // debugger;

        //TO DO : Check First if King will move to a Threatining Position <<
        

        for (let [x, y, obj] of Player.arr) {
            //check for pice player
            if (targetPosX === x && targetPosY === y ) {//|| obj.shadowMove(targetPosX, targetPosY)
                //careful the move of the opposite king leads to the infinite for loop
                return false;
            }

        }
        return this.shadowMove(targetPosX, targetPosY);


    }
    shadowMove(targetPosX, targetPosY) {

        if ((targetPosX > 7 && targetPosX < 0) || (targetPosY > 7 && targetPosY < 0)) {
            return false;
        }//super out of border

        if (this.position.getPosY() === targetPosY) {
            if ([1, -1].indexOf(this.position.getPosX() - targetPosX) !== -1) {
                return true;
            }
            return false;
        }
        if (this.position.getPosY() + 1 === targetPosY || this.position.getPosY() - 1 === targetPosY) {
            if ([0, 1, -1].indexOf(this.position.getPosX() - targetPosX) !== -1) {
                return true;
            }
            return false;
        }
        return false;
    }
}