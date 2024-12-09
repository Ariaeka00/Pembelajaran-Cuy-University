let body = document.body;
let info = document.getElementById("info");
let mode = document.getElementById("mode");
let toggle = document.getElementById("mode")

const darkLimit = 5;
let darkCounter = 0;
let darkRemainingLeft;

function darkMode() {
    if(darkRemainingLeft == 1) {
        info.textContent = "JATAH FITUR DARK MODE ANDA UDAH ABIS AWOKWOWKWKOK 😝"
        mode.style.display = "none";
        home.textContent = "RESTART";
        return;
    }

    darkCounter += 1;
    darkRemainingLeft = darkLimit - darkCounter;

    // render ke info element
    info.textContent = `dark mode dipakai ${darkCounter}x, tersisa ${darkRemainingLeft} `

    if(body.classList.contains("dark")) {
        mode.textContent = "MODE DARK"
    }else {
        mode.textContent = "MODE LIGHT"
    }

    body.classList.toggle("dark")
}

function reRender() {
    location.reload();
}

function modeJomblo() {
   
    body.classList.toggle("modeJomblo")

    // render ke info element
    
}
