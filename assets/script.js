let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("popen");
}

function closePopup() {
    popup.classList.remove("popen");
}

function submitForm(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email == "naitik@gmail.com" && password == "8460361497") {
        openPopup();
    } else {
        closePopup();
        alert("Incorrect Email or Password.....!");
    }
}
