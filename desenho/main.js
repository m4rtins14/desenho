let canvas = document.getElementById("canvas");
let contexto = canvas.getContext("2d");
let desenhando = false;

// Pega o elemento de input da paleta de cores
let corInput = document.getElementById("cor");

// Inicializa a cor com a cor padrão do input
let cor = corInput.value;

corInput.addEventListener("input", function(event) {
    // Atualiza a cor quando o valor do input muda
    cor = corInput.value;
});

canvas.addEventListener("mousedown", function(event){
    desenhando = true;
    contexto.beginPath();
    contexto.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    // Define a cor do traço
    contexto.strokeStyle = cor;
})

canvas.addEventListener("mousemove", function(event){
    if(desenhando) {
        contexto.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        contexto.stroke();
    }
})

canvas.addEventListener("mouseup", function(event){
    desenhando = false;
})
