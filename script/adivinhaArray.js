

    
    function sorteia () {
        return Math.round(Math.random()*10)
    }

    function sorteiaNumeros(quantidade) {
        var segredos = []
        var numero = 1;
        while(numero <= quantidade) {
            
            var numeroAleatorio = sorteia()

            if(nu)
            segredos.push(numeroAleatorio)
            numero ++
        }
        return segredos
    }

    var segredos = sorteiaNumeros(5)

    document.write(segredos)


    var input =document.querySelector("input")
    
    function verifica(){
        if (input.value ==segredos){
        alert('Você acertou')
        }else{
        alert('Voce errou seu burro')
        }

        input.value = "";
        input.focus();
    }
    
    
    var button = document.querySelector('button')
    button.onclick = verifica;
    


