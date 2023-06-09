
let itemId = 0
function addToCart(item){
    itemId++
    let container = document.querySelector('.container')
    container.classList.add('active')
    let cart = document.querySelector('.cart')
    cart.classList.add('active')
    // creating a div to add selected item to cart 
    let selectedItem = document.createElement('div')
    selectedItem.classList.add('cartItem') //assigning class 'cartImg' to the div
    selectedItem.setAttribute('id', itemId) //assigning id to the div

    let close = document.createElement('span')
    close.innerText = 'x'
    close.classList.add('close')

    // creating img element to add the selected item's image 
    let img = document.createElement('img')
    img.setAttribute('src', item.children[0].currentSrc)

    // creating a parent div for selected item's info
    let itemInfo = document.createElement('div')
    itemInfo.classList.add('itemInfo')
    // creating a div to add selected item's title 
    let title = document.createElement('h3')
    title.innerText = item.children[1].children[0].innerText
    
    // creating a parent div for selected item's info
    let variant = document.createElement('div')
    variant.classList.add('variant')
    // creating a div to add selected item's variant label i.e. color in this example 
    let label = document.createElement('div')
    label.innerText = item.children[1].children[1].children[0].innerText
    
    // creating a span element to add selected item's variant i.e. color (red or black etc) in this example 
    let select = document.createElement('span')
    select.innerText = item.children[1].children[1].children[1].value
    select.style.color = item.children[1].children[1].children[1].value
    
    // appending all the created elements to the div created at the top
    variant.append(label,select)
    itemInfo.append(title,variant)
    selectedItem.append(img,itemInfo,close)
    
    let cartItems = document.getElementById('title')
    cartItems.append(selectedItem) // appending the div 'cartImg' to the 'cartItems'

    close.addEventListener('click', () => {
        selectedItem.remove()
        if(!cartItems.hasChildNodes()){
            cart.classList.remove('active')
            container.classList.remove('active')
        }
    })
    
}
