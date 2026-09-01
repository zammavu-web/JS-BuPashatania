const output = document.getElementById("output");

const inputN: string | null = prompt("Masukkan angka N: ");

const batas: number = Number(inputN);

const N: number = Number(inputN)

let hasil: string = " ";

for (let i: number = 1; i <= batas; i++) {
    hasil += i + " ";
}

if (output) {
    output.innerHTML = hasil;
}

export {};