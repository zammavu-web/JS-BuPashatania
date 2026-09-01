const output = document.getElementById("output");

const inputBatas: string | null = prompt("Masukkan angka batas: ");

const batas: number = Number(inputBatas);

let i: number = 1;
let hasil: string = " ";

while (i <= batas) {
    hasil += i + "<br>";
    i++;
}

if (output) {
    output.innerHTML = hasil;
}

export {};