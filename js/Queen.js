class Queen extends ChessPice {
    constructor(_name, position) {
        super(_name, position)

        this.rook = new Rook("null", this.position);
        this.bishop = new Bishop("null", this.position);
    }
    setPosition(_newPosition) {
        this.position = _newPosition;
        this.rook.position = _newPosition;
        this.bishop.position = _newPosition;
    }
    checkMove(targetPosX, targetPosY) {
        // debugger;
        return (this.rook.checkMove(targetPosX, targetPosY) || this.bishop.checkMove(targetPosX, targetPosY));
    }
    capture(targetPosX,targetPosY) {
        //TO DO : trace back if piece is blocking the condition
        return this.checkMove(targetPosX,targetPosY);
    }
    shadowMove(TargetPosX, TargetPosY) {
        return this.checkMove(TargetPosX, TargetPosY);
    }
}

