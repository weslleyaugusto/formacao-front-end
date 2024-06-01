let iphoneImg = document.querySelector('#iphone-img')

let green = document.querySelector('#green')
let silver = document.querySelector('#silver')
let gold = document.querySelector('#golden')
let garfite = document.querySelector('#grafite')
let blue = document.querySelector('#blue')

let greenEx = document.querySelector('.green')
let silverEx = document.querySelector('.silver')
let goldEx = document.querySelector('.gold')
let garfiteEx = document.querySelector('.grafite')
let blueEx = document.querySelector('.blue')

green.addEventListener('click', () => {
    try{
        let active = document.querySelector('.active')
        active.classList.remove('active')
    }catch{
        iphoneImg.src = 'imagens/iphone_green.jpg'
        greenEx.classList.add('active')
    }
})

silver.addEventListener('click', () => {
    try{
        let active = document.querySelector('.active')
        active.classList.remove('active')
    }catch{
        iphoneImg.src = 'imagens/iphone_silver.jpg'
        silverEx.classList.add('active')
    }
})

gold.addEventListener('click', () => {
    try{
        let active = document.querySelector('.active')
        active.classList.remove('active')
    }catch{
        iphoneImg.src = 'imagens/iphone_golden.jpg'
        goldEx.classList.add('active')
    }
})

garfite.addEventListener('click', () => {
    try{
        let active = document.querySelector('.active')
        active.classList.remove('active')
    }catch{
        iphoneImg.src = 'imagens/iphone_grafite.jpg'
        garfiteEx.classList.add('active')
    }
})

blue.addEventListener('click', () => {
    try{
        let active = document.querySelector('.active')
        active.classList.remove('active')
    }catch{
        iphoneImg.src = 'imagens/iphone_blue.jpg'
        blueEx.classList.add('active')
    }
})