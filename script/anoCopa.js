function pulaLinha() {
    document.write("<br>");
}

function mostra(frase) {

    document.write(frase);
    pulaLinha();
}

var anoCopa = 1930;
var limite = parseInt(prompt("Qual é o ano limite?"));

while(anoCopa <= limite) {

    mostra(anoCopa + " tem copa!");
    anoCopa = anoCopa + 4;
}

mostra("Ufa! Esses foram os anos de copa até " + limite);