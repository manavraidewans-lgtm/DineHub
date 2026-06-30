// For Button today special //


// order now //
const button = document.getElementById("order");
const emojis = ["🍕" , "🍟" , "🌮" , "🍱"];
button.addEventListener("click", () => {
    
    for(let i = 0; i < 8; i++){

        const emoji = document.createElement("span");
        emoji.classList.add("flying-emoji");
        emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = (button.offsetWidth / 8) + "px";
        emoji.style.bottom = "15px";

        emoji.style.setProperty("--x", (Math.random()*200 - 60) + "px");

        button.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        },10000);
    }

});







document.querySelectorAll(".like-btn").forEach(btn => {

    btn.addEventListener("click", function () {

        // toggle icon
        this.classList.toggle("active");

        const icon = this.querySelector("i");
        icon.classList.toggle("fa-regular");
        icon.classList.toggle("fa-solid");

        // heart pop animation
        for (let i = 0; i < 6; i++) {
            const heart = document.createElement("span");
            heart.classList.add("floating-heart");
            heart.innerHTML = "❤️";

            heart.style.left = (Math.random() * 40) + "px";
            heart.style.top = "0px";

            this.appendChild(heart);

            setTimeout(() => heart.remove(), 700);
        }
    });

});



document.getElementById("get-direction").addEventListener("click", () => {
    window.open(
        "https://www.google.com/maps/place/Hyatt+Centric+Dehradun",
        "_blank"
    );
});













