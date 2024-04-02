const initMenu = () => {
    const burger = document.querySelector('[data-name="burger"]');
    const navbar = document.querySelector('[data-name="nav"]');
    const body = document.querySelector('body');
    const actionNavbar = () => {
        navbar.classList.toggle('js--active');
        burger.classList.toggle('js--active');
        body.classList.toggle('js--lock');
    };
    burger.addEventListener('click', actionNavbar)
};
initMenu();

const initVideo = () => {
    const mainVideoWrp = document.querySelector("[data-name='video']"),
    video = document.querySelector("[data-name='video-box']"),
    close = document.querySelector("[data-name='video-close']");
    video.addEventListener("click", ()=>{
        mainVideoWrp.classList.add("js-active");
        close.addEventListener("click", ()=>{
            mainVideoWrp.classList.remove("js-active");
        });
    });
}
initVideo()

const initPopup = () => {
    const popup = document.querySelector("[data-name='popup']"),
    popupButtons = document.querySelectorAll("[data-name='popup-button']"),
    close = document.querySelector("[data-name='popup--button-close']");
    popupButtons.forEach((button) => {
        button.addEventListener("click", ()=>{
            popup.classList.add("js-active");
            close.addEventListener("click", ()=>{
                popup.classList.remove("js-active");
            });
        })
    });
}
initPopup()