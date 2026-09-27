const form = document.getElementById("membershipForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const department = document.getElementById("department").value;

    if (name === "" || email === "" || phone === "" || department === "") {
        formMessage.textContent = "Please fill in all the required fields.";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
        formMessage.textContent = "Please enter a valid 10-digit phone number.";
        return;
    }

    formMessage.textContent = "Registration successful! Welcome to PROLOGUE.";
    form.reset();
});