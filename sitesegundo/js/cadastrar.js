function validar(){
    var nome      = formuser.nome.value;
    var email     = formuser.email.value;
    var senhaUm   = formuser.senhaUm.value;
    var senhaDois = formuser.senhaDois.value;



    if(nome == ""  && email == "" && senhaUm == "" && senhaUm == "" ){
        alert('Os campos devem estar preenchidos');
        formuser.nome.focus();
        return false;
    }


    if(nome == "" || nome.length < 8){
        alert('Preencha o campo nome com no minímo 8 caracteres');
        formuser.nome.focus();
        return false;
    }

    if(email == "" || email.indexOf('@') == -1){
        alert('Preencha o campo E-mail');
        formuser.email.focus();
        return false;
    }

    if(senhaUm == "" ||senhaDois == ""){
        alert('Preencha o campo senha com minímo de 6 caracteres');
        formuser.senhaUm.focus();
        return false;
    }
    if( senhaDois != senhaUm){
        alert('As senhas devem ser a mesma');
            formuser.senhaDois.focus();
            return false;
    }
}
    
