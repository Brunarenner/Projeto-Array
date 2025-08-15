

const list = document.querySelector('ul')
const buttonshowAll = document.querySelector('.show-All')
const buttonMapAll = document.querySelector('.map-All')
const sumAll = document.querySelector('.sum-All')
const filterAll = document.querySelector('.filter-All')


function formatCurrency(value) {
  const newvalue = value.toLocaleString('pt-br',{
      style: 'currency',
      currency: 'BRL' 
    })
  return newvalue
}

function showAll(productArray) {
  let myLi = ''
  productArray.forEach((product) => {
    myLi += `
    <li>
      <img src=${product.src}>
      <p>${product.name}</p>
      <p class="prace">R$ ${formatCurrency(product.price)}</p> 
    </li>
  `
  })
  list.innerHTML = myLi
}
function mapAllItems() {
  const newPrices = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9,

  }))
  showAll(newPrices)
}

function sumAllItems() {
  const totalValue = menuOptions.reduce((acc, cur) => acc + cur.price, 0)

  list.innerHTML = `
<li>
<p> o Valor dos itens são R$ ${formatCurrency(totalValue)}</p>
</li>
`

}

function filterAllItems() {
  const filterJustVegan = menuOptions.filter((product) => product.vegan)
  showAll(filterJustVegan)
}

buttonshowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
sumAll.addEventListener('click', sumAllItems)
filterAll.addEventListener('click', filterAllItems)