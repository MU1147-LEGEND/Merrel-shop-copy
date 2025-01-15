function slider() {
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  const cards = document.querySelectorAll(".cards");
  let counter = 0;
  let totalWidth = cards.length * (cards[0].offsetWidth + 30);
  let endWidth = -(4 * (cards[0].offsetWidth + 30)) + totalWidth;
  leftArrow.style.display = "none";

  rightArrow.addEventListener("click", () => {
    leftArrow.style.display = "unset";
    counter += cards[0].offsetWidth + 30;
    if (counter === endWidth) {
      rightArrow.style.display = "none";
    }
    cards.forEach((card) => {
      if (counter <= endWidth) {
        card.style.transform = `translateX(${-counter}px)`;
      }
    });
  });

  leftArrow.addEventListener("click", () => {
    rightArrow.style.display = "unset";
    if (counter >= 320) {
      counter = counter - 320;
      if (counter === 0) {
        leftArrow.style.display = "none";
      }
      cards.forEach((card) => {
        card.style.transform = `translateX(${-counter}px)`;
      });
    }
  });
}
slider();

function cartUpdate() {
  const carts = document.querySelectorAll(".add-to-cart");

  carts.forEach((cart) => {
    cart.addEventListener("click", () => {
      if (!(cart.innerHTML === "Cart Added" || cart.innerHTML === "Checkout")) {
        cart.innerHTML = "Adding <span class='cart-adding'></span>";
        setTimeout(function () {
          cart.innerHTML = "Cart Added";
        }, 2000);
      } else if (cart.innerHTML === "Cart Added") {
        alert("The Product is already added to cart, Please go to Checkout");
        cart.innerHTML = "Checkout";
      }
      if (cart.innerHTML === "Checkout") {
        console.log("check");
      }
    });
  });
}
cartUpdate();

function devs() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });

  let prev = document.querySelector(".prev");
  let next = document.querySelector(".next");

  let counter = 0;
  let carousel = () => {
    slides.forEach((slide, index) => {
      if (counter === slides.length || counter < 0) {
        counter = 0;
      }
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
  };
  next.addEventListener("click", () => {
    counter++;
    carousel();
  });

  prev.addEventListener("click", () => {
    counter--;
    carousel();
  });
}
devs();

// Toggle menu functionality
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".navbar nav");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");
});