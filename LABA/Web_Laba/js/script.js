let submit = document.getElementById("submit");

submit.onclick = function () {
    let Name = document.querySelector(".FName").value;
    let Last_Name = document.querySelector(".LName").value;
    let PWord = document.querySelector(".PWord").value;

    alert(` Ваше ім'я: ${Name};  \n Ваше прізвище: ${Last_Name}; \n Ваш пароль: ${PWord}; `)
}

let switchMode = document.getElementById("switchMode");


switchMode.onclick = function () {

    if (theme.getAttribute("href") == "style/dark_mode.css") {
        theme.href = "style/light_mode.css";
        icon_1.classList.toggle("removeOn");
        icon_2.classList.toggle("removeOn");

    } else {
        theme.href = "style/dark_mode.css";
        icon_1.classList.toggle("removeOn");
        icon_2.classList.toggle("removeOn");
    }
}

let registration = document.getElementById("registration")
registration.onclick = function () {
    popup.classList.toggle("removeOn")
}

let close = document.getElementById("close");
close.onclick = function () {
    popup.classList.toggle("removeOn");
}

