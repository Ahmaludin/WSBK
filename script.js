// MENU LIST
const menuBtn = document.querySelector('.nav3 .menu');
const menuList = document.querySelector('.menuList');
menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('bgMenuChanger');
  menuBtn.firstElementChild.classList.toggle('fa-xmark');
  menuList.classList.toggle('displayMenuList');
});
