var imagens = [
]

var page=0
function carregarImagens(page) {
    if (page <= 1) {
        page=1
    }

    if (!imagens[page]) {
        morePages = false
        return
    }

    pageEnd = page*5
    var html = ""

    for (i=pageEnd-5; i<pageEnd; i++) {
        
        if (i >= imagens.length) {
            // botao = document.querySelector('#loadMore')
            // botao.parentNode.removeChild(botao)
            if (!imagens[i]) {
                morePages = false
            }
            break;
        }

        console.log(imagens[i])
        var img = document.querySelector('.expl').cloneNode(true)
        img.querySelector('.imagem').style["background-image"]= "url("+imagens[i].imagem+")";
        img.querySelector('.caption').innerHTML = imagens[i].text
        img.style.display="block";
        document.querySelector('.carrosel-line').appendChild(img)
    }
    console.log(page)
    console.log(imagens[page])
    
    console.log(html)
    // document.querySelector('.carrosel-line').innerHTML += html;
}


fetch('http://instagram.com/mrbean.clip/?__a=1')
.then(response => response.json())
.then(data => {
    for (let instagramUrl of data.graphql.user.edge_owner_to_timeline_media.edges) {
        imagens.push({
            text:instagramUrl.node.edge_media_to_caption.edges[0].node.text,
            imagem: instagramUrl.node.display_url
        })
    }

    carregarImagens(++page)
    
    console.log(imagens)
})

morePages = true

window.addEventListener('scroll', (ev) => {
    // console.log(window.innerHeight)
    // console.log(window.scrollY)
    // console.log(document.body.offsetHeight)
    // console.log(ev)
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight && morePages) {
        console.log("fim da pagina", morePages)
        carregarImagens(++page)
    }
})