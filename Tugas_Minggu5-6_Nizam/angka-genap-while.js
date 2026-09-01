"use strict";
const output = document.getElementById("output");
const inputBatas = prompt("Masukkan angka batas atas: ");
const batas = Number(inputBatas);
let i = 2;
let hasil = "";
while (i <= batas) {
    hasil += i + "<br>";
    i += 2;
}
if (output) {
    output.innerHTML = hasil;
}
