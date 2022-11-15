// NAVIGATION 1

const login = document.querySelector(".nav1 .langAndSignUp .btn");
login.addEventListener("click", () => alert(`Gabisa ngab, ini web fake!!!`));

// NAVIGATION 3 MENU LIST
const menuBtn = document.querySelector(".nav3 .menu");
const menuList = document.querySelector(".menuList");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("bgMenuChanger");
  menuBtn.firstElementChild.classList.toggle("fa-xmark");
  menuList.classList.toggle("displayMenuList");
});

// -------------------- ARTICLES

const articles = document.querySelector(".articles");

// Articles click event
articles.addEventListener("click", function (e) {
  // articleTCN is Article Target Class Name
  const articleTCN = e.target.className;

  // Sistem perubahan warna menu pada info
  function previousMenu() {
    if (
      e.target.previousElementSibling.className.includes("infoMenuSelected")
    ) {
      e.target.previousElementSibling.classList.toggle("infoMenuSelected");
    }
    if (e.target.previousElementSibling.className.includes("menuBgGreen")) {
      e.target.previousElementSibling.classList.toggle("menuBgGreen");
    }
  }
  function previousPreviousMenu() {
    if (
      e.target.previousElementSibling.previousElementSibling.className.includes(
        "infoMenuSelected"
      )
    ) {
      e.target.previousElementSibling.previousElementSibling.classList.toggle(
        "infoMenuSelected"
      );
    }
  }
  function nextMenu() {
    if (e.target.nextElementSibling.className.includes("infoMenuSelected")) {
      e.target.nextElementSibling.classList.toggle("infoMenuSelected");
    }
    if (e.target.nextElementSibling.className.includes("menuBgGreen")) {
      e.target.nextElementSibling.classList.toggle("menuBgGreen");
    }
    if (e.target.nextElementSibling.className.includes("menuBgPurple")) {
      e.target.nextElementSibling.classList.toggle("menuBgPurple");
    }
  }
  function nextNextMenu() {
    if (
      e.target.nextElementSibling.nextElementSibling.className.includes(
        "infoMenuSelected"
      )
    ) {
      e.target.nextElementSibling.nextElementSibling.classList.toggle(
        "infoMenuSelected"
      );
    }
    if (
      e.target.nextElementSibling.nextElementSibling.className.includes(
        "menuBgPurple"
      )
    ) {
      e.target.nextElementSibling.nextElementSibling.classList.toggle(
        "menuBgPurple"
      );
    }
  }

  if (articleTCN == "ssp") {
    e.target.classList.toggle("infoMenuSelected");
    e.target.classList.toggle("menuBgGreen");
    previousMenu();
    nextMenu();
  } else if (articleTCN == "ssp300") {
    e.target.classList.toggle("infoMenuSelected");
    e.target.classList.toggle("menuBgPurple");
    previousMenu();
    previousPreviousMenu();
  } else if (articleTCN == "sbk") {
    e.target.classList.toggle("infoMenuSelected");
    nextMenu();
    nextNextMenu();
  }
  // End of - sistem perubahan warna menu pada info
});
// End of - Articles click event

// ---------- Info content
const standings = document.querySelector(".standings");
const superpole = document.querySelector(".superpole");
const bestLap = document.querySelector(".bestLap");

// test area
const riderPoleLi = Array.from(
  document.querySelectorAll(".standings .riderPole ol li")
);

let hallo = "";
for (let i = 0; i < riderPoleLi; i++) {
  hallo += riderPoleLi[i].innerText(" REA\nKAWASAKI\n723");
}

// riderPoleLi.forEach(function (e, i) {
//   e.innerHTML("hallo");
// });

console.log(riderPoleLi);
console.log(hallo);
//

// Info click event
// standings
standings.addEventListener("click", function (e) {
  // iTCN is Info Target Class Name
  const iTCN = e.target.className;

  const riderPoleLi = document.querySelectorAll(".standings .riderPole ol li");
  const riderName = document.querySelector(".standings .riderPole .riderName");
  const riderTeam = document.querySelector(".standings .riderPole .riderTeam");
  const riderPoint = document.querySelector(
    ".standings .riderPole .riderPoint"
  );
  const riderCountry = document.querySelector(".standings .riderPole");

  if (iTCN == "sbk") {
  } else if (iTCN == "ssp") {
  } else if (iTCN == "ssp300") {
  }
});
// superpole
// bestlap
// End of - Info click event

// Sistem perubahan rider pole pada info
// End of - Sistem perubahan rider pole pada info

standings.addEventListener("click", function (e) {});
// ---------- End of - Info content

// -------------------- End of - ARTICLES
