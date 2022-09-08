let password = document.querySelector("#password")
let backgroundOBJ = document.querySelector("#background-mg")

backgroundOBJ.style.filter = "blur(20px)";

password.addEventListener("keyup", (e) => {
    var item = 20;
    item = password.value.length / 20
    backgroundOBJ.style.filter = `blur(${item}+ px)`;
})