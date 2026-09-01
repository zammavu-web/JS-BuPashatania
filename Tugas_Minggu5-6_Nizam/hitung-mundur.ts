const output = document.getElementById("output");

const inputAwal: string | null = prompt("Masukkan angka awal hitung mundur: ");

const awal: number = Number(inputAwal);

let hasil: string = " ";

for (let i: number = awal; i >= 1; i--) {
  hasil += i + "<br>";
}

hasil += "Selamat Tahun Baru!";

if (output) {
  output.innerHTML = hasil;
}

export {};