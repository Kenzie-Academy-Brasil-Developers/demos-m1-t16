function initValues(info){
    let list = document.querySelector('#listagem');
    for(let i = 0 ; i < info.length ; i++){
        let pessoa = info[i];
        let card = criarCard(pessoa);
        list.insertAdjacentHTML('beforeend', card);
    }
    return 'Renderização deu certo';
}

console.log(initValues(data))

function criarCard(pessoa){
    let elemento = `
    <li>
        <img src="${pessoa.imagem}" href="${pessoa.nome}">
        <div>
            <p>Nome: ${pessoa.nome} ${pessoa.sobrenome}</p>
        </div>  
    </li> 
    `
    return elemento;
}

