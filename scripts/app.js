//Referencia a tag <section> do html dentro da variavel section
let section = document.getElementById("resultados-pesquisa");

document.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    pesquisar();
  }
});

//Função acionada ao clicar no botão de pesquisar
function pesquisar(){
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    if(!campoPesquisa){
        section.innerHTML = `<p class="msg-1">Erro,campo de pesquisa vazio ou inválido.</p>`;
        return
    }
    
    campoPesquisa = campoPesquisa.toLowerCase();
    
    let resultado = "";
    let nome = "";
    let descricao = "";
    let tipo = "";
    let regiao = "";
    
    //Loop qie visita todos os objetos dentro da lista
    for(let db of base){
        nome = db.nome.toLowerCase();
        descricao = db.descricao.toLowerCase();
        tipo = db.tipo.toLowerCase();
        regiao = db.regiao.toLowerCase();
        
        if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || regiao.includes(campoPesquisa)){
            resultado +=
            `<div class="item-resultado">
                <h2>${db.nome}</h2>
                <img src=${db.img}>
                <p class="descricao-meta">${db.descricao}</p>
                <p>Região: ${db.regiao}</p>
                <p>Tipo: ${db.tipo}</p>
                <a href=${db.link}>Saiba mais</a>
            </div>
            `
        }
    }
    
        
    if(!resultado){
            resultado = `<p class="msg-1">A pesquisa não retornou nenhum resultado.</p>`;
    }
    
    section.innerHTML = resultado;
    
}




