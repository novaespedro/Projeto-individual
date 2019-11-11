function validarLog(){
    var email = formeLog.email.value;
    var senha = formeLog.senha.value;


    if(email == "" || email.indexOf ('@') == -1 ){
        alert('Preencha o campo email corretamente');
        formeLog.email.focus();
        return false;
    }

    if(senha == "" ){
        alert('Preencha o campo senha');
        formeLog.senha.focus();
        return false;
    }

    // if(senha.lenght < 8){
    //     alert('Senha Inválida');
    //     formeLog.senha.focus();
    //     return false;
    // }
    
}