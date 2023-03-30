var segredo = Math.round(Math.random()*10)
    var input =document.querySelector("input")
    
    function verifica(){
        if (input.value ==segredo){
        alert('Você acertou')
        }else{
        alert('Voce errou seu burro')
        }

        input.value = "";
        input.focus();
    }
    
    
    var button = document.querySelector('button')
    button.onclick = verifica;