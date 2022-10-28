const buttons = document.querySelectorAll('.btn')
buttons.forEach(button => button.addEventListener('click', filterBooks))

function filterBooks() {
  const buttonElement = document.getElementById(this.id)
  const category = buttonElement.value
  let filterBook = category == 'disponivel' ? filterAvailability() : filterCategory(category)
  displayBooksOnScreen(filterBook)
  if(category == 'disponivel') {
    const amount = calculateTotalValueOfAvailableBooks(filterBook)
    displayTotalValueOfAvailableBooksOnScreen(amount)
  }
}

function filterCategory(category) {
  return books.filter(book => book.categoria == category)
}

function filterAvailability() {
  return books.filter(book => book.quantidade > 0)
}

function displayTotalValueOfAvailableBooksOnScreen(amount) {
  elementWithTotalValueOfAvailableBooks.innerHTML = `
  <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${amount}</span></p>
  </div>
  `
}