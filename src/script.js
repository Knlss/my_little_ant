function start_gif() {

    closedEnvelope.classList.remove("show_img");
    closedEnvelope.classList.add("hidden_img");

    startButton.classList.remove("show_img");
    startButton.classList.add("hidden_img");

    openingEnvelope.classList.remove("hidden_img");
    openingEnvelope.classList.add("show_img");

    setTimeout(() => {
        openingEnvelope.classList.add("hidden_img");
        openingEnvelope.classList.remove("show_img");
        openEnvelope.classList.add("show_img");
        openEnvelope.classList.remove("hidden_img");
    }, 1100);
};

function keep_letter() {
    openLetter.classList.remove("hidden_img");
    openLetter.classList.add("letter_click_up");

    keepLetter.classList.remove("show_img");
    keepLetter.classList.add("hidden_img");

    openEnvelope.classList.remove("show_img");
    openEnvelope.classList.add("hidden_img");

    emptyEnvelope.classList.add("show_img");
    emptyEnvelope.classList.remove("hidden_img");

    overlayEnvelope.classList.add("show_img");
    overlayEnvelope.classList.remove("hidden_img");

    // Após 2.3 segundos, muda para a classe que faz o elemento descer e aumentar de tamanho
    setTimeout(() => {
        overlayEnvelope.classList.remove("show_img");
        overlayEnvelope.classList.add("hidden_img");
        openLetter.classList.remove("letter_click_up");
        openLetter.classList.add("letter_click_down");
    }, 1400); // 2.3 segundos para aguardar a animação de subida

}

const startButton = document.querySelector(".start_button_click_area")
const keepLetter = document.querySelector(".letter_click_area");
const closedEnvelope = document.querySelector(".closed_env")
const openingEnvelope = document.querySelector(".opening_env")
const openEnvelope = document.querySelector(".open_env")
const openLetter = document.querySelector(".open_let");
const emptyEnvelope = document.querySelector(".empty_env");
const overlayEnvelope = document.querySelector(".overlay_env")


startButton.addEventListener('click', start_gif);

keepLetter.addEventListener('click', keep_letter);