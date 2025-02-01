function result() {

    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let msg = document.getElementById("msg").value


    document.getElementById("username").style.border = ""
    document.getElementById("uservalitation").innerHTML = ""
    document.getElementById("email").style.border = ""
    document.getElementById("emailvalitation").innerHTML = ""
    document.getElementById("msg").style.border = ""
    document.getElementById("msgvalitation").innerHTML = ""


    let isValid = true

    if (username === "") {
        document.getElementById("username").style.border = "1px solid red"
        document.getElementById("uservalitation").innerHTML = "This is requied flied"
        isValid = false
    }

    if (email === "") {
        document.getElementById("email").style.border = "1px solid red"
        document.getElementById("emailvalitation").innerHTML = "This is requied flied"
        isValid = false
    }

    if (msg === "") {
        document.getElementById("msg").style.border = "1px solid red"
        document.getElementById("msgvalitation").innerHTML = "This is requied flied"
        isValid = false
    }

    if (isValid) {
        let userData = {
            username: username,
            email: email,
            msg: msg
        }
        console.log(userData);

        document.getElementById("username").value = ""
        document.getElementById("email").value = ""
        document.getElementById("msg").value = ""

        alert("Your Form Has Been Submited Thanyou")
    }
};

function reload() {
    window.location.reload()
};