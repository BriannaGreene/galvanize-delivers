$(document).ready(function() {

  $(window).scroll(function () {
    console.log($(window).scrollTop());

    if ($(window).scrollTop() > 150) {
      $('#topnav').addClass('mainnav');
    }
    if ($(window).scrollTop() < 151) {
      $('#topnav').removeClass('mainnav');
    }
  });






  let cart = []

    // add to cart
    $('.card .btn').click((event) => {
      event.preventDefault()
      console.log("you clicked", event.target)
      let card = $(event.target).parent()
      let price = card.find('.price').text()
      let title = card.find('.card-title').text()

      console.log('price is', price)
      console.log('title is', title)

      addToCart({price, title})
    })

    // remove from cart
    $('#orders').click('.remove', (event) => {
      let title = $(event.target).data("title")
      console.log("title in remove", title)
      removeFromCart(title)
    })

    function removeFromCart(title) {
      let existingItem = findInCart(title)
      if (existingItem && existingItem.quantity > 0) {
        existingItem.quantity--
      }

      renderCart()
    }

    function addToCart(item){
      // check if in cart, if so update
      let existingItem = findInCart(item.title)

      if (existingItem){
        console.log("item exists", existingItem)
        existingItem.quantity++
      }
      else {
        // else add to cart with qty of 1
        item.quantity = 1
        cart.push(item)
      }

      console.log('cart', cart)

      renderCart()
    }

    function findInCart(title){
      let existingItem = null
      for (var i = 0; i < cart.length; i++) {
        if (cart[i].title === title) {
          existingItem = cart[i]
        }
      }
      return existingItem
    }

    function renderCart() {
      // find table
      let tbody = $('#orders tbody')

      // clear out all order data
      tbody.children().remove()

      // re-render tbody
      let subtotal = 0
      for (item of cart) {
        let price = parsePrice(item.price)

        if (item.quantity > 0 ) {
          tbody.append(`<tr>
            <td>${item.title}</td>
            <td>${item.quantity}</td>
            <td>${formatPrice(price)}</td>
            <td><a class="btn btn-primary remove-item" data-title="${item.title}">Remove</a></td>
          </tr>`)
        }
        subtotal += price * +(item.quantity)
      }

      // do calculate
      console.log("subtotal", subtotal)
      $('#subtotal').text(formatPrice(subtotal))
    }

    function parsePrice(price) {
      return parseFloat(price.replace(/\$/, ''))
    }

    function formatPrice(price) {
      console.log("formatPrice price is", price)
      return '$' + price.toFixed(2)
    }




  // $('.carousel').carousel()
});



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

    let subtotalText = document.querySelector('.subtotal-price')
    subtotalText.innerText = subtotalDisplay

    let findText = document.querySelector('.subtotal-price').innerText
    let taxText = Number(findText.replace(/\$/gi, '')) * 0.09
    document.querySelector('.tax-price').innerText = `$${taxText.toFixed(2)}`

    let total = Number(subtotalDisplay.replace(/\$/gi, '')) + taxText
    let totalText = document.querySelector('.price').innerText = `$${total.toFixed(2)}`
  })
}


// PART 3
// on submit button click, alert either:
// success or validation message if there are no menu items added.



// GET CAROUSEL WORKING
// reference bootstrap
