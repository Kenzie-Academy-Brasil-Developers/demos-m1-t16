console.log(window.location.href);

let url = prompt('Digite uma url');
window.location.href = url;

let color = prompt('Digite uma cor');
let color = 'grey'
window.document.body.style = `background: ${color}`;

let text = prompt("Digite um texto");
window.document.body.write(prompt("Digite um texto"));

let title = prompt('Digite um titulo');
window.document.title = title;

let p1 = document.querySelector('#html');
console.log(p1);
let p2 = document.querySelector('.css')
console.log(p2);
let p3 = document.querySelectorAll('p')[2];
console.log(p3);


let image = document.querySelector('img');
console.log(image);

console.log(image.src);
console.log(image.alt);

image.src = './cao.jpg';
image.alt = 'Cachorro';