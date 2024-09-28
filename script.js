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