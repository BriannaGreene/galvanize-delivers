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
// PART 3
// on submit button click, alert either:
// success or validation message if there are no menu items added.

function total() {
  // find sum .... ?
  // look at main ul
  // grab all li/span.orderbox-right.innerHTML
  // convert string to number, remove $
  // create array of all inner text?
  // loop and add each to sum?
  let ul = document.querySelector('.list-group')
  let liArray = ul.querySelectorAll('li.list-group-item > span.orderbox-right')
  console.log(liArray)
  let price = 0

  for (var i = 0; i < liArray.length; i++) {
    let number = liArray[i].innerHTML
    number.replace(/\$/gi, '')
    console.log(number)
  }


}




// GET CAROUSEL WORKING
// reference bootstrap
