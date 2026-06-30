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




