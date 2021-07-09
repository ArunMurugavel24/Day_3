function imgSlider(anything) {
  document.querySelector('.pepsi').src = anything;
}

function changeBgColor(color) {
  const sec = document.querySelector('.sec');
  sec.style.background = color;
}

function toggleMenu() {
  var menuToggle = document.querySelector('.toggle');
  var navigation = document.querySelector('.navigation');
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}
