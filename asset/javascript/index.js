const header = document.querySelector("#header");
const headerConfig = () => {
  if (document.documentElement.scrollTop > 200) {
    header.classList.add("scroll200");
  } else {
    header.classList.remove("scroll200");
  }
};

headerConfig();
window.onscroll = function () {
  headerConfig();
  bannerAnimated();
  console.log(document.documentElement.scrollTop);
};

const bannerChildren = document.querySelectorAll("#banner .container>div>*");

bannerAnimated = () => {
  if (
    document.documentElement.scrollTop >= 0 &&
    document.documentElement.scrollTop <= 410
  ) {
    for (let i = 0; i < bannerChildren.length; i++) {
      bannerChildren[i].classList.add("visible", "animate__fadeInUp");
    }
  }
};
bannerAnimated();
