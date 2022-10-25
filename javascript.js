const buttons = document.querySelectorAll("button");
const images = document.querySelectorAll(".image");

let imageCounter = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id === "nextImage") {
      images[imageCounter].style.display = "none";
      imageCounter++;
      imageCounter %= images.length;
      images[imageCounter].style.display = "initial";
    } else if (button.id === "backImage") {
      images[imageCounter].style.display = "none";
      imageCounter--;
      if (imageCounter < 0) {
        imageCounter = images.length - 1;
      }
      images[imageCounter].style.display = "initial";
    }
  });
});

// all hidden but first
// queryselector all to get array of imgs
// increase index when button is clicked
// change style to unhidden
