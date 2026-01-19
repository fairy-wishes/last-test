const btn = document.getElementById("heartBtn");
const nameInput = document.getElementById("nameInput");
const dateInput = document.getElementById("dateInput");
const greeting = document.getElementById("greeting");
const message = document.getElementById("message");
const shareBtn = document.getElementById("shareBtn");

// Heart Animation
btn.addEventListener("click", () => {
    for(let i=0;i<15;i++){
        createHeart();
    }
});

function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "80vh";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },3000);
}

// Update greeting dynamically
nameInput.addEventListener("input", () => {
    const name = nameInput.value.trim();
    greeting.innerText = name ? `🎉 Happy Birthday ${name} 🎉` : "🎉 Happy Birthday 🎉";
});

// WhatsApp Share
shareBtn.addEventListener("click", () => {
    const name = nameInput.value.trim() || "Special One";
    const msg = `Happy Birthday ${name} ❤️ Check this surprise: ${window.location.href}`;
    const url = `https://wa.me/?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
});
