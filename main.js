//Modelo de Função declaration
confefirPalavra()

function confefirPalavra() {
    let palavra = 'tipo'
    let palavraSeparada =  palavra.split('')
    let palavraInvertida = palavraSeparada.reverse()
    let novapalavra = palavraInvertida.join('')
    // console.log(novapalavra)

    if (palavra == novapalavra) {
        console.log(`A palavra ${palavra} é palíndroma!`)

    }else {
        console.log(`A palavra ${ palavra} não é palíndroma!`)
    }

}



//Modelo de Função expression
const fExpression_confefirPalavra = function (palavra) {
    // let palavra = 'tipo'
    let palavraSeparada =  palavra.split('')
    let palavraInvertida = palavraSeparada.reverse()
    let novapalavra = palavraInvertida.join('')
    // console.log(novapalavra)

    if (palavra == novapalavra) {
        console.log(`A palavra ${palavra} é palíndroma!`)

    }else {
        console.log(`A palavra ${ palavra} não é palíndroma!`)
    }

}
// Chamada da função tem que ser depois da dclaração da função
fExpression_confefirPalavra('radar')