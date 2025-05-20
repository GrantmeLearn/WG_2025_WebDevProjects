//  Thank God!
// add an event listener to change change background image, navbar, and footer color
//
let bgImage = getComputedStyle(document.querySelector("body")).backgroundImage;
let bgColor = getComputedStyle(document.querySelector("body")).backgroundColor;
let footer = document.querySelector(".footer");
let nav = document.querySelector(".navbar");
//
let bgImage1 = 'url("/images/zoltan-tasi-sJGvoX_eVhw-unsplash.jpg")';
let bgImage2 = 'url("/images/benjamin-voros-U-Kty6HxcQc-unsplash.jpg")';
let bgImage3 = 'url("/images/henrik-hansen-U4KIUpJFmcg-unsplash.jpg")';
let bgImage4 = 'url("/images/paul-earle-xJ2tjuUHD9M-unsplash.jpg")';
let bgColor1 = "#cfbaf0";
let bgColor2 = "#446A8E";
let bgColor3 = "#FCAE3F";
let bgColor4 = "#8AA5BA";
//
let newImageCounter = 0;
let newColorCounter = 0;
function themeChange() {
  const availbgImages = [bgImage1, bgImage2, bgImage3, bgImage4];
  const availbgColors = [bgColor1, bgColor2, bgColor3, bgColor4];

  newImageCounter++;
  newColorCounter++;
  let newImageIndex = newImageCounter % availbgImages.length;
  document.body.style.backgroundImage = availbgImages[newImageIndex];
  let newColorIndex = newColorCounter % availbgColors.length;
  footer.style.backgroundColor = availbgColors[newColorIndex];
  nav.style.backgroundColor = availbgColors[newColorIndex];
  //
  //   console.log(newImageIndex);
  //   console.log(bgImage);
  //   console.log(bgColor);
  //   console.log(footer);
  //   console.log(nav);
}
document
  .getElementById("changeTheme-btn")
  .addEventListener("click", themeChange);
//
//
//
// --------wg To-do -----------------
// const sectionMargin = document.querySelectorAll(".sectionlink");
// function setMarginTop() {
//   sectionMargin.style.marginTop = "70px";
//   console.log(sectionMargin);
// }
// sectionMargin.addEventListener("click", setMarginTop);
