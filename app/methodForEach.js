const insertElementBook = document.querySelector('#livros')
const elementWithTotalValueOfAvailableBooks = document.querySelector("#valor_total_livros_disponiveis")

function displayBooksOnScreen(listBooks) {
  elementWithTotalValueOfAvailableBooks.innerHTML = ''
  insertElementBook.innerHTML = ''
  listBooks.forEach(book => {
    let availability = book.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
    insertElementBook.innerHTML += `
      <div class="livro">
      <img class="${availability}" src="${book.imagem}" alt="${book.alt}" />
      <h2 class="livro__titulo">
        ${book.titulo}
      </h2>
      <p class="livro__descricao">${book.autor}</p>
      <p class="livro__preco" id="preco">R$${book.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${book.categoria}</span>
      </div>
    `
  });
}

function checkBookAvailability(book) {
  
}