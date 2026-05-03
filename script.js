// Typing animation
let text = "Hi, I'm Vaibhavi 👩‍💻";
let i = 0;

function typing(){
    if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,80);
    }
}
typing();

// 3D Card Effect
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        let x = e.offsetX;
        let y = e.offsetY;

        let centerX = card.offsetWidth / 2;
        let centerY = card.offsetHeight / 2;

        let rotateX = -(y - centerY) / 10;
        let rotateY = (x - centerX) / 10;

        card.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0)";
    });
});

// Form
document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    document.getElementById("msg").innerHTML="Message Sent ✅";
});
