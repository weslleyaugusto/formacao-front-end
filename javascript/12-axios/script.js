const { default: axios } = require("axios")

//1-Instalação
console.log(axios)

//2-primeiro request

async function getData(){
    try {

        const response = await axios.get("https://jsonplaceholder.typicode.com/users", 
            //4-Definindo headers
            {
                Headers:{
                    "content-type":"aplication/json",
                    custom: 'header'
                }
            }
        )
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
    }
}
//3-imprimindo os dados
let data

const container = document.querySelector('#user-container')

async function printData(){
    data = await getData()
    data.forEach(user => {
        let div = document.createElement("div")
        let name = document.createElement('h2')
        name.innerHTML = user.name
        div.appendChild(name)
        container.appendChild(div)

        let emailElement = document.createElement('p')
        emailElement.innerHTML = user.email
        container.appendChild(emailElement)

        let userNameElement = document.createElement('div')
        userNameElement.innerHTML = user.username
        div.appendChild(userNameElement)
    });
}

printData()

//5-post
const form = document.querySelector('form')
const textContent = document.querySelector('#content')
const title = document.querySelector('#title')

form.addEventListener('submit', e => {
    e.preventDefault()

    axios.post('https://jssonplaceholder.typicode.com/posts',{
        body: {title: title.value, textContent: textContent.value, userId: 11}
})
})