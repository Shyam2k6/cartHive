const homeIcon = document.querySelector(".homeIcon");
const cartIcon = document.querySelector(".cartIcon");
const section1 = document.querySelector(".section-1");
const section2 = document.querySelector(".section-2");
const home = document.querySelector(".home");
const cart = document.querySelector(".cart");
const app = document.querySelector(".app");
const addToCart = document.querySelector(".addToCart");
const addToCart1 = document.querySelector(".addToCart-1");
const addToCart2 = document.querySelector(".addToCart-2");
const addToCart3 = document.querySelector(".addToCart-3");
const addToCart4 = document.querySelector(".addToCart-4");
const product1 = document.querySelector(".card-1");
const product2 = document.querySelector(".card-2");
const product3 = document.querySelector(".card-3");
const product4 = document.querySelector(".card-4");

cart.classList.add("hidden");

//Home Icon Click Event
homeIcon.addEventListener("click", function () {
  homeIcon.classList.add("borderBottom");
  cartIcon.classList.remove("borderBottom");
  app.insertAdjacentElement("afterbegin", home);
  cart.classList.add("hidden");
});

//Cart Icon Click Event
cartIcon.addEventListener("click", function () {
  cartIcon.classList.add("borderBottom");
  homeIcon.classList.remove("borderBottom");
  cart.classList.remove("hidden");

  home.remove();
});

// Add to Cart Click Event
addToCart1.addEventListener("click", function () {
  cart.classList.add("hidden");
  document.querySelector(".cart-1").classList.remove("hidden");
});
addToCart2.addEventListener("click", function () {
  cart.classList.add("hidden");
  document.querySelector(".cart-2").classList.remove("hidden");
});
addToCart3.addEventListener("click", function () {
  cart.classList.add("hidden");
  document.querySelector(".cart-3").classList.remove("hidden");
});
addToCart4.addEventListener("click", function () {
  cart.classList.add("hidden");
  document.querySelector(".cart-4").classList.remove("hidden");
});

//Remove From Cart Click Event
document.querySelector(".remove-1").addEventListener("click", function () {
  document.querySelector(".cart-1").classList.add("hidden");
});
document.querySelector(".remove-2").addEventListener("click", function () {
  document.querySelector(".cart-2").classList.add("hidden");
});
document.querySelector(".remove-3").addEventListener("click", function () {
  document.querySelector(".cart-3").classList.add("hidden");
});
document.querySelector(".remove-4").addEventListener("click", function () {
  document.querySelector(".cart-4").classList.add("hidden");
});
