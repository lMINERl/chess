
class Knight extends ChessPice {
    constructor(_name, position) {
        super(_name, position);
    }
    setPosition(_newPosition) {
        this.position = _newPosition;
    }
    checkMove(TargetPosX, TargetPosY) {

        if (this.position.getPosY() + 1 == TargetPosY || this.position.getPosY() - 1 == TargetPosY) {
            if (this.position.getPosX() + 2 == TargetPosX || this.position.getPosX() - 2 == TargetPosX) {
                return true;
            }
            else {
                return false;
            }
        }
        else if (this.position.getPosX() + 1 == TargetPosX || this.position.getPosX() - 1 == TargetPosX) {
            if (this.position.getPosY() + 2 == TargetPosY || this.position.getPosY() - 2 == TargetPosY) {
                return true;
            }
            else {
                return false;
            }

        }
        else {
            return false;
        }
    }
    shadowMove(TargetPosX, TargetPosY) {
        return this.checkMove(TargetPosX, TargetPosY);
    }
    capture(TargetPosX, TargetPosY) {
        return this.checkMove(TargetPosX, TargetPosY);
    }
}
