function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var comment = document.forms["contactForm"]["comment"].value;
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var error = false;

    if (name == "") {
        document.getElementById("nameError").innerText = "Name must be filled out";
        error = true;
    } else {
        document.getElementById("nameError").innerText = "";
    }

    if (email == "") {
        document.getElementById("emailError").innerText = "Email must be filled out";
        error = true;
    } else if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerText = "Invalid email format";
        error = true;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    if (comment == "") {
        document.getElementById("commentError").innerText = "Comment must be filled out";
        error = true;
    } else {
        document.getElementById("commentError").innerText = "";
    }

    return !error;
}