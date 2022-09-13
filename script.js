let painting = []
let actions = []

for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].departamento == 'painting') {
        painting.push(produtos[i])
    } else if (produtos[i].departamento == 'actions')
        actions.push(produtos[i])
}



const listaPaintings = document.querySelector('.Paintings')
const listaFigures = document.querySelector('.Figures')

function listar (lista,referencia){
for (let i = 0; i < lista.length; i++) {
    let produto = lista[i]
    let template = criarTemplate(produto)
    console.log(template);
    
    //jogar template na interface
    referencia.appendChild(template)
} 
}
listar(painting,listaPaintings);









function listar (lista,referencia){
    for (let i = 0; i < lista.length; i++) {
        let produto = lista[i]
        let template = criarTemplate(produto)
        console.log(template);
        
        //jogar template na interface
        referencia.appendChild(template)
    } 
    }
    listar(actions,listaFigures);
    










function criarTemplate(produto){
//recuperar info do produto
let nome =produto.nome
let valor =produto.valor
let imagem =produto.imagem
let dep  = produto.departamento

//criando elementos 
let tagLi = document.createElement('li')
let tagDivImg = document.createElement('div')
let tagImg = document.createElement('img')
let tagDivTex = document.createElement('div')
let tagH2 = document.createElement('h2')
let tagP = document.createElement('p')

//add as classes para o css
 
tagDivImg.classList.add('imagem')
tagDivTex.classList.add('text')
 
//Alimentando as tags com informações
 if(dep =='painting'){
tagImg.src = `assets/img/painting/${imagem}`
 }else{
    tagImg.src = `assets/img/actions/${imagem}`
 }
tagImg.alt = nome
tagH2.innerText = nome
tagP.innerText = `R$ ${valor}`

// montar o template
tagLi.append(tagDivImg,tagDivTex);
tagDivImg.append(tagImg)
tagDivTex.append(tagH2,tagP)


//retornar template
return tagLi
}
 

/* <li>
                        <div class="imagem">
                        <img src="/assets/img/painting/clock.jpg" alt="clock">
                    </div>
                    <div class="text">
                       <h2>Clock</h2> 
                       <p> R$ 10.00 </p>
                    </div>
                    </li> */