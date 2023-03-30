
function pulaLinha() {
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}
var contador = 20

while(contador > 0) {
    contador--
    mostra(contador)
}


