function addBola() {
  var bola = document.createElement("div");
  bola.setAttribute("class", "bola");


  var p1 = Math.floor(Math.random() * 200);
  var p2 = Math.floor(Math.random() * 200);


  // sistema de cor

  if (p1 > 10) {var cor = "background-color:yellow;";}
  if (p1 > 50) {var cor = "background-color:blue;";}
  if (p1 > 70) {var cor = "background-color:red;";}
  if (p1 > 100) {var cor = "background-color:green;";}
  if (p2 > 120) {var cor = "background-color:black;";}
  if (p2 > 150) {var cor = "background-color:red;";}
  if (p2 > 170) {var cor = "background-color:pink;";}



  bola.setAttribute("style","left:" + p1 + "px;top:" + p2 + "px;" + cor +";");
  bola.setAttribute("onclick", "estourar(this)");



  document.body.appendChild(bola);
}
function estourar(elemento) {
  document.body.removeChild(elemento);
  document.getElementById('placar').innerHTML++;
}
function iniciar() {
  setInterval(addBola, 1000);
}

