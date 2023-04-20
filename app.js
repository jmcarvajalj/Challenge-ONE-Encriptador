function encrypt() {
    let textArea = document.getElementById("input-text");
    let plainText = textArea.value;
    let encryptedText = plainText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    displayButton();
    displayTextArea(encryptedText);
}

function decrypt() {
    let textArea = document.getElementById("input-text");
    let encryptedText = textArea.value;
    let plainText = encryptedText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    displayButton();
    displayTextArea(plainText);
}

function displayButton() {
    let parentElement = document.getElementById("result");
    parentElement.innerHTML = "";

    let button = document.createElement("button");
    button.innerHTML = "Copiar";
    button.type = "submit";
    button.className = "copiar";
    button.onclick = function () {
        copyToClipboard();
    };
    document.body.appendChild(button);
}

function displayTextArea(text) {
    let textArea = document.createElement("textArea");
    textArea.innerHTML = text;
    textArea.id = "output-text";
    textArea.name = "output-text";
    textArea.setAttribute('readonly', true);
    document.body.appendChild(textArea);
}

function copyToClipboard() {
    let copyText = document.getElementById("output-text");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}