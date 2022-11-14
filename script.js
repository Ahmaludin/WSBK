// MENU LIST
const menuBtn = document.querySelector('.nav3 .menu');
const menuList = document.querySelector('.menuList');
menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('bgMenuChanger');
  menuBtn.firstElementChild.classList.toggle('fa-xmark');
  menuList.classList.toggle('displayMenuList');
});

// ARTICLE INFO

const articles = document.querySelector('.articles');
const standings = document.querySelector('.standings');
const superpole = document.querySelector('.superpole');
const bestLap = document.querySelector('.bestLap');

articles.addEventListener('click', function (e) {
  function previousMenu() {
    if (e.target.previousElementSibling.className.includes('infoMenuSelected')) {
      e.target.previousElementSibling.classList.toggle('infoMenuSelected');
    }
    if (e.target.previousElementSibling.className.includes('menuBgGreen')) {
      e.target.previousElementSibling.classList.toggle('menuBgGreen');
    }
  }
  function previousPreviousMenu() {
    if (e.target.previousElementSibling.previousElementSibling.className.includes('infoMenuSelected')) {
      e.target.previousElementSibling.previousElementSibling.classList.toggle('infoMenuSelected');
    }
  }
  function nextMenu() {
    if (e.target.nextElementSibling.className.includes('infoMenuSelected')) {
      e.target.nextElementSibling.classList.toggle('infoMenuSelected');
    }
    if (e.target.nextElementSibling.className.includes('menuBgGreen')) {
      e.target.nextElementSibling.classList.toggle('menuBgGreen');
    }
    if (e.target.nextElementSibling.className.includes('menuBgPurple')) {
      e.target.nextElementSibling.classList.toggle('menuBgPurple');
    }
  }
  function nextNextMenu() {
    if (e.target.nextElementSibling.nextElementSibling.className.includes('infoMenuSelected')) {
      e.target.nextElementSibling.nextElementSibling.classList.toggle('infoMenuSelected');
    }
    if (e.target.nextElementSibling.nextElementSibling.className.includes('menuBgPurple')) {
      e.target.nextElementSibling.nextElementSibling.classList.toggle('menuBgPurple');
    }
  }

  const eInfoMenu = e.target.className;

  if (eInfoMenu == 'ssp') {
    e.target.classList.toggle('infoMenuSelected');
    e.target.classList.toggle('menuBgGreen');
    previousMenu();
    nextMenu();
  } else if (eInfoMenu == 'ssp300') {
    e.target.classList.toggle('infoMenuSelected');
    e.target.classList.toggle('menuBgPurple');
    previousMenu();
    previousPreviousMenu();
  } else if (eInfoMenu == 'sbk') {
    e.target.classList.toggle('infoMenuSelected');
    nextMenu();
    nextNextMenu();
  }

  const eInfo = e.target.parentElement.parentElement.parentElement.className;

  // Standings
  if (eInfoMenu == 'sbk' && eInfo.includes('standings')) {
    console.log('sbk in standings');
  } else if (eInfoMenu == 'ssp' && eInfo.includes('standings')) {
    console.log('spp in standings');
  } else if (eInfoMenu == 'ssp300' && eInfo.includes('standings')) {
    console.log('spp300 in standings');
  }
  // Superpole
  else if (eInfoMenu == 'sbk' && eInfo.includes('superpole')) {
    console.log('sbk in superpole');
  } else if (eInfoMenu == 'ssp' && eInfo.includes('superpole')) {
    console.log('spp in superpole');
  } else if (eInfoMenu == 'ssp300' && eInfo.includes('superpole')) {
    console.log('spp300 in superpole');
  }
  // BestLap
  else if (eInfoMenu == 'sbk' && eInfo.includes('bestLap')) {
    console.log('sbk in bestLap');
  } else if (eInfoMenu == 'ssp' && eInfo.includes('bestLap')) {
    console.log('spp in bestLap');
  } else if (eInfoMenu == 'ssp300' && eInfo.includes('bestLap')) {
    console.log('spp300 in bestLap');
  }
});
