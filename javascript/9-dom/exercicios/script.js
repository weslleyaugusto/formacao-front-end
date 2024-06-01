//insertBefore
let h1 = document.getElementsByTagName('h1')[0]

let p = document.createElement('p')
p.textContent = 'Este elemento foi posicionado usando insetBefore'

let header = document.querySelector('header')

header.insertBefore(p,h1)

//appendChild

let p2 = document.createElement('p')
p2.textContent = 'Este elemento foi posicionado usando appendChild'

header.appendChild(p2)

//replaceChild
let h6 = document.createElement('h6')
h6.textContent = 'Um h6 substituiu um h1 usanso replaceChild'

header.replaceChild(h6,h1)

