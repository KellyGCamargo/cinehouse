var cinema = 'nome da loja'

console.log(cinema)


var filme1 = [1,'Top Gun',2.5,'Tom Cruise',1985,false]
var filme2 = [2,"Jurassic Park",2.3,"Chris Pratt",2022,true]
var catalogo = [filme1,filme2]


// FUNÇÃO ADICIONA FILMES

var filme=[3,'Os Minions',1.9,'Tom Seleck',2012,false]

function adicionaFilme(filme) {
catalogo.push(filme)
}
console.log(adicionaFilme(filme))
console.log(catalogo)

// // FUNÇÃO BUSCAR FILME
// function buscarFilme(numFilme) {
//     for (let index = 0; index < catalogo.length; index++) {
//         const element = array[index].codigo
//         if(numFilme==element){
//             console.log(catalogo[index])
//         }
//     }
// // var filmeBuscado = catalogo[numFilme]
// // return filmeBuscado
// }
// console.log(buscarFilme(2))


function buscarFilme(filmeBuscad){
    for (let index = 0; index < catalogo.length; index++) { //Rodando catalogo até achar a variavel escolhida 
        const element = catalogo[index].codigo
        if (filmeBuscad==element) {
            console.log(catalogo[index])
        }
    }
}

//FUNÇÃO ALTERAR STATUS DE EM CARTAZ

function alterarStatusFilme(numeroFilme) {

    let alteraStatus = !catalogo[numeroFilme][5]
    catalogo[numeroFilme].pop()
    catalogo[numeroFilme].push(alteraStatus)
    
    return catalogo[numeroFilme]
    }
    
console.log(alterarStatusFilme(1))


