//CreateElement()
let p = document.createElement('p');
p.innerText = 'Esse é um texto de teste';
p.id = "parag_1";
p.setAttribute('name', 'titulo');

// console.log(p);

//<p>Valor aqui de dentro</p>

let img = document.createElement('img');

img.src = "https://kenzie.com.br/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75";
img.alt = "Logo da Kenzie";

// console.log(img);

//AppendChild()
let ul = document.createElement('ul');

let li_1 = document.createElement('li');
li_1.innerHTML = 'HTML';

let li_2 = document.createElement('li');
li_2.innerHTML = 'CSS';

let li_3 = document.createElement('li');
li_3.innerHTML = 'Javscript';

ul.appendChild(li_1);
ul.appendChild(li_2);
ul.appendChild(li_3);

console.log(ul);

let body = document.querySelector('body');

body.appendChild(img);
body.appendChild(ul);
body.appendChild(p);

