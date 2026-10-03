const openButton = document.getElementById("openButton");

const cardScreen = document.getElementById("cardScreen");

const mainContent = document.getElementById("mainContent");

const letterBlocks = document.querySelectorAll(".letter-block");

const finalMessage = document.querySelector(".final-message");


/* =========================
   OPEN THE MESSAGE
========================= */

openButton.addEventListener("click", () => {

    cardScreen.style.opacity = "0";
    cardScreen.style.transform = "scale(1.08)";

    setTimeout(() => {

        cardScreen.style.display = "none";

        mainContent.classList.add("show");

        startLetterAnimation();

    }, 1000);

});


/* =========================
   LETTER ANIMATION
========================= */

function startLetterAnimation() {

    let current = 0;

    function showNextLetter() {

        if (current >= letterBlocks.length) {

            setTimeout(() => {

                finalMessage.classList.add("visible");

                finalMessage.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            }, 1200);

            return;
        }


        const block = letterBlocks[current];

        block.classList.add("visible");


        const textElement = block.querySelector(".typed-text");

        const text = textElement.dataset.text;


        typeText(textElement, text, 45, () => {

            current++;

            setTimeout(() => {

                if (current < letterBlocks.length) {

                    letterBlocks[current].scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }

                showNextLetter();

            }, 800);

        });

    }


    showNextLetter();

}


/* =========================
   TYPING EFFECT
========================= */

function typeText(element, text, speed, callback) {

    let index = 0;

    element.textContent = "";


    function type() {

        if (index < text.length) {

            element.textContent += text.charAt(index);

            index++;

            setTimeout(type, speed);

        } else {

            if (callback) {
                callback();
            }

        }

    }


    type();

}