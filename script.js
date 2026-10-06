let currentStage = 1;

const totalStages = 5;


/* =================================
   YOUR WHATSAPP NUMBER
================================= */

const whatsappNumber = "9172660105";


/* =================================
   WHATSAPP MESSAGE
================================= */

const whatsappMessage = "Okay, I forgive you. ❤️";


/* =================================
   NEXT STAGE
================================= */

function nextStage() {

  const oldStage =
    document.getElementById(
      "stage" + currentStage
    );

  oldStage.classList.remove("active");

  currentStage++;

  if (currentStage > totalStages) {
    currentStage = totalStages;
  }

  const newStage =
    document.getElementById(
      "stage" + currentStage
    );

  newStage.classList.add("active");

  updateProgress();

  createHearts(4);

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =================================
   UPDATE PROGRESS
================================= */

function updateProgress() {

  const percentage =
    (currentStage / totalStages) * 100;

  document.getElementById(
    "progressBar"
  ).style.width = percentage + "%";

  document.getElementById(
    "pageNumber"
  ).textContent = currentStage;
}


/* =================================
   OKAY BUTTON
================================= */

async function okayClicked() {

  const response =
    document.getElementById("response");


  /* Copy ONLY the short message */

  try {

    await navigator.clipboard.writeText(
      whatsappMessage
    );

  } catch (error) {

    console.log("Clipboard not available");

  }


  response.innerHTML = `
    Opening WhatsApp... ❤️
  `;


  createHearts(25);

  createConfetti();


  /* =================================
     OPEN WHATSAPP
     Using the number exactly as entered
  ================================= */

  const whatsappURL =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent(
      whatsappMessage
    );


  setTimeout(() => {

    window.location.href =
      whatsappURL;

  }, 700);
}


/* =================================
   STILL ANGRY
================================= */

function stillAngry() {

  const response =
    document.getElementById("response");

  const emoji =
    document.getElementById("finalEmoji");


  emoji.textContent = "🥺";


  response.innerHTML = `
    Okay yrr... 😭
    <br><br>
    I'm really sorry, Pranjali.
    <br>
    I know I messed up.
  `;


  createHearts(8);


  setTimeout(() => {

    response.innerHTML = `
      I'm sorry for forgetting to message you. ❤️
      <br>
      I'm sorry if I made you feel ignored.
      <br>
      I'm sorry if I hurt you.
      <br>
      I'm sorry yrrr. 🥺
    `;

  }, 2300);


  setTimeout(() => {

    response.innerHTML = `
      I really don't want to lose my best friend.
      ❤️
      <br><br>
      Take your time...
      <br>
      I'll be here whenever you're ready to talk.
    `;

    createHearts(12);

  }, 5200);
}


/* =================================
   FLOATING HEARTS
================================= */

function createHearts(amount) {

  const heartTypes = [
    "❤️",
    "💗",
    "💕",
    "💖",
    "💓",
    "🫶"
  ];


  for (
    let i = 0;
    i < amount;
    i++
  ) {

    const heart =
      document.createElement("div");


    heart.className =
      "floating-heart";


    heart.textContent =
      heartTypes[
        Math.floor(
          Math.random() *
          heartTypes.length
        )
      ];


    heart.style.left =
      Math.random() * 100 + "vw";


    heart.style.fontSize =
      18 +
      Math.random() * 20 +
      "px";


    heart.style.animationDuration =
      3 +
      Math.random() * 2 +
      "s";


    document.body.appendChild(
      heart
    );


    setTimeout(() => {

      heart.remove();

    }, 5500);
  }
}


/* =================================
   CONFETTI
================================= */

function createConfetti() {

  for (
    let i = 0;
    i < 80;
    i++
  ) {

    const piece =
      document.createElement("div");


    piece.className =
      "confetti";


    piece.style.left =
      Math.random() * 100 + "vw";


    piece.style.animationDelay =
      Math.random() * 1.5 + "s";


    document.body.appendChild(
      piece
    );


    setTimeout(() => {

      piece.remove();

    }, 4500);
  }
}
