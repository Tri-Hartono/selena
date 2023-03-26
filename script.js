var burgerbar = document.querySelector('.burger-bar');
var ListAndroid = document.querySelector('.list-android');
var nav = document.querySelector('nav');
var buka = false;

burgerbar.addEventListener('click', function () {
  buka = !buka;
  if (buka) {
    nav.style.backgroundColor = '#f6f6f6';
    nav.style.color = '#313131';
    ListAndroid.style.display = 'block';
  } else {
    nav.style.backgroundColor = 'transparent';
    nav.style.color = 'whitesmoke';
    ListAndroid.style.display = 'none';
  }
});

document.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    nav.style.backgroundColor = '#f6f6f6';
    nav.style.color = '#313131';
  } else {
    nav.classList.remove('Navbar-scroll');
  }
});
