const livros = require('./listaLivros');
const menorValor = require('./menorValor'); 

for(let atual = 0; atual < livros.length - 1; atual++){
    let menor = menorValor(livros, atual);
    console.log('posição atual ', atual)

    let livroAtual = livros[atual];
    console.log('Livro atual ', livros[atual])

    let livroMenorPreco = livros[menor];
    console.log('Livro menor preço ', livros[menor])

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual; 
}

console.log(livros)