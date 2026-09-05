// Tipe Data String

// Mengetahui Panjang String
let namadia = 'John';
console.log(namadia.length); //Output: 4 (jumlah karakter)

// Mengetahui case karakter
let teks = 'Belajar Javascript';
console.log(teks.toLowerCase()); //Output: belajar javascript
console.log(teks.toUpperCase()); //Output: BELAJAR JAVASCRIPT

// Mencari indeks karakter / Substring
let tek = 'Belajar Javascript';

console.log(tek.indexOf('Javascript'));    //Output: 8  (mulai dari indeks ke-8)
console.log(tek.indexOf('CSS'));           //Output: -1 (tidak ditemukan)
console.log(tek.lastIndexOf('a'));         //Output: 10 (indeks karakter terakhir yang cocok)

// Memotong (slice) string
let notes = 'Belajar Javascript';

console.log(notes.slice(7));    //Output: Javascript
console.log(notes.slice(0, 7)); //Output: Belajar

// Menggantikan (Replace) Subtring
let n = 'Belajar Javascript'
console.log(n.replace('Javascript','CSS')); //Output: Belajar CSS

// Memisahkan String menjadi Array
let kalimat = 'Belajar,Javascript';

// split() akan memecah string jadi array berdasarkan tanda koma
let hasilSplit = kalimat.split(',');   

console.log(hasilSplit); //Output: ['Belajar','Javascript']

// Menggabungkan Array menjadi String
let kataArray = ['Belajar','Javascript'];

// join() menggabungkan isi array dengan spasi
let hasilJoin = kataArray.join('');

console.log(hasilJoin) //Output: Belajar Javascript

// Interpolasi string: memasukkan nilai variabel atau ekspresi JS ke dalam string (Template Literal)
let orang = 'John Doe';
let usia = 25;

// Gunakan backtick ` dan sintaks ${}
let biodata = `Nama: ${orang}, Umur: ${usia}`;

console.log(biodata); //Output: Nama: John Doe, Umur: 25

