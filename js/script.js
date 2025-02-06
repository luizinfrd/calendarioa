function mostrarAno() {
    const data = new Date()
    const ano = data.getFullYear()
    const anoElement = document.querySelector('.ano')
    anoElement.textContent = ano
}

const setas = document.querySelector('.setas')
const tela2 = document.querySelector('.tela2')

setas.addEventListener('click', () => {
    tela2.scrollIntoView({behavior: 'smooth'})
})

const setaDireita = document.querySelector('#direita')
const setaEsquerda = document.querySelector('#esquerda')
const dataElement = document.querySelector('.data')

setaDireita.addEventListener('click', () => {
    const data = new Date()
    const diaAtual = data.getDate()
    const mesAtual = data.getMonth() + 1
    const anoAtual = data.getFullYear()
    const diasNoAno = bissexto(anoAtual) ? 366 : 365

    

    setaEsquerda.addEventListener('click', () => {
        dataElement.textContent = `${diaAtual} / ${mesAtual} / ${anoAtual}`

    })

    dataElement.textContent = `${diaAtual} / ${diasNoAno}`
})

function bissexto(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}