var value = 'X';

function tdclick(id) {
  document.getElementById(id).innerHTML = value;
}



window.onload = function() {

  // on click player change.
  document.getElementById("player1").onclick = function add() {
    value = 'X';
  }

  document.getElementById("player2").onclick = function add() {
    value = 'O';
  }

}
