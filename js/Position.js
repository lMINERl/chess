class Position {
    constructor(xpos, ypos) {
        this.xpos = xpos;
        this.ypos = ypos;
    }
    setPosX(val) {
        if (val > 7 || val < 0) {

            alert("value should not be more than 8 or less than zero.");
        }
        else {
            this.xpos = val;
        }
    }
    getPosX() {
        if (this.xpos === undefined || this.xpos === null) {
            alert("is not defined");
        }
        else {
            return this.xpos;
        }
    }

    setPosY(val) {
        if (val > 7 || val < 0) {

            alert("value should not be more than 8 or less than zero.");
        }
        else {
            this.ypos = val;
        }
    }

    getPosY() {
        if (this.ypos === undefined || this.ypos === null) {
            alert("is not defined");
        }
        else {
            return this.ypos;
        }
    }
}

