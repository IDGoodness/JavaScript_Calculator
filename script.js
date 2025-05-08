function add() {
    const displayElement = document.getElementById('answer');
    const num1 = Number(document.getElementById('fnum').value);
    const num2 = Number(document.getElementById('snum').value);

    const numAdd = num1 + num2
    document.getElementById("demo").innerHTML = numAdd   
}

function sub() {
    const num1 = Number(document.getElementById('fnum').value);
    const num2 = Number(document.getElementById('snum').value);

    const numSub = num1 - num2
    document.getElementById("demo").innerHTML = numSub
}

function mul() {
    const num1 = Number(document.getElementById('fnum').value);
    const num2 = Number(document.getElementById('snum').value);

    const numMul = num1 * num2
    document.getElementById("demo").innerHTML = numMul
}

function div() {
    const num1 = Number(document.getElementById('fnum').value);
    const num2 = Number(document.getElementById('snum').value);

    const numDiv = num1 / num2
    document.getElementById("demo").innerHTML = numDiv
}

function clearResult() {
    document.getElementById('fnum').value = "";
    document.getElementById('snum').value = "";
    document.getElementById('demo').innerHTML = "";
}

let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
  // Save the event for later use
    deferredPrompt = e;
  // Show the install button
    const installBtn = document.getElementById("installBtn");
    installBtn.style.display = "block";

    installBtn.addEventListener("click", () => {
        // Hide the install button
        installBtn.style.display = "none";
        // Show the install prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === "accepted") {
                console.log("User accepted the install prompt");
            } else {
                console.log("User dismissed the install prompt");
            }
            deferredPrompt = null;
        });
    });
});

window.addEventListener("appinstalled", () => {
    console.log("PWA was installed");
});