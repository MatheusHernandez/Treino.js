function tabuada(){
    var num = parseInt(document.getElementById("numero").value);
    var resultado = document.getElementById('resultado');
    var tabuada = "";

    for(var i = 1; i <= 10 ; i++ ) {
    tabuada += "<br/>" + num + " x " +i+" = " + (num*i);
    }
    resultado.innerHTML = tabuada;
}

