// Load all pages in variables
const welcmPage = document.getElementById("welcm-page");
const homePage = document.getElementById("home-page");
const redCrescentPage = document.getElementById("rc-page");
const collegePage = document.getElementById("college-page");
const menubar = document.getElementById("menubar");
const menuPage = document.getElementById("menu-page");
const appInfoPage = document.getElementById("app-info-page");

// show logo onload
window.onload = function() {
  welcmPage.style.left = "0";
  setTimeout(function() {
    welcmPage.style.left = "-100%";
    homePage.style.left = "0";
  }, 1500);
}

// all function onclick
function showRedCrescentPage() {
  homePage.style.left = "-100%";
  redCrescentPage.style.left = "0";
}

function showCollegePage() {
  homePage.style.left = "-100%";
  collegePage.style.left = "0";
}

function menuHandler() {
  if (menubar.className === "menubar") {
    menubar.className = "menubar close-menu";
    menuPage.style.left = "0";
  } else {
    menubar.className = "menubar";
    menuPage.style.left = "-100%";
  }
}

function showAppInfoPage() {
  appInfoPage.style.left = "0";
}

function backFromAppInfo() {
  appInfoPage.style.left = "-100%";
}

function backToHome(pg) {
  if (pg === "rc-page") {
    redCrescentPage.style.left = "-100%";
  } else if (pg === "college-page") {
    collegePage.style.left = "-100%";
  }
  homePage.style.left="0";
}

function themeHandler (color) {
  let pages = document.querySelectorAll(".page");
  for (let page of pages) {
    page.style.backgroundColor = color;
  }
  if (color === "#FFFFFF") {
    document.body.style.color = "black";
  } else {
    document.body.style.color = "white";
  }
}

function langHandler(lang) {
  if (lang === "bn") {
    alert("multi-language feature has not  been implemented yet: please wait for future update");
  }
}