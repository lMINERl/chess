const Player = {
    _currentPlayer: 1,
    arr: [],
    switchPlayer: () => {
        if (Player._currentPlayer === 1) {

            Player._currentPlayer = 0;
        }
        else {
            Player._currentPlayer = 1;

        }
    },
    currentPlayer: () => {
        return Player._currentPlayer;
    },
    initialize: () => {
        // let playerWhite = [];
        // arr.push([0, 6, new Pawn("Pawn-0", new Position(0, 6))]);
        Player.arr.push([0, 6, new Pawn("Pawn-0", new Position(0, 6))]);
        Player.arr.push([1, 6, new Pawn("Pawn-0", new Position(1, 6))]);
        Player.arr.push([2, 6, new Pawn("Pawn-0", new Position(2, 6))]);
        Player.arr.push([3, 6, new Pawn("Pawn-0", new Position(3, 6))]);
        Player.arr.push([4, 6, new Pawn("Pawn-0", new Position(4, 6))]);
        Player.arr.push([5, 6, new Pawn("Pawn-0", new Position(5, 6))]);
        Player.arr.push([6, 6, new Pawn("Pawn-0", new Position(6, 6))]);
        Player.arr.push([7, 6, new Pawn("Pawn-0", new Position(7, 6))]);
        Player.arr.push([0, 7, new Rook("Rook-0", new Position(0, 7))]);
        Player.arr.push([1, 7, new Knight("Knight-0", new Position(1, 7))]);
        Player.arr.push([2, 7, new Bishop("Bishop-0", new Position(2, 7))]);
        Player.arr.push([3, 7, new Queen("Queen-0", new Position(3, 7))]);
        Player.arr.push([4, 7, new King("King-0", new Position(4, 7))]);
        Player.arr.push([5, 7, new Bishop("Bishop-0", new Position(5, 7))]);
        Player.arr.push([6, 7, new Knight("Knight-0", new Position(6, 7))]);
        Player.arr.push([7, 7, new Rook("Rook-0", new Position(7, 7))]);

        Player.arr.push([0, 1, new Pawn("Pawn-1", new Position(0, 1))]);
        Player.arr.push([1, 1, new Pawn("Pawn-1", new Position(1, 1))]);
        Player.arr.push([2, 1, new Pawn("Pawn-1", new Position(2, 1))]);
        Player.arr.push([3, 1, new Pawn("Pawn-1", new Position(3, 1))]);
        Player.arr.push([4, 1, new Pawn("Pawn-1", new Position(4, 1))]);
        Player.arr.push([5, 1, new Pawn("Pawn-1", new Position(5, 1))]);
        Player.arr.push([6, 1, new Pawn("Pawn-1", new Position(6, 1))]);
        Player.arr.push([7, 1, new Pawn("Pawn-1", new Position(7, 1))]);
        Player.arr.push([0, 0, new Rook("Rook-1", new Position(0, 0))]);
        Player.arr.push([1, 0, new Knight("Knight-1", new Position(1, 0))]);
        Player.arr.push([2, 0, new Bishop("Bishop-1", new Position(2, 0))]);
        Player.arr.push([3, 0, new Queen("Queen-1", new Position(3, 0))]);
        Player.arr.push([4, 0, new King("King-1", new Position(4, 0))]);
        Player.arr.push([5, 0, new Bishop("Bishop-1", new Position(5, 0))]);
        Player.arr.push([6, 0, new Knight("Knight-1", new Position(6, 0))]);
        Player.arr.push([7, 0, new Rook("Rook-1", new Position(7, 0))]);
    }
};