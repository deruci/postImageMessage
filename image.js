window.opener.postMessage("ready", "*");

const canvas = document.querySelector("#image-canvas");
const ctx = canvas.getContext("2d");

const imageStatus = document.querySelector("#image-status");
window.addEventListener("message", (e) => {
  console.log(e.data);
  canvas.height = e.data.imageHeight;
  canvas.width = e.data.imageWidth;
  const image = new Image();
  image.onload = function () {
    ctx.drawImage(image, 0, 0);
  };
  image.src = e.data.image;
});
