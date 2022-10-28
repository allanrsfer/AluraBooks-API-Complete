function calculateTotalValueOfAvailableBooks(book) {
  return book.reduce((acc, book) => acc + book.preco, 0).toFixed(2)
}