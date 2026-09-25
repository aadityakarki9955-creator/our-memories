/* =========================================================
   OUR MEMORIES ❤️
   Interactive Effects
   ========================================================= */


/* ---------- BEGIN JOURNEY ---------- */

function startJourney() {

    const memories = document.getElementById("memories");

    if (memories) {
        memories.scrollIntoView({
            behavior: "smooth"
        });
    }
}


/* ---------- FALLING / FLOATING HEARTS ---------- */

const heartsContainer = document.getElementById("hearts");

function createFloatingHeart() {

    if (!heartsContainer) return;

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "🌹"
    ];

    heart.textContent =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (14 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (6 + Math.random() * 5) + "s";

    heartsContainer.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 12000);
}


/* Create hearts continuously */

setInterval(createFloatingHeart, 700);


/* ---------- MEMORY SCROLL ANIMATION ---------- */

const memoryCards =
    document.querySelectorAll(".memory-card");


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


memoryCards.forEach((card) => {

    observer.observe(card);

});


/* ---------- SURPRISE ---------- */

function openSurprise() {

    const surprise =
        document.getElementById("surprise");

    if (!surprise) return;


    surprise.classList.toggle("show");


    if (surprise.classList.contains("show")) {

        heartExplosion();

    }

}


/* ---------- HEART EXPLOSION ---------- */

function heartExplosion() {

    const hearts =
        [
            "❤️",
            "💕",
            "💗",
            "💖",
            "💘",
            "🌹"
        ];


    for (let i = 0; i < 30; i++) {

        const heart =
            document.createElement("div");

        heart.textContent =
            hearts[
                Math.floor(
                    Math.random() * hearts.length
                )
            ];


        heart.style.position =
            "fixed";

        heart.style.left =
            "50%";

        heart.style.top =
            "70%";

        heart.style.zIndex =
            "9999";

        heart.style.pointerEvents =
            "none";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";


        document.body.appendChild(heart);


        const x =
            (Math.random() - 0.5) * 700;

        const y =
            (Math.random() - 0.5) * 500;


        heart.animate(

            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0.5)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(${x}px, ${y}px) scale(1.5)`,
                    opacity: 0
                }
            ],

            {
                duration:
                    1200 + Math.random() * 1000,

                easing:
                    "cubic-bezier(.17,.67,.83,.67)"
            }

        );


        setTimeout(() => {

            heart.remove();

        }, 2500);

    }

}


/* ---------- MUSIC ---------- */

function toggleMusic() {

    const music =
        document.getElementById(
            "backgroundMusic"
        );

    const button =
        document.getElementById(
            "musicButton"
        );


    if (!music) return;


    if (music.paused) {

        music.play()
            .then(() => {

                if (button) {

                    button.textContent = "⏸️";

                    button.classList.add(
                        "music-playing"
                    );

                }

            })
            .catch(() => {

                alert(
                    "The music could not be played. Please check that music.mp3 is inside the Our-Memories folder."
                );

            });

    }

    else {

        music.pause();

        if (button) {

            button.textContent = "🎵";

            button.classList.remove(
                "music-playing"
            );

        }

    }

}


/* ---------- CLICK HEART EFFECT ---------- */

document.addEventListener(
    "click",
    function (event) {

        if (
            event.target.closest(
                ".music-button"
            )
        ) {
            return;
        }


        const heart =
            document.createElement("div");

        heart.textContent = "❤️";

        heart.style.position =
            "fixed";

        heart.style.left =
            event.clientX + "px";

        heart.style.top =
            event.clientY + "px";

        heart.style.zIndex =
            "10000";

        heart.style.pointerEvents =
            "none";

        heart.style.fontSize =
            "18px";


        document.body.appendChild(heart);


        heart.animate(

            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0.5)",
                    opacity: 1
                },

                {
                    transform:
                        "translate(-50%, -100px) scale(1.4)",
                    opacity: 0
                }
            ],

            {
                duration: 900,
                easing: "ease-out"
            }

        );


        setTimeout(() => {

            heart.remove();

        }, 1000);

    }
);


/* ---------- KEYBOARD HEART EFFECT ---------- */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key.toLowerCase() === "h"
        ) {

            heartExplosion();

        }

    }
);


/* ---------- PAGE LOADED ---------- */

window.addEventListener(
    "load",
    function () {

        document.body.classList.add(
            "page-loaded"
        );

    }
);