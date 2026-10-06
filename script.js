let currentStage = 1;

const totalStages = 5;



/* =========================
   NEXT STAGE
   ========================= */

function nextStage() {

  const current =
    document.getElementById(`stage${currentStage}`);

  current.classList.remove("active");

  currentStage++;

  if (currentStage > totalStages) {
    currentStage = totalStages;
  }

  const next =
    document.getElementById(`stage${currentStage}`);

  next.classList.add("active");

  updateProgress();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  createHearts(4);
}


/* =========================
   PROGRESS
   ========================= */

function updateProgress() {

  const percentage =
    (currentStage / totalStages) * 100;

  document.getElementById(
    "progressFill"
  ).style.width = percentage + "%";


  const dots =
    document.querySelectorAll(".dots i");

  dots.forEach((dot, index) => {

    if (index < currentStage) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }

  });
}


/* =========================
   WHATSAPP
   ========================= */

const whatsappNumber = "9172660105";

const whatsappMessage = `
Pranjali, I'm really sorry yrrr. ❤️

I know you're angry because I forgot to message you last night.

But I really want you to know that I wasn't ignoring you or avoiding you. I came home from my friend's house and got busy doing my house work, and while doing everything I genuinely forgot to message you.

I know I should have remembered, and I'm really sorry for that.

Please don't think that I forgot about you just because I forgot to message you that night.

You are my best friend and you're genuinely important to me.

I don't want one stupid mistake to create distance between us.

And I promise, I will never forget you. ❤️

I'm really sorry yrrr.

Please talk to me when you're ready. 🥺❤️
`;


/* =========================
   OKAY BUTTON
   ========================= */

async function okayClicked() {

  const response =
    document.getElementById("response");

  try {

    await navigator.clipboard.writeText(
      whatsappMessage.trim()
    );

    response.innerHTML =
      "Message copied ❤️<br>Opening WhatsApp...";

  } catch (error) {

    response.innerHTML =
      "Opening WhatsApp... ❤️";

  }

  createHearts(25);
  createConfetti();

  setTimeout(() => {

    const whatsappURL =
      "https://wa.me/" +
      whatsappNumber;

    window.location.href =
      whatsappURL;

  }, 1200);
}


/* =========================
   STILL ANGRY
   ========================= */

function stillAngry() {

  const response =
    document.getElementById("response");

  const emoji =
    document.getElementById("finalEmoji");

  emoji.innerHTML = "🥺";

  response.innerHTML = `
    Okay yrrr... 😭<br>
    I'm sorry.<br><br>
    You can be angry with me,
    but please don't stop talking to me.
    ❤️
  `;

  createHearts(12);

  setTimeout(() => {

    response.innerHTML = `
      I'm sorry, Pranjali. ❤️<br>
      I'm sorry for forgetting to message you.<br>
      I'm sorry if I hurt you.<br>
      I'm sorry for making you feel ignored.<br>
      I'm sorry yrrr. 🥺<br><br>
      <strong>
        I really don't want to lose my best friend.
      </strong>
    `;

  }, 2200);

  setTimeout(() => {

    response.innerHTML += `
      <br><br>
      Take your time...<br>
      I'll be here when you're ready to talk. ❤️
    `;

  }, 5000);
}


/* =========================
   FLOATING HEARTS
   ========================= */

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

    heart.className =
      "floating-heart";

    heart.innerHTML =
      hearts[
        Math.floor(
          Math.random() * hearts.length
        )
      ];

    heart.style.left =
      Math.random() * 100 + "vw";

    heart.style.fontSize =
      (18 + Math.random() * 20) + "px";

    heart.style.animationDuration =
      (3 + Math.random() * 2) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5500);
  }
}


/* =========================
   CONFETTI
   ========================= */

function createConfetti() {

  for (let i = 0; i < 80; i++) {

    const piece =
      document.createElement("div");

    piece.className = "confetti";

    piece.style.left =
      Math.random() * 100 + "vw";

    piece.style.animationDelay =
      Math.random() * 1.5 + "s";

    document.body.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 4500);
  }
}
