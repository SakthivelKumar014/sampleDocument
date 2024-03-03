var loder = document.getElementById("preloader");
window.addEventListener("load", function () {
  loder.style.display = "none";
});
function copycontentcode(Copyid, contentid) {
  var copybtn = document.getElementById(Copyid);
  var copyText = document.getElementById(contentid);
  copybtn.addEventListener("click", function () {
    navigator.clipboard.writeText(copyText.innerHTML);
    copybtn.innerHTML = "Copied";
    setTimeout(function () {
      copybtn.innerHTML =
        '<ion-icon name="clipboard-outline"></ion-icon>' + "Copy";
    }, 2000);
  });
}
function logoutpopup(logoutid) {
  let popupNode = document.getElementById(logoutid);
  let overlay = document.getElementById("overlay");
  let closebtn = document.getElementById("close-btn");
  popupNode.classList.add("active");
  function closePopup() {
    popupNode.classList.remove("active");
  }
  overlay.addEventListener("click", closePopup);
  closebtn.addEventListener("click", closePopup);
}
// let popup = logoutpopup("#logoutpopups");
// document.querySelector("#logouts").addEventListener("click", popup);
