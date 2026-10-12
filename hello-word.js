const text = 'Learning ES6'

console.log(text);

let name = 'Fika Ridaul Maulayya';

let gender = 'Laki-laki';

if (true) {
    let name = 'Ahmad';
    console.log(name); //<-- output "Ahmad"
}
console.log(`${name} memiliki jenis kelamin : ${gender}`); 
//output "Fika Ridaul Maulayya memiliki jenis kelamin : Laki-laki"

function hello(message = 'Hello World!') {

	console.log(message);

}

//panggil function tanpa parameter
hello(); // <-- output "Hello World!"

//panggil function dengan parameter
hello('Belajar ES6'); //<-- output "Belajar ES6"

// define function dengan nama baru (misalnya: sapa)
const sapa = (name, umur) => `Hello ${name} umur ${umur}`;

// panggil function dengan console.log agar hasilnya tercetak di terminal
console.log(sapa('Fika Ridaul Maulayya', 25));