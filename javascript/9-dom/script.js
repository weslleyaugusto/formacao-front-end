//1-Movendo-se pelo dom
/*

console.log(document.body)
//imprime o body no console

console.log(document.body.childNodes)
//imprime os nós filhos de body

console.log(document.body.childNodes[1].textContent)
//imprime o texto do primeiro elemento dentro do body

console.log(document.body.childNodes[1].childNodes[1].textContent)
//imprime o texto do primeiro elemento dentro do header. O primeiro [1] faz referencia ao header e o segundo [1] faz referencia ao primeiro elemento dentro do header

/*

//Selecionado elementos
//2-por tag

/*

let li = document.getElementsByTagName('li')
//acessa um elemento html pelo nome da tag

console.log(li)

*/

//por id
/*

let h1 = document.getElementById('h1')
//acessa um elemento html pelo seu id

h1.style.color = '#ff55fa'
console.log(h1.style.color)
//escreve o codigo da ccor no console
*/

//3-por classes

/*
let product = document.getElementsByClassName('Product')
//acessa o elemento html pela classe
console.log(product)
*/

//4-por querySelector
/*

let h2 = document.querySelectorAll('h2')
//acessa todos os elementos h2 na minha pagina

console.log(h2)
let onlyH2 = document.querySelector('.des')
//acessa uum elementi h2 com a classe des

console.log(onlyH2)
console.log(Object.getPrototypeOf(onlyH2))
*/
//5-alterando elementos html

//6-por insertBefore
/*

let p = document.createElement('p')
p.textContent = 'texto adicionado usando insertBefore'

let h1 = document.getElementById('h1')

let header = h1.parentElement
//acessa o elemento pai de h1

header.insertBefore(p,h1)
//header é o elemento no qual a tag vai ser colocada, p é a tag que vai ser colocada e h1 é qual tag de referencia vai ser usada para posiciona-lo

console.log(header)
*/


//7-por appendChild
/*

let p = document.createElement('p')
//cria um paragrafo
p.textContent = 'Texto adicionado usando appendChild'
//adiciona um texto nele

let product = document.getElementsByClassName('Product')[0]
//acessa um elemento

product.appendChild(p)
//adiciona o paragrafo criado no fim do elemento product

//8-Replace child

/*
let h4 = document.createElement('h4')
h4.textContent = 'Titulo menor' 
let h1 = document.getElementsByTagName("h1")[0]

let header = h1.parentElement
//acessa o elemento pai de h1

header.replaceChild(h4,h1)
//header é o elemento no qual ele sera posicionado, h2 é o elemento que sera posicionado e h1 é o elemento que vai ser removido para dar lugar ao h4

*/

//9-creatTextNode
/*
let text = document.createTextNode('Este é um teste de no de texto.')
//cria um nó de texto

console.log(text)

let header = document.getElementsByTagName('header')[0]

let h3 = document.createElement('h3')
console.log(h3)
//cria um h3

h3.appendChild(text)
//coloca  o valor de texto no final do h3

header.appendChild(h3)
//coloca o elemento h3 no final do header

console.log(h3)

console.log(document.body.childNodes)
console.log(document.body.nodeName)

console.log(typeof text)

*/

//10-Trabalhando com atributos

/*
let link = document.querySelector('a')
//seleciona o primeiro link da pagina

console.log(link.getAttribute('href'))

console.log(link)

link.setAttribute('href','https://www.google.com')
//Altera o valor do atributo href para https://www.google.com

console.log(link.getAttribute('href'))
//acessa o atributo href e imprime ele no console

link.setAttribute('target','_blank')

*/

//11-Altura e largura dos elementos

/*
let footer = document.getElementsByTagName('footer')[0]

console.log(footer.offsetHeight)
console.log(footer.offsetWidth)
//considera a borda do elemento

footer.style.border = '1px solid black'

console.log(footer.clientHeight)
console.log(footer.clientWidth)
//Não considera a borda do elemento

*/

//12-getClientBoundingRect

/*

const product = document.querySelector('.Product')

console.log(product.getBoundingClientRect())
//pega a posição do elemento no documento

*/
//13-Alterando estilos

/*

let main = document.getElementsByTagName('main')[0]

main.style.backgroundColor = 'lightgray'
main.style.color = 'red'
main.style.padding = '20px'
main.style.border = '1px solid black'
main.style.borderRadius = '10px'
*/
//14-alterando estilos de HTMLcollection



const lisItems = document.getElementsByTagName('li')
//cria um array com todas as li do meu documento

for (const li of lisItems) {//percorre o array com os lis, li é onde ficara armazenado os valores do objeto
    li.style.fontStyle = 'italic'//altera o estilo para cada li
}

let products = document.getElementsByClassName('Product')
console.log(products)

for(let i = 0;i < products.length;i++){
    products[i].style.color = 'red'
}

for(let pos in lisItems){
    lisItems[pos].style.backgroundColor = 'gray'
}
