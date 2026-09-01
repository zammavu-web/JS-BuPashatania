const output = document.getElementById("output");

const inputBatas: string | null = prompt("Masukkan angka batas atas: ");

const batas: number = Number(inputBatas);

let i: number = 2;

let hasil: string = "";

while (i <= batas) {
  hasil += i + "<br>";
  i += 2; 
}

if (output) {
  output.innerHTML = hasil;
}

export {};