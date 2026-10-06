let currentStage = 1;

const totalStages = 5;

function nextStage() {

  const oldStage = document.getElementById(`stage${currentStage}`);
  oldStage.classList.remove("active");

  currentStage++;

  if (currentStage > totalStages) {
    currentStage = totalStages;
  }

  const newStage = document.getElementById(`stage${currentStage}`);
  newStage.classList.add("active");

  updateProgress();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  createHearts(3);
}


function updateProgress() {

  const percentage =
    (currentStage / totalStages) * 100;

  document.getElementById("progressFill").style.width =
    percentage + "%";

  const dots =
    document.querySelectorAll(".progress-dots i");

  dots.forEach((dot, index) => {

    if (index < currentStage) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }

  });
}


/* FORGIVEN */

function forgive() {

  const response =
    document.getElementById("response");

  const emoji =
    document.getElementById("finalEmoji");

  response.innerHTML =
    "THANK YOU 😭❤️<br>Okay... now please come back and talk to me yrrr 🫶";

  emoji.innerHTML = "😭❤️";

  createHearts(30);
  createConfetti();

}


/* STILL ANGRY */

function talk() {

  const response =
    document.getElementById("response");

  response.innerHTML =
    "Okay okay 😭 I understand...<br>Take your time. I'll still be here when you're ready to talk. ❤️";

  createHearts(8);

}


/* FLOATING HEARTS */

function createHearts(amount) {

  const hearts = [
    "❤️",
    "💗",
    "💕",
    "💖",
    "🫶",
    "💓"
  ];

  for (let i = 0; i < amount; i++) {

    const heart =
      document.createElement("div");

    heart.className = "heart-float";

    heart.innerHTML =
      hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
      Math.random() * 100 + "vw";

    heart.style.animationDuration =
      (3 + Math.random() * 3) + "s";

    heart.style.fontSize =
      (18 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }
}


/* CONFETTI */

function createConfetti() {

  for (let i = 0; i < 80; i++) {

    const piece =
      document.createElement("div");

    piece.className = "confetti";

    piece.style.left =
      Math.random() * 100 + "vw";

    piece.style.animationDelay =
      Math.random() * 1.5 + "s";

    piece.style.transform =
      `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 4500);
  }
}


/* LITTLE HEARTS WHILE READING */

setInterval(() => {

  if (currentStage > 1 && currentStage < 5) {
    createHearts(1);
  }

}, 3500);
