function criarCards(){
    for(let i = 0 ; i<filmes.length ; i++){
        let filme = filmes[i];
     
        let card = document.createElement('div');
        card.setAttribute('class', 'card');

        let img = document.createElement('img');
        img.src = filme.imagem;
        // img.setAttribute('src', filme.imagem);
        img.alt = filme.titulo;

        let section = document.createElement('section');

        card.appendChild(img);
        card.appendChild(section);

        let titulo = document.createElement('div');
        titulo.setAttribute('class','titulo-filme');

            let h4_1 = document.createElement('h4'); 
            h4_1.innerHTML = filme.titulo;

            let h4_2 = document.createElement('h4');
            h4_2.innerHTML = filme.avaliacao;

            titulo.appendChild(h4_1);
            titulo.appendChild(h4_2);


        let sinopse = document.createElement('div');
        sinopse.setAttribute('class','sinopse');

            let sin = document.createElement('p');
            sin.setAttribute('class','bold');
            sin.innerHTML = "Sinopse:";

            let small = document.createElement('small');
            small.innerHTML = filme.sinopse;

            sinopse.appendChild(sin);
            sinopse.appendChild(small);


        let informacoes = document.createElement('div');
        informacoes.setAttribute('class','informacoes');

            let p1 = document.createElement('p');
            p1.innerHTML = `Duração: ${filme.duracao}`

            let p2 = document.createElement('p');
            p2.innerHTML = `Lançamento: ${filme.anoLancamento}`

            informacoes.appendChild(p1);
            informacoes.appendChild(p2);

        let categorias = document.createElement('div');
        categorias.setAttribute('class','categorias');

            for(let j = 0 ; j<filme.categorias.length; j++ ){
                let filmeCategoria = filme.categorias[j];

                let categoria = document.createElement('p');
                categoria.setAttribute('class', 'categoria');
                categoria.innerHTML = filmeCategoria;

                categorias.appendChild(categoria);
            }

        section.appendChild(titulo);
        section.appendChild(sinopse);
        section.appendChild(informacoes);
        section.appendChild(categorias);


        let list = document.querySelector('.lista-filmes');
        list.appendChild(card);
    }
}
criarCards()


let flag = false;
function darkMode(){
    let body = document.querySelector('body');
    let btn = document.querySelector('#btn-darkMode');
    let filho = document.querySelector('.filho');
    if(flag == false){
        body.setAttribute('class','darkMode');
        btn.innerHTML = "InitialMode"
        filho.setAttribute('class', 'filho right-align')
    }else{
        body.setAttribute('class','');
        btn.innerHTML = "DarkMode"
        filho.setAttribute('class', 'filho')
    }
    flag = !flag;  //!true = false  &&  !false = true

   
}



// <div class="card">
//     <img src="./imgs/Star_Wars.jpg" alt="Star Wars">
//     <section>
//         <div class="titulo-filme">
//             <h4>Star Wars</h4>
//             <h4>8.6</h4>
//         </div>
//         <div class="sinopse">
//             <p class="bold">Sinopse:</p>
//             <small>Luke Skywalker une forças com um cabaleiro Jedi, um arrogante piloto é dois dróides para salvar a galaxia enquanto tentam salvar a princesa Leia do misterioso Darth Vader.</small>
//         </div>          
//         <div class="informacoes">
//             <p>Duração: 2h 1min</p>
//             <p>Lançamento: 1977</p>
//         </div>
//         <div class="categorias">
//             <p class="categoria">Ação</p>
//             <p class="categoria">Aventura</p>
//             <p class="categoria">Fantasia</p>
//         </div>
//     </section>
// </div> 















// {
//     titulo: "Star Wars",
//     imagem: "./imgs/Star_Wars.jpg", 
//     sinopse: "Luke Skywalker une forças com um cabaleiro Jedi, um arrogante piloto é dois dróides para salvar a galaxia enquanto tentam salvar a princesa Leia do misterioso Darth Vader.",
//     anoLancamento: 1977,
//     avaliacao: 8.6,
//     duracao: "2h 1min",
//     instrutor: "Kayan",
//     categorias: ["Ação", "Aventura", "Fantasia"]
// }