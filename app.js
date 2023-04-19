function encriptar() {
  let textArea = document.getElementById("input-text");
  let plainText = textArea.value;
  let encryptedText = plainText
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    
  console.log(encryptedText);
}

function desencriptar() {
  let textArea = document.getElementById("input-text");
  let encryptedText = textArea.value;
  let plainText = encryptedText
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u")

  console.log(plainText);
}
