"use strict";
const output = document.getElementById("output");
const inputN = prompt("Masukkan angka perkalian: ");
const N = Number(inputN);
let hasil = "";
for (let i = 1; i <= 10; i++) {
    hasil += `${i} x ${N} = ${i * N}<br>`;
}
if (output) {
    output.innerHTML = hasil;
}
