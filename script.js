// *** Reduce Opacity Variable ***

const reduceOpacity = document.getElementById("reduce-opacity")

// *** Mobile Navigation Main Menu Variables ***

const openMainMenu_btn = document.getElementById("open-main-menu-btn")
const closeMainMenu_btn = document.getElementById("close-main-menu-btn")
const mainMenu = document.getElementById("main-menu")

// ## Main Menu Opening Logic ## 

openMainMenu_btn.addEventListener("click", () => {
  mainMenu.classList.remove("navigation_main-menu--inactive")
  reduceOpacity.classList.remove("reduce-opacity--inactive")
  openMainMenu_btn.setAttribute("Aria-expanded","True")
})

// ## Main Menu Closing Logic ## 

closeMainMenu_btn.addEventListener("click", () => {
  mainMenu.classList.add("navigation_main-menu--inactive")
  reduceOpacity.classList.add("reduce-opacity--inactive")
  openMainMenu_btn.setAttribute("Aria-expanded","False")
})

// *** Cart Variables ***

const cartNumber = document.getElementById("cart-number")
const cartOpen_btn = document.getElementById("cart-open-btn")

const cart = document.getElementById("cart")
const cartEmpty = document.getElementById("cart-empty")
const cartFilled = document.getElementById("cart-filled")

const cartItemImage = document.getElementById("cart-item-image")
const cartItemsName = document.getElementById("cart-items-name")
const cartItemsPrice = document.getElementById("cart-items-price")
const cartTotalPrice = document.getElementById("cart-total-price")
const cartItemsRemove_btn = document.getElementById("cart-items-remove")

const addToCart_btn = document.getElementById("add-to-cart")

// ** Cart Quantity Variables **

let totalQuantity = 0
let selectedQuantity = 0
let cartAttribute = 0

// ### Cart Logic ###

// ## Cart Opening, Closing, filled and empty Logic  ## 

cartOpen_btn.addEventListener("click", () => {
  cartAttribute += 1
  cartAttribute % 2 !== 0 ? cartOpen_btn.setAttribute("Aria-expanded","True") : cartOpen_btn.setAttribute("Aria-expanded","False")
  cartOpen_btn.classList.toggle("navigation_open-cart--active")
  cart.classList.toggle("cart--inactive")
  if (totalQuantity <= 0) {
    cartEmpty.classList.remove("cart_empty--inactive")
    cartFilled.classList.add("cart_filled--inactive")
  }
  else {
    cartEmpty.classList.add("cart_empty--inactive")
    cartFilled.classList.remove("cart_filled--inactive")
  }
})

// *** Cart Quantity Variables *** 

const addQuantity_btn = document.getElementById("add-quantity-btn")
const removeQuantity_btn = document.getElementById("remove-quantity-btn")
const displaySelectedQuantity = document.getElementById("display-selected-quantity")

// ## Cart Add Quantity Logic ##

function addQuantity() {
  selectedQuantity += 1
  displaySelectedQuantity.innerText = selectedQuantity
}

addQuantity_btn.addEventListener("click", addQuantity)
addQuantity_btn.addEventListener("keydown", (e) => {
  if (e.key === "+") {
    addQuantity()
  }
})

// ## Cart Remove Quantity Logic ##

function removeQuantity() {
  selectedQuantity <= 0 ? selectedQuantity = 0 : selectedQuantity -= 1
  displaySelectedQuantity.innerText = selectedQuantity
}

removeQuantity_btn.addEventListener("click", removeQuantity)
removeQuantity_btn.addEventListener("keydown", (e) => {
  if (e.key === "-") {
    removeQuantity()
  }
})

// *** product thumbnail image, name , price variables ***

const thumbnailImageOne = document.getElementById("thumbnail-image-1")
const productName = document.getElementById("product-name")
const discountedPrice = document.getElementById("discounted-price")

// ## Add to Cart Logic #
const price = parseInt((discountedPrice.innerText).slice(1))

addToCart_btn.addEventListener("click", () => {
  totalQuantity = selectedQuantity
  const totalPrice = price * totalQuantity
  
  cartItemsPrice.innerHTML = ""
  cartTotalPrice.innerText = ""
  
  if (totalQuantity <= 0) {
    cartNumber.classList.add("navigation_cart-number--inactive")
    cartEmpty.classList.remove("cart_empty--inactive")
    cartFilled.classList.add("cart_filled--inactive")
  }
  else {
    cartNumber.classList.remove("navigation_cart-number--inactive")
    cartEmpty.classList.add("cart_empty--inactive")
    cartFilled.classList.remove("cart_filled--inactive")
    cartNumber.innerText = totalQuantity
    cartItemImage.src = thumbnailImageOne.src
    cartItemImage.alt = thumbnailImageOne.alt
    cartItemsName.innerText = productName.innerText
    cartItemsPrice.innerText = `$${price.toFixed(2)} x ${totalQuantity}`
    cartTotalPrice.innerText = `$${totalPrice.toFixed(2)}`
  }
})

// ## Cart Items Remove button Logic ##

cartItemsRemove_btn.addEventListener("click", () => {
  totalQuantity = 0
  selectedQuantity = 0
  displaySelectedQuantity.innerText = 0
  cartNumber.classList.add("navigation_cart-number--inactive")
  cartFilled.classList.add("cart_filled--inactive")
  cartEmpty.classList.remove("cart_empty--inactive")
})

// *** Image Variables *** 

const productMainImage = document.getElementById("product-main-image")
const productThumbnailImages = Array.from(document.getElementsByClassName("product_thumbnail-image"))
const productThumbnail_btns = Array.from(document.getElementsByClassName("product_thumbnail-btn"))

const productPreviousImage_btn = document.getElementById("product-previous-image-btn")
const productNextImage_btn = document.getElementById("product-next-image-btn")

const images = {
  1: "./images/image-product-1.jpg",
  2: "./images/image-product-2.jpg",
  3: "./images/image-product-3.jpg",
  4: "./images/image-product-4.jpg"
}

// ** image number variables **//

let imageNumber = 1

// ### Previous button Logic ###

function previousImage() {
  imageNumber <= 1 ? imageNumber = 4 : imageNumber -= 1
  productMainImage.src = images[imageNumber]
}

productPreviousImage_btn.addEventListener("click", previousImage)
productPreviousImage_btn.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft")
    previousImage()
})

// ### Next button logic ###

function nextImage() {
  imageNumber >= 4 ? imageNumber = 1 : imageNumber += 1
  productMainImage.src = images[imageNumber]
}

productNextImage_btn.addEventListener("click", nextImage)
productNextImage_btn.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight")
    nextImage()
})

// ** Thumbnail image no , button no etc.. **

let thumbnailNumber = 1

// ## product thumbnail inactive  ##

function productThumbnailInactive() {
  productThumbnail_btns.forEach((btn) => {
    btn.classList.remove("product_thumbnail-btn--active")
  })
  productThumbnailImages.forEach((img) => {
    img.classList.remove("product_thumbnail-image--active")
  })
}

// ## product thumbnail image buttons logic ##

productThumbnailImages.forEach((thumbnailImage) => {
  thumbnailImage.addEventListener("click",(e) => {
    const thumbnail_Btn = e.target.closest("button")
    thumbnailNumber = thumbnail_Btn.value
    productThumbnailInactive()
    productMainImage.src = images[thumbnailNumber]
    thumbnail_Btn.classList.add("product_thumbnail-btn--active")
    e.target.classList.add("product_thumbnail-image--active")
  })
})

// *** Lightbox images Variables *** ##

const lightBox = document.getElementById("lightbox")
const lightBoxMainImage = document.getElementById("lightbox-main-image")

const lightBoxNextImage_btn = document.getElementById("lightbox-next-image-btn")
const lightBoxPreviousImage_btn = document.getElementById("lightbox-previous-image-btn")
const lightBoxClose_btn = document.getElementById("lightbox-close-btn")

const lightBoxThumbnail_btns = Array.from(document.getElementsByClassName("lightbox_thumbnail-btn"))
const lightBoxThumbnailImages = Array.from(document.getElementsByClassName("lightbox_thumbnail-image"))

// ## lightbox style function ##

function lightboxActiveRemove() {
  lightBoxThumbnail_btns.forEach((btn) => {
    btn.classList.remove("lightbox_thumbnail-btn--active")
  })
  lightBoxThumbnailImages.forEach((img) => {
    img.classList.remove("lightbox_thumbnail-image--active")
  })
}

function lightboxActive() {
  lightBoxThumbnail_btns[lightBoxImageNumber - 1].classList.add("lightbox_thumbnail-btn--active")
  lightBoxThumbnailImages[lightBoxImageNumber - 1].classList.add("lightbox_thumbnail-image--active")
}

// ** screenWidth and lightbox image number variable  **

const screenWidth = window.innerWidth
let lightBoxImageNumber = 1

// ## Lightbox opening logic ##

productMainImage.addEventListener("click", () => {
  if (screenWidth >= 765) {
    const no = thumbnailNumber - 1
    lightboxActiveRemove()
    lightBoxThumbnailImages[no].classList.add("lightbox_thumbnail-image--active")
    lightBoxThumbnail_btns[no].classList.add("lightbox_thumbnail-btn--active")
    lightBoxMainImage.src = images[thumbnailNumber]
    lightBox.classList.remove("lightbox--inactive")
    reduceOpacity.classList.remove("reduce-opacity--inactive")
    
    lightBoxImageNumber = parseInt(thumbnailNumber)
    //console.log(thumbnailNumber)
  }
})

// ## Lightbox Next button logic ##

function lightBoxNextImage() {
  lightBoxImageNumber >= 4 ? lightBoxImageNumber = 1 : lightBoxImageNumber += 1
  lightBoxMainImage.src = images[lightBoxImageNumber]
  lightboxActiveRemove()
  lightboxActive()
}

lightBoxNextImage_btn.addEventListener("click", lightBoxNextImage)

lightBoxNextImage_btn.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight")
    lightBoxNextImage()
})

// ## Lightbox Previous button logic ##

function lightBoxPreviousImage() {
  lightBoxImageNumber <= 1 ? lightBoxImageNumber = 4 : lightBoxImageNumber -= 1
  lightBoxMainImage.src = images[lightBoxImageNumber]
  lightboxActiveRemove()
  lightboxActive()
}

lightBoxPreviousImage_btn.addEventListener("click", lightBoxPreviousImage)

lightBoxPreviousImage_btn.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft")
    lightBoxPreviousImage()
})

// ## Lightbox Thumbnails button logic ##

lightBoxThumbnailImages.forEach((thumbnailImg) => {
  thumbnailImg.addEventListener("click", (e) => {
    const lightBoxThumbnail_Btn = e.target.closest("button")
    lightBoxthumbnailNumber = lightBoxThumbnail_Btn.value
    lightboxActiveRemove()
    lightBoxMainImage.src = images[lightBoxthumbnailNumber]
    lightBoxThumbnail_Btn.classList.add("lightbox_thumbnail-btn--active")
    e.target.classList.add("lightbox_thumbnail-image--active")
    lightBoxImageNumber = parseInt(lightBoxthumbnailNumber)
  })
})

// ## Lightbox Close button logic ##

lightBoxClose_btn.addEventListener("click", () => {
  lightBox.classList.add("lightbox--inactive")
  reduceOpacity.classList.add("reduce-opacity--inactive")
  productMainImage.src = images[lightBoxImageNumber]
  productThumbnailInactive()
  productThumbnail_btns[lightBoxImageNumber - 1].classList.add("product_thumbnail-btn--active")
  productThumbnailImages[lightBoxImageNumber - 1].classList.add("product_thumbnail-image--active")
})
