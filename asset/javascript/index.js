const header = document.querySelector("#header");
const planToggle = document.querySelector(".plan__togglebtn");
const planMonth = document.querySelector(".plan__togglebtn .plan__month");
const planYear = document.querySelector(".plan__togglebtn .plan__year");
const priceBasic = $(".price__basic");
const priceStandart = $(".price__standart");
const pricePremium = $(".price__premium");
const priceTime = document.querySelectorAll(".plan__price span:nth-child(2)");
const scrollBtnTop = document.querySelector(".scroll__top");
// Header change onScroll
const headerConfig = () => {
  if (document.documentElement.scrollTop >= 130) {
    header.classList.add("scroll200");
  } else {
    header.classList.remove("scroll200");
  }
};
headerConfig();
const scrollConfig = () => {
  if (document.documentElement.scrollTop >= 600) {
    scrollBtnTop.style.visibility = "visible";
  } else {
    scrollBtnTop.style.visibility = "hidden";
  }
};
scrollConfig;
window.onscroll = function () {
  headerConfig();
  scrollConfig();
};
// plan year or month
planMonth.onclick = function () {
  if (planToggle.classList.contains("month") == false) {
    planToggle.classList.add("month");
    planToggle.classList.remove("year");
    planMonth.classList.add("cl-black");
    planYear.classList.remove("cl-black");
    priceBasic[0].innerText = "$49";
    priceStandart[0].innerText = "$99";
    pricePremium[0].innerText = "$199";
    priceTime.innerText = "Month";
    for (let i = 0; i < priceTime.length; i++) {
      priceTime[i].innerText = "/Month";
    }
  }
};
planYear.onclick = function () {
  if (planToggle.classList.contains("year") == false) {
    planToggle.classList.add("year");
    planToggle.classList.remove("month");
    planYear.classList.add("cl-black");
    planMonth.classList.remove("cl-black");
    priceBasic[0].innerText = "$449";
    priceStandart[0].innerText = "$1099";
    pricePremium[0].innerText = "$1249";
    priceTime.innerText = "Year";
    for (let i = 0; i < priceTime.length; i++) {
      priceTime[i].innerText = "/Year";
    }
  }
};
