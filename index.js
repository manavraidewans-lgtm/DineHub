// For Page Splash -- Loder Page //

window.addEventListener("load", () => {

    const splash = document.getElementById("splash-screen");

    setTimeout(() => {

        splash.classList.add("hide");

    }, 1200);

});






// For button animation and button link //

const loginBtn = document.getElementById("loginBtn");
const text = document.querySelector(".btn-text");

loginBtn.addEventListener("click", (e) => {

    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "admin@123" && password === "1234") {

        loginBtn.classList.add("loading");
        loginBtn.disabled = true;

        text.textContent = "Logging in...";

        setTimeout(() => {

            loginBtn.classList.remove("loading");
            text.textContent = "✓ Welcome!";
            loginBtn.style.background = "#22c55e";

            setTimeout(() => {
                window.location.href = "Pages/home.html";
            }, 800);

        }, 1500);

    } else {

        alert("Wrong credentials!");
    }

});