let password = document.querySelector("#password")
let backgroundOBJ = document.querySelector("#background-mg")

backgroundOBJ.style.filter = "blur(20px)";

password.addEventListener("keyup", (e) => {
    switch(password.value.length){
        case 1:
            backgroundOBJ.style.filter = `blur(17px)`;
            break;
        case 2:
            backgroundOBJ.style.filter = `blur(14px)`;
            break;
        case 3:
            backgroundOBJ.style.filter = `blur(12px)`;
            break;
        case 4:
            backgroundOBJ.style.filter = `blur(10px)`;
            break;
        case 5:
            backgroundOBJ.style.filter = `blur(8px)`;
            break;
        case 6:
            backgroundOBJ.style.filter = `blur(5px)`;
            break;
        case 7:
            backgroundOBJ.style.filter = `blur(3px)`;
            break;
        case 8:
            backgroundOBJ.style.filter = `blur(0px)`;
            break;
    }
})