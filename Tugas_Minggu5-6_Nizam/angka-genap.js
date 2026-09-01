"use strict";
const output = document.getElementById("output");
const inputBatas = prompt("Masukkan angka batas atas: ");
const batas = Number(inputBatas);
let hasil = " ";
for (let i = 2; i <= batas; i += 2) {
    hasil += i + "<br>";
}
if (output) {
    output.innerHTML = hasil;
}
