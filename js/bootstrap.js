console.log("bootstrap.js linked")
//  GET ORDER FUNCTION WORKING
// PART 1
// on click grab card title and grab card price
// add each to same li in sidebar

function buttonClickAdd() {
  let cardContainer = document.querySelector('.card-container')
  cardContainer.addEventListener('click', function() {
    let cardInfo = event.target.parentNode

    let itemTitle = cardInfo.firstChild.nextSibling.innerText
    let itemPrice = cardInfo.firstChild.nextSibling.nextElementSibling.innerText

    let leftspan = document.createElement('span')
    leftspan.className = 'orderbox-left'
    leftspan.innerHTML = itemTitle

    let rightspan = document.createElement('span')
    rightspan.className = 'orderbox-right'
    rightspan.innerHTML = itemPrice

    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.appendChild(leftspan)
    li.appendChild(rightspan)

    let ul = document.querySelector('.list-group')
    ul.appendChild(li)

  })
}
//Part 1 working!!! Woooo!!!


// PART 2
// automatically add up all prices to equal subtotal
// apply tax and add up total




function total() {
  let cardContainer = document.querySelector('.card-container')
  cardContainer.addEventListener('click', function() {
    let ul = document.querySelector('.list-group')
    let liArray = ul.querySelectorAll('li.list-group-item > span.orderbox-right')
    let price = 0
    let sum = 0
    let subtotalDisplay = ''

    for (var i = 0; i < liArray.length; i++) {
      let number = liArray[i].innerHTML
      let price = Number(number.replace(/\$/gi, ''))
      sum += price
      subtotalDisplay = `$${sum.toFixed(2)}`
    }

    let leftSpan = document.createElement('span')
    leftSpan.className = 'orderbox-price'
    leftSpan.innerText = 'Subtotal'

    let rightSpan = document.createElement('span')
    rightSpan.className = 'subtotal-price'
    rightSpan.innerHTML = subtotalDisplay

    let li = document.createElement('li')
    li.className = 'subtotal-style'
    li.appendChild(leftSpan)
    li.appendChild(rightSpan)

    let ulPrice = document.querySelector('.price-list')
    ulPrice.removeChild(ulPrice.firstChild)
    console.log(ulPrice)
    ulPrice.appendChild(li)

  })
}




// function total() {
//   let ul = document.querySelector('.list-group')
//   let liArray = ul.querySelectorAll('li.list-group-item > span.orderbox-right')
//   let price = 0
//   let sum = 0
//   let subtotalDisplay = ''
//
//   for (var i = 0; i < liArray.length; i++) {
//     let number = liArray[i].innerHTML
//     let price = Number(number.replace(/\$/gi, ''))
//     sum += price
//     subtotalDisplay = `$${sum.toFixed(2)}`
//   }
//
//   let leftSpan = document.createElement('span')
//   leftSpan.className = 'orderbox-price'
//   leftSpan.innerText = 'Subtotal'
//
//   let rightSpan = document.createElement('span')
//   rightSpan.className = 'subtotal-price'
//   rightSpan.innerHTML = subtotalDisplay
//
//   let li = document.createElement('li')
//   li.appendChild(leftSpan)
//   li.appendChild(rightSpan)
//
//   let ul = document.querySelector('.list-group')
//   ul.appendChild(li)
//   console.log(subtotalDisplay)
//   console.log(ul)
// }



// PART 3
// on submit button click, alert either:
// success or validation message if there are no menu items added.



// GET CAROUSEL WORKING
// reference bootstrap
