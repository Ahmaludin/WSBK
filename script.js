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
  function addRider(flag, riderName, riderTeam) {
    return (
      riderPoint
    ) => `<span class="riderName"><span class="fi fi-${flag}"></span> ${riderName}</span>
    <span class="riderTeam">${riderTeam}</span>
    <span class="riderPoint">${riderPoint}</span>`;
  }

  // Rider list
  const dominiqueAegerter = addRider("ch", "DOMINIQUE AEGERTER", "yamaha");
  const lorenzoBaldassarri = addRider("it", "LORENZO BALDASSARRI", "yamaha");
  const canOncu = addRider("tr", "CAN ONCU", "kawasaki");
  const nicoloBulega = addRider("it", "NICOLO BULEGA", "ducati");
  const stefanoManzi = addRider("it", "STEFANO MANZI", "triumph");
  const federicoCaricasulo = addRider("it", "FEDERICO CARICASULO", "ducati");
  const alvaroDiaz = addRider("es", "ALVARO DIAZ", "yamaha");
  const victorSteeman = addRider("nl", "VICTOR STEEMAN", "kawasaki");
  const hugoDeCancellis = addRider("fr", "HUGO DE CANCELLIS", "kawasaki");
  const marcGarcia = addRider("es", "MARC GARCIA", "yamaha");
  const samuelDiSora = addRider("fr", "SAMUEL DI SORA", "kawasaki");
  const mirkoGennai = addRider("it", "MIRKO GENNAI", "yamaha");
  const alvaroBautista = addRider("es", "ALVARO BAUTISTA", "DUCATI");
  const toprakRazgatlioglu = addRider("tr", "TOPRAK RAZGATLIOGLU", "yamaha");
  const jonathanRea = addRider("gb", "JONATHAN REA", "kawasaki");
  const michaelRubenRinaldi = addRider("it", "MICHAEL RUBEN RINALDI", "ducati");
  const andreaLocatelli = addRider("it", "ANDREA LOCATELLI", "yamaha");
  const alexLowes = addRider("gb", "ALEX LOWES", "kawasaki");
  const inigoIglesias = addRider("es", "INIGO IGLESIAS", "kawasaki");
  const dirkGeiger = addRider("de", "DIRK GEIGER", "kawasaki");
  const kevinSabatucci = addRider("it", "KEVIN SABATUCCI", "kawasaki");
  const raffaeleDeRosa = addRider("it", "RAFFAELE DE ROSA", "ducati");
  const matteoVannucci = addRider("it", "MATTEO VANUCCI", "yamaha");
  // End of - Rider list

  // standings
  const standingsRPL = Array.from(
    document.querySelectorAll(".standings .riderPoleList")
  );
  const standingsCN =
    e.target.parentElement.parentElement.parentElement.className;

  // standings ssp
  if (articleTCN == "ssp" && standingsCN == "standings info") {
    standingsRPL[0].innerHTML = dominiqueAegerter(462);
    standingsRPL[1].innerHTML = lorenzoBaldassarri(359);
    standingsRPL[2].innerHTML = canOncu(248);
    standingsRPL[3].innerHTML = nicoloBulega(210);
    standingsRPL[4].innerHTML = stefanoManzi(207);
    standingsRPL[5].innerHTML = federicoCaricasulo(191);
  }
  // standings ssp300
  else if (articleTCN == "ssp300" && standingsCN == "standings info") {
    standingsRPL[0].innerHTML = alvaroDiaz(259);
    standingsRPL[1].innerHTML = victorSteeman(180);
    standingsRPL[2].innerHTML = hugoDeCancellis(171);
    standingsRPL[3].innerHTML = marcGarcia(164);
    standingsRPL[4].innerHTML = samuelDiSora(146);
    standingsRPL[5].innerHTML = mirkoGennai(140);
  }
  // standings sbk
  else if (articleTCN == "sbk" && standingsCN == "standings info") {
    standingsRPL[0].innerHTML = alvaroBautista(553);
    standingsRPL[1].innerHTML = toprakRazgatlioglu(487);
    standingsRPL[2].innerHTML = jonathanRea(450);
    standingsRPL[3].innerHTML = michaelRubenRinaldi(279);
    standingsRPL[4].innerHTML = andreaLocatelli(245);
    standingsRPL[5].innerHTML = alexLowes(234);
  }

  // superpole
  const superpoleRPL = Array.from(
    document.querySelectorAll(".superpole .riderPoleList")
  );
  const superpoleCN =
    e.target.parentElement.parentElement.parentElement.className;

  // superpole ssp
  if (articleTCN == "ssp" && superpoleCN == "superpole info") {
    superpoleRPL[0].innerHTML = dominiqueAegerter(111);
    superpoleRPL[1].innerHTML = federicoCaricasulo(74);
    superpoleRPL[2].innerHTML = lorenzoBaldassarri(70);
    superpoleRPL[3].innerHTML = nicoloBulega(65);
    superpoleRPL[4].innerHTML = canOncu(48);
  }
  // superpole ssp300
  else if (articleTCN == "ssp300" && superpoleCN == "superpole info") {
    superpoleRPL[0].innerHTML = victorSteeman(61);
    superpoleRPL[1].innerHTML = inigoIglesias(33);
    superpoleRPL[2].innerHTML = marcGarcia(32);
    superpoleRPL[3].innerHTML = dirkGeiger(31);
    superpoleRPL[4].innerHTML = kevinSabatucci(28);
  }
  // superpole sbk
  else if (articleTCN == "sbk" && superpoleCN == "superpole info") {
    superpoleRPL[0].innerHTML = toprakRazgatlioglu(217);
    superpoleRPL[1].innerHTML = jonathanRea(203);
    superpoleRPL[2].innerHTML = alvaroBautista(166);
    superpoleRPL[3].innerHTML = alexLowes(105);
    superpoleRPL[4].innerHTML = andreaLocatelli(76);
  }

  // bestlap
  const bestLapRPL = Array.from(
    document.querySelectorAll(".bestLap .riderPoleList")
  );
  const bestLapCN =
    e.target.parentElement.parentElement.parentElement.className;

  // bestLap ssp
  if (articleTCN == "ssp" && bestLapCN == "bestLap info") {
    bestLapRPL[0].innerHTML = dominiqueAegerter(12);
    bestLapRPL[1].innerHTML = lorenzoBaldassarri(4);
    bestLapRPL[2].innerHTML = raffaeleDeRosa(2);
  }
  // bestLap ssp300
  else if (articleTCN == "ssp300" && bestLapCN == "bestLap info") {
    bestLapRPL[0].innerHTML = samuelDiSora(3);
    bestLapRPL[1].innerHTML = victorSteeman(3);
    bestLapRPL[2].innerHTML = matteoVannucci(3);
  }
  // bestLap sbk
  else if (articleTCN == "sbk" && bestLapCN == "bestLap info") {
    bestLapRPL[0].innerHTML = toprakRazgatlioglu(8);
    bestLapRPL[1].innerHTML = alvaroBautista(8);
    bestLapRPL[2].innerHTML = jonathanRea(5);
  }
  // End of - sistem perubahan rider pole

  // ---------- End of - Info content
});
// End of - Articles click event

// -------------------- End of - ARTICLES

// let ahmaludin = {
//   flag: "id",
//   rider: this,
//   team: "kawasaki",
// };

// function addRider(rider, riderPoint) {
//   `<span class="riderName"><span class="fi fi-${rider.flag}"></span> ${rider.rider}</span>
//     <span class="riderTeam">${rider.team}</span>
//     <span class="riderPoint">${rider.point}</span>`;
// }

// console.log(addRider("ahmaludin", "10"));
//
// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`hi ${nama}, selamat ${waktu}`);
//   };
// }

// let pagi = ucapkanSalam("pagi");
// pagi("amal");

//

// const standingsRPL = document.querySelector(".standings .riderPoleList");

// function addRider(flag, riderName, riderTeam) {
//   return (
//     riderPoint
//   ) => `<span class="riderName"><span class="fi fi-${flag}"></span> ${riderName}</span>
//   <span class="riderTeam">${riderTeam}</span>
//   <span class="riderPoint">${riderPoint}</span>`;
// }

// let ahmaludin = addRider("id", "Ahmaludin", "kawasaki");
// // ahmaludin("10");

// standingsRPL.innerHTML = ahmaludin("10");
