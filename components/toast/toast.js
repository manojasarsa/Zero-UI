const liveLeadingBtn = document.querySelector("#btn_leading");
const liveTopRight = document.querySelector("#btn_top_right");
const toastBox = document.querySelector("#toast_box");

liveLeadingBtn.addEventListener('click', () => {
    toastBox.classList.add("toast_active_leading");
    toastBox.classList.add("toast_position");

    setTimeout(() => {
        toastBox.classList.remove("toast_position");
        toastBox.classList.remove("toast_active_leading");
    }, 3000)
})

liveTopRight.addEventListener('click', () => {
    toastBox.classList.add("toast_active_top_right");
    toastBox.classList.add("toast_position");

    setTimeout(() => {
        toastBox.classList.remove("toast_position");
        toastBox.classList.remove("toast_active_top_right");
    }, 3000)
})