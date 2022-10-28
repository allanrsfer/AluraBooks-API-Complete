let buttonOrderByPrice = document.querySelector('#btnOrdenarPorPreco')
buttonOrderByPrice.addEventListener('click', orderBrookForPrice)

function orderBrookForPrice() {
  let orderBooks = books.sort((a, b) => a.preco - b.preco)
  displayBooksOnScreen(orderBooks)
}