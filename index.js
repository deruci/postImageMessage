const redirectionBtn = document.querySelector("#redirection-btn");
let payload = {};

redirectionBtn.addEventListener("click", () => {
  redirectionBtn.setAttribute("disabled", true);
  const newTab = window.open("./image.html", "new-tab");

  window.addEventListener("message", imageTabLoadedCallback, false);
  function imageTabLoadedCallback(event) {
    if (event.data == "ready") {
      newTab.postMessage(payload, "*");
    }
  }
});

function encodeImageFileAsURL(element) {
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function () {
    payload.image = reader.result;
    payload.imageWidth = 1920;
    payload.imageHeight = 1080;
  };
  reader.readAsDataURL(file);
}
