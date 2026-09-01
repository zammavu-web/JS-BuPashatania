"use strict";
const output = document.getElementById("output");
const inputAwal = prompt("Masukkan angka awal hitung mundur: ");
const awal = Number(inputAwal);
let hasil = " ";
for (let i = awal; i >= 1; i--) {
    hasil += i + "<br>";
}
hasil += "Selamat Tahun Baru!";
if (output) {
    output.innerHTML = hasil;
}
