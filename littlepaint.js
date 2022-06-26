
    function desenhaQuadrado(x, y, tamanho, cor) {

        pincel.fillStyle = cor;
        pincel.fillRect(x, y, tamanho, tamanho)
        pincel.fill();
    }

    function desenhaCirculo(x, y, raio, cor) {

        pincel.fillStyle = cor;
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * 3.14);
        pincel.fill();

    }

    function desenhaPaletaDeCores() { // mostra os quadrados de seleção de cores

        desenhaQuadrado(xVermelho, yQuadrados, tamanhoQuadrados, 'red');
        desenhaQuadrado(xVerde, yQuadrados, tamanhoQuadrados, 'green');
        desenhaQuadrado(xAzul, yQuadrados, tamanhoQuadrados, 'blue');

    }

    function lidaComMovimentoDoMouse(evento) {

        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;
        
        /*
        if(x >= 0 && x <= 50 && y >= 0 && y <= 50){
            desenha = false;
        } else if(x >= 51 && x <= 100 && y >= 0 && y <= 50){
            desenha = false;
        } else if(x >= 101 && x <= 150 && y >= 0 && y <= 50){
            desenha = false;
        }
        */
        if(desenha) {
            desenhaCirculo(x, y, raio, paleta.value);
        }
    }

    function habilitaDesenhar() {

        desenha = true;
    }

    function desabilitaDesenhar() {

        desenha = false;
    }

    function mudaTamanho(evento){
        if(evento.shiftKey && evento.ctrlKey){
            alert("Uma tecla por vez, por favor.");
        } else if(evento.shiftKey && raio + 10 <= 40){
                raio = raio + 5;
        }else if(evento.ctrlKey && raio - 5 >= 5){
                raio = raio - 5;
        }
    }

    function trocaCor(evento) {// Função para troca de cor ao clicar em um quadrado colorido. RETIRADO
        x = evento.pageX - tela.offsetLeft;
        y = evento.pageY - tela.offsetTop;

        if(x >= 0 && x <= 50 && y >= 0 && y <= 50){
            corAtual = 'red';
        } else if(x >= 51 && x <= 100 && y >= 0 && y <= 50){
            corAtual = 'green';
        } else if(x >= 101 && x <= 150 && y >= 0 && y <= 50){
            corAtual = 'blue';
        }
    }
    function clearScreen() {
        pincel.clearRect(0, 0, 800, 500);
        pincel.fillStyle = 'lightgray';
        pincel.fillRect(0, 0, 800, 500);
    }
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');
    var paleta = document.querySelector('input');
    var reset = document.querySelector('button');
    pincel.fillStyle = 'lightgray';
    pincel.fillRect(0, 0, 800, 500);

    var raio = 5;
    var desenha = false;
    var corAtual = paleta.value;
    var xVermelho = 0;
    var xVerde  = 50;
    var xAzul = 100;
    var yQuadrados = 0;
    var tamanhoQuadrados = 50;

   // desenhaPaletaDeCores();

    tela.onmousemove = lidaComMovimentoDoMouse;

    tela.onmousedown = habilitaDesenhar;

    tela.onmouseup = desabilitaDesenhar;

    tela.onclick = mudaTamanho;

    reset.onclick = clearScreen;

