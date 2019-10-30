class Storage {
    constructor(_player, _score) {
        this._player = _player;
        this._score = _score;
    }
    saveScore() {
        if (localStorage.getItem(this._player) !== null) {
            localStorage.setItem(this._player, this._score);
            alert(`${this._player}:${this._score} Saved`);
        } else {
            alert("this player not found in storage");
            
        }
    }

    loadScore() {
        if (localStorage.getItem(this._player) !== null) {
            this._score = localStorage.getItem(this._player);
            alert(`${this._player} Loaded`);
            return this._score;
        } else {
            alert("user name is not found");
        }
    }
}

// let p2 = new Storage("mohamed", 3);
let p1 = undefined;
document.getElementById("btn_save1").addEventListener("click", function () {
    parseInt(document.getElementById("score").textContent);
    p1 = new Storage(document.getElementById("playerName").value,6 );
    p1.saveScore();
});

document.getElementById("btn_load1").addEventListener("click", function () {
    p1 = new Storage(document.getElementById("playerName").value, parseInt(document.getElementById("score").textContent));
    document.getElementById("score").textContent = p1.loadScore();
});