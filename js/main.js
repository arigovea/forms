function validacion() {
    var name = document.forms["signIn"]["first-name"].value;
    var lastname = document.forms["signIn"]["last-name"].value;
    var email = document.forms["signIn"]["email"].value;
    var comment = document.forms["signIn"]["comments"].value;
    var errors = document.getElementById('errors');
    if (name == "" || lastname == "" || email == "" || comment == "" || validateCheckbox("ulVehicles") == false) {
        if (validateCheckbox("ulVehicles") == false) {
            document.getElementsByClassName("vehicle")[0].classList.add("error");
        }
        if (document.getElementById("car").checked) {
            if (document.forms["signIn"]["make-car"].value == "" || document.getElementById("colorCar").selectedIndex == 0 ||
                document.forms["signIn"]["doors"].value == "") {
                document.getElementsByClassName("car")[0].classList.add("error");
                alert("Hacen falta campos por llenar");
                return false;
            }
        }
        if (document.getElementById("bike").checked) {
            if (validateCheckbox("ulBike") == false || document.forms["signIn"]["make-bike"].value == "" ||
                document.forms["sigIn"]["type-bike"].value == "") {
                document.getElementsByClassName("bike")[0].classList.add("error");
                alert("Hacen falta campos por llenar");
                return false;
            }
        }
        if (document.getElementById("motorcycle").checked) {
            if (validateRadio("ulType") == false || document.forms["signIn"]["make-motorcycle"].value == "" ) {
                document.getElementsByClassName("motorcycle")[0].classList.add("error");
                alert("Hacen falta campos por llenar");
                return false;
            }
        }
        alert("Hacen falta campos por llenar");
        return false;
    }
    if (errors.childElementCount >= 1) {
        alert("Hay errores en el forumlario");
        return false;
    }
    return true;
}

function valfields(x) {
    var correctvalue = document.getElementById(x).value;
    if (x == "first-name" || x == "last-name") {
        if (correctvalue == "") {
            validatelist(x);
        } else {
            deletelist(x);
        }
    }
    if (x == "email") {
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correctvalue))) {
            validatelist(x);
        } else {
            deletelist(x);
        }
    }
    if (x == "password") {
        if (!(/(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])/.test(correctvalue))) {
            validatelist(x);
        } else {
            deletelist(x);
        }
    }
    if (x == "phone")
        if (correctvalue == "" || isNaN(correctvalue)) {
            validatelist(x);
        }
    else {
        deletelist(x);
    }
    if (x == "comments") {
        if (correctvalue.length === 0 || correctvalue.length > 50) {
            validatelist(x);
        } else {
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

function deletelist(id) {
    document.getElementsByClassName("required")[id].classList.remove("error");
    document.getElementsByClassName("error-label")[`e-${id}`].classList.add("hidden");
    var listerrors = document.getElementById('errors').children;
    if (listerrors.length > 0) {
        var errorexists = true;
        for (i = 0; i < listerrors.length; i++) {
            if (listerrors[i].innerText == `Error en ${id}`) {
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
    document.getElementsByClassName("required")[id].classList.add("error");
    document.getElementsByClassName("error-label")[`e-${id}`].classList.remove("hidden");
    var newError = document.createElement("li");
    var content = document.createTextNode(`Error en ${id}`);
    newError.appendChild(content);
    document.getElementById("errors").appendChild(newError);
}

function validateCheckbox(id) {
    var checkedbox = document.getElementById(id).querySelectorAll("input[type=checkbox]");
    var countfalse = [];
    for (i = 0; i < checkedbox.length; i++) {
        if (checkedbox[i].checked) {
            i = checkedbox.length + 1;
            return true;
        } else {
            countfalse.push(1);
        }
    }
    if (checkedbox.length == countfalse.length) {
        document.getElementsByClassName("error-label")[`e-${id}`].classList.remove("hidden");
        return false;
    }
}

function TransformCheckBox(x) {
    removeError("vehicle", "ulVehicles");
    var isChecked = document.getElementById(x).checked;
    if (x == 'car') {
        if (isChecked) {
            showCheckbox(x);
        } else {
            deleteCheckbox(x);
        }
    }
    if (x == 'bike') {
        if (isChecked) {
            showCheckbox(x);
        } else {
            deleteCheckbox(x);
        }
    }
    if (x == 'motorcycle') {
        if (isChecked) {
            showCheckbox(x);
        } else {
            deleteCheckbox(x);
        }
    }
}

function removeError(cls, id) {
    document.getElementsByClassName(cls)[0].classList.remove("error");
    document.getElementsByClassName("error-label")[`e-${id}`].classList.add("hidden");
}

function showCheckbox(x) {
    document.getElementsByClassName(x)[0].classList.remove("hidden");
}

function deleteCheckbox(x) {
    document.getElementsByClassName(x)[0].classList.add("hidden");
}

function validateRadio(id) {
    var radio = document.getElementById(id).querySelectorAll("input[type=radio]");
    var countfalse = [];
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            i = radio.length + 1;
            return true;
        } else {
            countfalse.push(1);
        }
    }
    if (radio.length == countfalse.length) {
        document.getElementsByClassName("error-label")[`e-${id}`].classList.remove("hidden");
        return false;
    }
}

function validateElementsCB(type, x) {
    var correctvalue = document.getElementById(x).value;
    console.log(correctvalue);
    if (document.getElementById(type).checked) {
        if (x == "make-car" || x == "make-bike" || x == "type-bike" || x == "make-motorcycle") {
            if (correctvalue == "") {
                validatelist(x);
            } else {
                deletelist(x);
            }
        }
        if (x == "doors") {
            var intvalue = parseInt(correctvalue);
            if (correctvalue == "" || isNaN(correctvalue) || intvalue < 1 || intvalue > 6) {
                validatelist(x);
            } else {
                deletelist(x);
            }
        }
        if (x == "colorCar" || x == "colorBike") {
            index = document.getElementById(x).selectedIndex;
            if (index == 0) {
                validatelist(x);
            } else {
                deletelist(x);
            }
        }
        if (x == "ulBike") {
            if (!validateCheckbox("ulBike")) {
                validatelist(x);
            } else {
                deletelist(x);
            }
        }
        if (x == "ulType") {
            if (!validateRadio("ulType")) {
                validatelist(x);
            } else {
                deletelist(x);
            }
        }
    }
    if (!document.getElementById(type).checked) {
        document.getElementById(x).value = "";
    }
}