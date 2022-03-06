window.saveDataAcrossSessions = true;

const LOOK_DELAY = 1000; // ms
const LEFT_CUTOFF = window.innerWidth / 4;
const RIGHT_CUTOFF = window.innerWidth - window.innerWidth / 4;

let lookDirection = null;
let startLookTime = Number.POSITIVE_INFINITY; // ms
let imageElement = getNewImage(); // get the image element
let nextImageElement = getNewImage(true); // get the image element

webgazer
  .setGazeListener((data, timestamp) => {
    //console.log(data, timestamp);
    if (data == null || lookDirection === "STOP") return;

    if (data.x < LEFT_CUTOFF && lookDirection !== "LEFT") {
      startLookTime = timestamp;
      lookDirection = "LEFT";
    } else if (data.x > RIGHT_CUTOFF && lookDirection !== "RIGHT") {
      startLookTime = timestamp;
      lookDirection = "RIGHT";
    } else if (data.x >= LEFT_CUTOFF && data.x <= RIGHT_CUTOFF) {
      startLookTime = Number.POSITIVE_INFINITY;
      lookDirection = null;
    }
    if (startLookTime + LOOK_DELAY < timestamp) {
      //console.log("looked at image");
      if (lookDirection === "LEFT") {
        imageElement.classList.add("left");
      } else {
        imageElement.classList.add("right");
      }
      startLookTime = Number.POSITIVE_INFINITY;
      lookDirection = "STOP";
      setTimeout(() => {
        imageElement.remove();
        nextImageElement.classList.remove("next");
        imageElement = nextImageElement;
        nextImageElement = getNewImage(true);
        lookDirection("RESET");
      }, 200);
    }
  })
  .begin();

function getNewImage(next = false) {
  const img = document.createElement("img");
  img.src = "https://picsum.photos/1000?" + Math.random();
  if (next) {
    img.classList.add("next");
  }
  document.body.append(img);
  return img;
}
