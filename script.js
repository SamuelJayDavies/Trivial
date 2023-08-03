const randomNumBtn = document.querySelector("#randomNumberBtn");
const randomNumTxt = document.querySelector("#randomNumberTxt");

randomNumBtn.addEventListener("click", () => {
    let x = Math.floor(Math.random() * 100);
    randomNumTxt.innerHTML = x;
})