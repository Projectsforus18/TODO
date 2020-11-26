function validate() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == "admin" && password == "12345") {
        alert("Login successfully");
        window.location = "main.html"




        return false;
    } else {
        alert("Attempt Failed")

    }
}

function myFunc() {
    window.location = "main.html"


}