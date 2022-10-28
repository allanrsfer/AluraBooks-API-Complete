let books = []
const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getSearchBooksAPI()

async function getSearchBooksAPI() {
  const response = await fetch(endPointAPI)
  books = await response.json()
  let discountBooks = applyDiscount(books)
  displayBooksOnScreen(discountBooks)
}