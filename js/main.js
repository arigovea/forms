function validacion() {
    var name = document.forms["signIn"]["first-name"].value;
    var lastname = document.forms["signIn"]["last-name"].value;
    var email = document.forms["signIn"]["email"].value;
    var comment = document.forms["signIn"]["comments"].value;
    var errors = document.getElementById('errors')
    if (name == "" || lastname == "" || email == "" || comment == "") {
        alert("Hacen falta campos por llenar");
        return false;
    }
    if (errors.childElementCount >= 1) {
        alert("Hay errores en el forumlario");
        return false;
    }
}

function valfields(x) {
    var correctvalue = document.getElementById(x).value;
    if (x == "first-name" || x == "last-name"){
        if(correctvalue == ""){
            validatelist(x);
        }
        else{
            deletelist(x);
        }
    }
    if (x == "email") {
        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correctvalue))){
            validatelist(x);
        }
        else{
            deletelist(x);
        }
    }
    if (x == "password") {
        if(!(/(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])/.test(correctvalue))){
            validatelist(x);
        }
        else{
            deletelist(x);
        }
    }
    if (x == "phone")
    if(correctvalue == "" || isNaN(correctvalue)) {
        validatelist(x);
    }
    else{
        deletelist(x);
    }
    if (x == "comments") {
        if (correctvalue.length === 0 || correctvalue.length > 50) {
            validatelist(x);
        }
        else{
            deletelist(x);
        }
    }
}

function validatelist(x) {
    var listerrors = document.getElementById('errors').children;
    if (listerrors.length > 0) {
        var errorexists = false;
        for (i = 0; i < listerrors.length; i++) {
            if (listerrors[i].innerText == `Error en ${x}`) {
                errorexists = true;
                i = listerrors.length + 1;
            }
        }
        if (!errorexists) {
            create(x);
        }
    } else {
        create(x);
    }
}
function deletelist(x){
    var listerrors = document.getElementById('errors').children;
    if (listerrors.length > 0) {
        var errorexists = true;
        for (i = 0; i < listerrors.length; i++) {
            if (listerrors[i].innerText == `Error en ${x}`) {
                document.getElementById("errors").removeChild(listerrors[i]);
                errorexists = false;
                i = listerrors.length + 1;
            }
        }
        if (!errorexists) {
            return;
        }
    }
}

function create(id) {
    document.getElementsByClassName("error-list")[0].classList.remove("hidden");
    document.getElementById(id).placeholder = `Tu ${id} es inválido`
    var newError = document.createElement("li");
    var content = document.createTextNode(`Error en ${id}`);
    newError.appendChild(content);
    document.getElementById("errors").appendChild(newError);
}
