"use strict";
const output = document.getElementById("output");
const inputMax = prompt("Masukkan jumlah percobaan maksimal: ");
const maxPercobaan = Number(inputMax);
let percobaan = 1;
let hasil = " ";
while (percobaan <= maxPercobaan) {
    hasil += `Percobaan ke-${percobaan}: <br>`;
    percobaan++;
}
if (output) {
    output.innerHTML = hasil;
}
