// BOTAO ABAIXO 01

function apertouMouse() {
  console.log("APERTOU O MOUSE");
}
function soltouMouse() {
  console.log("SOLTOU O MOUSE");
}
function mouseEmCima() {
  console.log("PASSOU O MOUSE");
}
function mouseSaiuDeCima() {
  console.log("MOUSE SAIU DE CIMA");
}
function moveuMouse() {
  console.log("MOUSE FOI MOVIDO");
}

// BOTAO 02

function clicou() {
  console.log("CLICOU");
}

// BOTAO 3

function botaoDireito() {
  console.log("BOTAO DIREITO");
}

// BOTAO 04

// CLICANDO COM O BOTAO DIREITO ELE NAO RETORNA

// BOTAO 05

function botaoDireitoA() {
  console.log("BOTAO DIREITO");

  return false;
}

// BOTAO 06

function duploClick() {
  console.log("DUPLO CLICK");
}

// EVENTO DE TECLADO (evenet.keyCode ele mostra o numero da tecla)

function apertouTecla(event) {
  console.log("APERTOU ALGUMA TECLA: " + event.keyCode);
}

function apertouTecla(event) {
    console.log("quando soltar a tecla do teclado: " + event.keyCode);
  }

  function apertouTecla(event) {
    console.log("seguro o teclado e nao soltou: " + event.keyCode);
  }


//   COMANDO ABAIXO PRA SABER SE O SHIFT ESTA APERTADO

function apertouTeclaSoltou(event) {
    console.log("segurou shift sim true ou nao false? " + event.shiftKey);
  }
  // PODEMOS FAZER ASSIM TAMBEM

  function apertouTeclaSoltouA(event) {
      if(event.shiftKey == true) {
          console.log('Apertou alguma tecla com o shift e poode fazer com ctrl tambem');
      }

  }

  // QUANDO VOCE APERTA O SHIFT + E


  function shiftE(event) {
    if(event.shiftKey == true && event.keyCode == 69) {
        console.log('VOCE APERTOU SHIFT + E');
    }

}