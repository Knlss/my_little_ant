function start_gif() {

    envelope.src = "./src/imgs/opening_envelope.gif"

    setTimeout(() => {
        envelope.src = "./src/imgs/open_envelope.png";
    }, 1100);
};

function hidden_button() {

    setTimeout(() => {
        startButton.classList.add("hidden");
    }, 100);

}

const startButton = document.querySelector(".start_button_click_area")
const envelope = document.querySelector(".envelope")
startButton.addEventListener('click', start_gif);
startButton.addEventListener('click', hidden_button);