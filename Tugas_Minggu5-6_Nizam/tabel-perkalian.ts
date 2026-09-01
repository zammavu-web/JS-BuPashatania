const output = document.getElementById("output");

const inputN: string | null = prompt("Masukkan angka perkalian: ");

const N: number = Number(inputN);

let hasil: string = "";

for (let i: number = 1; i <= 10; i++) {
  hasil += `${i} x ${N} = ${i * N}<br>`;
}

if (output) {
  output.innerHTML = hasil;
}

export {};