function start_gif() {

    closedEnvelope.classList.remove("show_img")
    closedEnvelope.classList.add("hidden_img")

    startButton.classList.remove("show_img")
    startButton.classList.add("hidden_img")

    openingEnvelope.classList.remove("hidden_img")
    openingEnvelope.classList.add("show_img")

    setTimeout(() => {
        openingEnvelope.classList.add("hidden_img")
        openingEnvelope.classList.remove("show_img")
        openEnvelope.classList.add("show_img")
        openEnvelope.classList.remove("hidden_img")
    }, 1100);
};

function keep_letter() {
    openLetter.classList.remove("hidden_img");
    openLetter.classList.add("letter_click_up");

    // Após 2.3 segundos, muda para a classe que faz o elemento descer e aumentar de tamanho
    setTimeout(() => {
        openLetter.classList.remove("letter_click_up");
        openLetter.classList.add("letter_click_down");
    }, 2300); // 2.3 segundos para aguardar a animação de subida
}

const startButton = document.querySelector(".start_button_click_area")
const keepLetter = document.querySelector(".letter_click_area");
const closedEnvelope = document.querySelector(".closed_env")
const openingEnvelope = document.querySelector(".opening_env")
const openEnvelope = document.querySelector(".open_env")
const openLetter = document.querySelector(".open_let");


startButton.addEventListener('click', start_gif);
// Adiciona o evento de clique para iniciar a animação
keepLetter.addEventListener('click', keep_letter);