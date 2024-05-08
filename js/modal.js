var modal = document.getElementById("myModal");
var mainImage = document.getElementById("mainImage");
var modalContent = document.querySelector(".modal-content");
var mediaContainer = document.querySelector(".media-container");
var closeBtn = document.querySelector(".close");

mainImage.addEventListener("click", function() {
  showModal();
});

closeBtn.addEventListener("click", closeModal);

function showModal() {
  modal.style.display = "block";
  showMedia();
}

function closeModal() {
  modal.style.display = "none";
}

function showMedia() {
  var hiddenImages = document.querySelectorAll('div[style="display: none;"] img');
  mediaContainer.innerHTML = "";
  hiddenImages.forEach(function(image) {
    var img = image.cloneNode(true);
    mediaContainer.appendChild(img);
  });
}