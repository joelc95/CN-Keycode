let keyContent = document.getElementById("key-content");
let codeContent = document.getElementById("code-content");
let whichContent = document.getElementById("which-content");
let bigNumber = document.getElementById("keycode-display");

window.addEventListener("keydown", (event) => {
    bigNumber.innerHTML = event.which;
    bigNumber.style.fontSize = "300px";

    keyContent.innerHTML = event.key;
    // console.log(event.key);
    codeContent.textContent = event.code;
    // console.log(event.code)
    whichContent.textContent = event.which;
    // console.log(event.which)

    if (event.key == ' ') {
        keyContent.innerHTML = "Spacebar"
    }
})