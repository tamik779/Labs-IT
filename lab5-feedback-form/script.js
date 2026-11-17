
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let isValid = true;

    if (name.value.trim() === "") {
        nameError.textContent = "Введите ваше имя";
        isValid = false;
    }

    if (email.value.trim() === "") {
        emailError.textContent = "Введите электронную почту";
        isValid = false;
    } else if (!email.validity.valid) {
        emailError.textContent = "Введите правильный email";
        isValid = false;
    }

    if (message.value.trim() === "") {
        messageError.textContent = "Напишите сообщение";
        isValid = false;
    }

    if (isValid) {
    document.getElementById("form-status").textContent =
        "Форма успешно заполнена! Спасибо за обращение.";

    form.reset();
}
});
