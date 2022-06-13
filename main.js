var novoPost = {
    foto: 'https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info',
    titulo: 'Gato',
    texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, accusamus?'
}
var containerElemento = document.querySelector('.container')

var posts = [
    {
        foto: 'https://s3.static.brasilescola.uol.com.br/be/2022/01/tigre.jpg',
        titulo: 'O tigre',
        texto: 'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.'
    }
]


for (let post of posts) {

    containerElemento.innerHTML += `
<div class="item" id="img">
<img src="${post.foto}">
<h2>${post.titulo}</h2>
<p>${post.texto}</p>
</div>
`
}

function start(){
    let postagem = {
    titulo: document.querySelector("#titulo"),
    texto: document.querySelector("#texto"),
    imagem: document.querySelector("#url")
    }
        for (let i = 0; i < 1; i++) {
        containerElemento.innerHTML += `
        <div class="item" id="img">
        <img src="${postagem.imagem.value}">
        <h2>${postagem.titulo.value}</h2>
        <p>${postagem.texto.value}</p>
        </div>`
    }     
        postagem.value = ""
}



