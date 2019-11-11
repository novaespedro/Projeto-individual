var fundo = document.getElementById("modal");
    var bto =  document.getElementById("botaoLogin");
    var fechar = document.getElementById("close");

    bto.onclick = function(){
        fundo.style.display = "block";
    }

    fechar.onclick = function(){
        fundo.style.display = "none"
    }