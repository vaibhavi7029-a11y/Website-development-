// Typing
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

// Scroll reveal
window.addEventListener("scroll", () => {
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let pos = card.getBoundingClientRect().top;
        let screen = window.innerHeight;

        if(pos < screen - 100){
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }
    });
});

// Scroll functions
function scrollToContact(){
    document.getElementById("contact").scrollIntoView({behavior:"smooth"});
}

function scrollToTop(){
    window.scrollTo({top:0, behavior:"smooth"});
}
