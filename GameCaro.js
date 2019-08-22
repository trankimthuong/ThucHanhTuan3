const DEFAULT_ROW = 10;
const DEFAULT_COL = 10;
const WINNER_COUNT = 5;

let board = [];
let currentTurn = 'X';

function start() {
    for(let i = 0; i < DEFAULT_ROW; i++){
        board[i] = [];
        for(let j = 0; j < DEFAULT_COL; j++){
            board[i][j] = '';
        }
    }
}

function draw() {
    let output = '<table>';
    for(let i = 0; i < DEFAULT_ROW; i++)
    {
        output += '<tr>';
        for(let j = 0; j < DEFAULT_COL; j++){
            output += '<td class="cell" onclick="clickCell(' + i + ', ' + j + ')">' + board[i][j] + '</td>'
        }
        output += '</tr>';
    }

    output += '</table>';
    document.getElementById('display').innerHTML = output;
}

function clickCell(row, col) {
    if(board[row][col] != ''){
        alert("Ban phai nhap vao o trong");
    }
    else{
        board[row][col] = currentTurn;

        draw();
        if(checkWinner(row, col))
        {
            alert(currentTurn + " chien thang!!!!");
        }
        checkCross1();
        changeTurn();
    }
}

function changeTurn() {
    if(currentTurn =='X'){
        currentTurn = 'O';
    }
    else{
        currentTurn = 'X';
    }
}

function checkWinner(row,col) {
    if(checkRow(row) || checkCol(col) || checkCross1() || checkCross2())
        return true;
    else
        return false;
}

function checkRow(row) {
    let count = 1;
    for(let i = 0; i < DEFAULT_COL - WINNER_COUNT + 1; i++){
        while(board[row][i] == board[row][i+1] && board[row][i] == currentTurn){
            count++;
            if(count == WINNER_COUNT){
                return true;
            }
            i++;
        }
        i - count + 1;
        count = 1;
    }
    return false;
}

function checkCol(col) {
    let count = 1;
    for(let i = 0; i < DEFAULT_ROW - WINNER_COUNT + 1; i++){
        while(board[i][col] == board[i+1][col] && board[i][col] == currentTurn){
            count++;
            if(count == WINNER_COUNT){
                return true;
            }
            i++;
        }
        i - count + 1;
        count = 1;
    }
    return false;
}

function checkCross1() {
   let count = 1;
   for(let i = 0; i < DEFAULT_ROW - WINNER_COUNT + 1; i++){
       for(let j = 0; j < DEFAULT_COL - WINNER_COUNT +1; j++){
           while(board[i][j] == board[i+1][j+1] && board[i][j] == currentTurn){
               count++;
               if(count == WINNER_COUNT){
                   return true;
               }
               i++;
               j++;
           }
           i - count + 1;
           j - count + 1;
           count = 1;
       }
   }
   return false;
}

function checkCross2() {
    let count = 1;
    for(let i = DEFAULT_ROW -1; i >= WINNER_COUNT - 1; i--){
        for(let j = 0; j < DEFAULT_COL - WINNER_COUNT +1; j++){
            while(board[i][j] == board[i-1][j+1] && board[i][j] == currentTurn){
                count++;
                if(count == WINNER_COUNT){
                    return true;
                }
                i--;
                j++;
            }
            i + count - 1;
            j - count + 1;
            count = 1;
        }
    }
    return false;
}

start();
draw();

