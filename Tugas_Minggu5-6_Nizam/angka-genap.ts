const output = document.getElementById("output")

const inputBatas: string | null = prompt("Masukkan angka batas atas: ");

const batas: number = Number(inputBatas)

let hasil: string = " ";

for (let i: number = 2; i <= batas; i += 2) {
  hasil += i + "<br>";
}

if (output) {
  output.innerHTML = hasil;
}

export {};