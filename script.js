$('.owl-carousel').owlCarousel({
  items:2,
  lazyLoad:true,
  loop:true,
  margin:20
})

function navToggle() {
  var navToggleNav = document.getElementById("nav");
  navToggleNav.classList.toggle("_active");
  var html = document.getElementById("html");
  html.classList.toggle("_overflow");
  var body = document.getElementById("body");
  body.classList.toggle("_overflow");
}

function toggleItem(id) {
  var item = document.getElementById(id);
  item.classList.toggle("_active");
}

