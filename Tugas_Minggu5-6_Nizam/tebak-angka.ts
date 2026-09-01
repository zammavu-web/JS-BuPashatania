const output = document.getElementById("output")

const inputMax: string | null = prompt("Masukkan jumlah percobaan maksimal: ");

const maxPercobaan: number = Number(inputMax)

let percobaan: number = 1;

let hasil: string = " ";

while (percobaan <= maxPercobaan) {
    hasil += `Percobaan ke-${percobaan}: <br>`;
    percobaan++;
}

if (output) {
    output.innerHTML = hasil;
}

export {};