"use strict";
const output = document.getElementById("output");
const inputN = prompt("Masukkan angka N: ");
const batas = Number(inputN);
const N = Number(inputN);
let hasil = " ";
for (let i = 1; i <= batas; i++) {
    hasil += i + " ";
}
if (output) {
    output.innerHTML = hasil;
}
