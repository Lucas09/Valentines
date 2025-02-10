const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

    // Log "No" click to Firestore
    db.collection("valentine_responses").add({
        response: "No",
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
}

function handleYesClick() {
    // Log "Yes" click to Firestore
    db.collection("valentine_responses").add({
        response: "Yes",
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
        window.location.href = "date_selection.html";
    });
}

function createSparkle() {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";
    sparkle.style.animationDuration = Math.random() * 2 + 2 + "s";
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 3000);
}

setInterval(createSparkle, 600);


function confettiExplosion() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = Math.random() * 100 + "vh";
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
    }
}

document.querySelector(".yes-button").addEventListener("click", confettiExplosion);