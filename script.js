function abrirModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
}

function fecharModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

var fotos = [
    "troca-oleo.png",
    "filtroleo.png",
    "troca-oleo2.png"
];
var indiceFotoAtual = 0;

function mudarFoto() {
    var fotoElement = document.getElementById("foto");
    indiceFotoAtual = (indiceFotoAtual + 1) % fotos.length;
    fotoElement.src = fotos[indiceFotoAtual];
}


const logo = document.querySelector("#mainlogo");

logo.addEventListener("click", (evento)=> {
    evento.preventDefault()


    console.log(evento)
    console.log(evento.target[0].value)
})