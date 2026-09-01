"use strict";
const output = document.getElementById("output");
const inputBatas = prompt("Masukkan angka batas: ");
const batas = Number(inputBatas);
let i = 1;
let hasil = " ";
while (i <= batas) {
    hasil += i + "<br>";
    i++;
}
if (output) {
    output.innerHTML = hasil;
}
