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
    if(errors.childElementCount >= 1){
        alert("Hay errores en el forumlario");
        return false;
    }
}

function valfields(x) {
    var correctvalue = document.getElementById(x).value;
    if (x == "first-name" && correctvalue == "") {
        document.getElementById("first-name").placeholder = "No es un nombre válido";
        var newError = document.createElement("li");
        var content = document.createTextNode("Error en first-name");
        newError.appendChild(content);
        document.getElementById("errors").appendChild(newError);
    }
    if (x == "last-name" && correctvalue == "") {
        document.getElementById("last-name").placeholder = "No es un apellido válido";
        var newError = document.createElement("li");
        var content = document.createTextNode("Error en last-name");
        newError.appendChild(content);
        document.getElementById("errors").appendChild(newError);
    }
    if (x == "email" && !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(correctvalue))) {
        document.getElementById("email").placeholder = "No es un email válido";
        var newError = document.createElement("li");
        var content = document.createTextNode("Error en email");
        newError.appendChild(content);
        document.getElementById("errors").appendChild(newError);
    }
    if (x == "password" && !(/(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])/.test(correctvalue))) {
        var newError = document.createElement("li");
        var content = document.createTextNode("Error en password");
        newError.appendChild(content);
        document.getElementById("errors").appendChild(newError);
    }
    if (x == "phone" && isNaN(correctvalue)) {
        document.getElementById("phone").placeholder = "No es un número válido"
        var newError = document.createElement("li");
        var content = document.createTextNode("Error en phone");
        newError.appendChild(content);
        document.getElementById("errors").appendChild(newError);
    }
    if (x == "comments") {
        if (correctvalue.length === 0) {
            document.getElementById("comments").placeholder = "No es un comentario"
            var newError = document.createElement("li");
            var content = document.createTextNode("Error en comentario: No hay comentario");
            newError.appendChild(content);
            document.getElementById("errors").appendChild(newError);
        } else if (correctvalue.length > 50) {
            document.getElementById("comments").placeholder = "No es un comentario"
            var newError = document.createElement("li");
            var content = document.createTextNode("Error en comentario: El comentario es muy largo");
            newError.appendChild(content);
            document.getElementById("errors").appendChild(newError);
        }
    }
}
