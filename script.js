var containerElemento = document.querySelector('.container')
var novaPostagemElemento = document.querySelector('#novaPostagem')

var elementoInputTitulo = document.querySelector('#titulo')
var elementoInputURL = document.querySelector('#url')
var elementoInputIngredientes = document.querySelector('#ingredientes')
var elementoInputModo = document.querySelector('#modo')


var posts = [
{
imagem: 'https://coolicias.ao/wp-content/uploads/2021/03/Como-fazer-suspiros-decorados-scaled.jpeg',
titulo: 'Suspiro',
ingredientes:
`<li>6 unidades de clara de ovo </li>
<li>1 xícara de açúcar de confeiteiro</li>
<li>1 colher de sopa de suco de limão</li>`,
modo: 'Modo de Preparo: Visite nosso Canal no YouTube e Acompanhe mais!'
},
{
imagem: 'https://coolicias.ao/wp-content/uploads/2021/03/Receita-de-Doces-faceis-de-fazer-com-Danoninho-Caseiro.jpg',
titulo: 'Danoninho Caseiro',
ingredientes:
`<li>Uma lata de leite condensado moça </li>
<li>Duas caixas de creme de leite</li>
<li>200 gramas de iogurte natural</li>
<li>Um pacote de suco tang em pó sabor morango</li>`,
 modo: 'Modo de Preparo: Visite nosso Canal no YouTube e Acompanhe mais!'
},
{
    imagem: 'https://coolicias.ao/wp-content/uploads/2021/03/Receita-de-Doces-faceis-de-fazer-com-Torta-de-Limao-delicioso.jpg',
    titulo: 'Torta de Limão',
    ingredientes:
    
    `
    Massa: 
    <li>200 g de biscoito de maisena</li>
    <li>2150 g de margarina.</li>

    Recheio: 
    <li>1 lata de leite condensado (395 g)</li>
    <li>1 caixa de creme de leite (200 g)</li>
    <li>2 sucos de 4 limões</li>
    <li>2 raspas de 2 limões</li>
    Cobertura:
    <li>3 ou 4 claras de ovo</li>
    <li>3 colheres (sopa) de açúcar</li>
    <li>raspas de 2 limões para decorar</li>
    `,
     modo: 'Modo de Preparo: Visite nosso Canal no YouTube e Acompanhe mais!'
    },
    {
imagem: 'https://vovopalmirinha.com.br/wp-content/uploads/2019/07/receitas-vovo-palmirinha-rocambole-de-carne-moida-702x336.jpg',
titulo: 'Rocambole de carne moída',
ingredientes:
`
Massa: 
<li>1 kg de coxão duro moído</li>
<li> 1/2 xícara (chá) de cebola triturada</li>
<li>2 dentes de alho amassados</li>
<li> Sal a gosto</li>
<li>8 fatias de bacon</li>
<li>200g de queijo prato fatiado</li>
<li> 1/2 xícara (chá) de azeitona verde picada</li>
<li> 2 colheres (sopa) de maionese</li>
`,
modo: 'Modo de Preparo: Visite nosso Canal no YouTube e Acompanhe mais!'
}
]


for (let post of posts) {

    containerElemento.innerHTML += `
<div class="item">
<img src="${post.imagem}" id ="imagePost">
<h2>${post.titulo}</h2>
<p>${post.ingredientes}</p>
<p>${post.modo}</p>
</div>
`
}


novaPostagemElemento.addEventListener ('click', (event)=> {
    
    event.preventDefault();

    let postagem = {
        titulo: elementoInputTitulo.value,
        ingredientes: elementoInputIngredientes.value,
        modo: elementoInputModo.value,
        imagem: elementoInputURL.value
        }

        containerElemento.innerHTML += `
        <div class="item" id="img">
        <img src="${postagem.imagem}">
        <h2>${postagem.titulo}</h2>
        <p><class = "postValue"${postagem.ingredientes}</p>
        <p>${postagem.modo}</p>
        </div>`

        posts.push(postagem)

        elementoInputIngredientes.value=" "
        elementoInputModo.value=" "
        elementoInputTitulo.value=" "
        elementoInputURL.value=" "
    
    console.log(posts)

})