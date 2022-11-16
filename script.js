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

  // ---------- Info content

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

  // sistem perubahan rider pole
  function addRider(flag, riderName, riderTeam, riderPoint) {
    return `<span class="riderName"><span class="fi fi-${flag}"></span> ${riderName}</span>
    <span class="riderTeam">${riderTeam}</span>
    <span class="riderPoint">${riderPoint}</span>`;
  }

  // standings
  const standingsRPL = Array.from(
    document.querySelectorAll(".standings .riderPoleList")
  );
  const standingsCN =
    e.target.parentElement.parentElement.parentElement.className;

  // standings ssp
  if (articleTCN == "ssp" && standingsCN == "standings info") {
    standingsRPL[0].innerHTML = addRider(
      "ch",
      "DOMINIQUE AEGERTER",
      "yamaha",
      "462"
    );
    standingsRPL[1].innerHTML = addRider(
      "it",
      "LORENZO BALDASSARRI",
      "yamaha",
      "359"
    );
    standingsRPL[2].innerHTML = addRider("tr", "CAN ONCU", "kawasaki", "248");
    standingsRPL[3].innerHTML = addRider(
      "it",
      "NICOLO BULEGA",
      "ducati",
      "210"
    );
    standingsRPL[4].innerHTML = addRider(
      "it",
      "STEFANO MANZI",
      "triumph",
      "207"
    );
    standingsRPL[5].innerHTML = addRider(
      "it",
      "FEDERICO CARICASULO",
      "ducati",
      "191"
    );
  }
  // standings ssp300
  else if (articleTCN == "ssp300" && standingsCN == "standings info") {
    standingsRPL[0].innerHTML = addRider("es", "ALVARO DIAZ", "yamaha", "259");
    standingsRPL[1].innerHTML = addRider(
      "nl",
      "VICTOR STEEMAN",
      "kawasaki",
      "180"
    );
    standingsRPL[2].innerHTML = addRider(
      "fr",
      "HUGO DE CANCELLIS",
      "kawasaki",
      "171"
    );
    standingsRPL[3].innerHTML = addRider("es", "MARC GARCIA", "yamaha", "164");
    standingsRPL[4].innerHTML = addRider(
      "fr",
      "SAMUEL DI SORA",
      "kawasaki",
      "146"
    );
    standingsRPL[5].innerHTML = addRider("it", "MIRKO GENNAI", "yamaha", "140");
  }
  // standings sbk
  else if (articleTCN == "sbk" && standingsCN == "standings info") {
    standingsRPL[0].innerHTML = addRider(
      "es",
      "ALVARO BAUTISTA",
      "DUCATI",
      "553"
    );
    standingsRPL[1].innerHTML = addRider(
      "tr",
      "TOPRAK RAZGATLIOGLU",
      "yamaha",
      "487"
    );
    standingsRPL[2].innerHTML = addRider(
      "gb",
      "JONATHAN REA",
      "kawasaki",
      "450"
    );
    standingsRPL[3].innerHTML = addRider(
      "it",
      "MICHAEL RUBEN RINALDI",
      "ducati",
      "279"
    );
    standingsRPL[4].innerHTML = addRider(
      "it",
      "ANDREA LOCATELLI",
      "yamaha",
      "245"
    );
    standingsRPL[5].innerHTML = addRider("gb", "ALEX LOWES", "kawasaki", "234");
  }

  // superpole
  // bestlap
  // End of - sistem perubahan rider pole

  // ---------- End of - Info content
});
// End of - Articles click event

// -------------------- End of - ARTICLES
