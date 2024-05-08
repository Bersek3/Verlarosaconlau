var modal = document.getElementById("myModal");
var items = document.querySelectorAll(".item");
var modalContent = document.querySelector(".modal-content");
var mediaContainer = document.querySelector(".media-container");
var closeBtn = document.querySelector(".close");
var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");
var currentIndex;

items.forEach(function(item, index) {
  item.addEventListener("click", function() {
    currentIndex = index;
    showModal();
  });
});

closeBtn.addEventListener("click", closeModal);

prevBtn.addEventListener("click", function() {
  showMedia(currentIndex - 1);
});

nextBtn.addEventListener("click", function() {
  showMedia(currentIndex + 1);
});

function showModal() {
  modal.style.display = "block";
  showMedia(currentIndex);
}

function closeModal() {
  modal.style.display = "none";
}

function showMedia(index) {
  var currentItem = items[index];
  var mediaType = currentItem.getAttribute("data-type");
  mediaContainer.innerHTML = "";
  
  if (mediaType === "image") {
    var img = currentItem.querySelector("img").cloneNode(true);
    mediaContainer.appendChild(img);
  } else if (mediaType === "video") {
    var video = currentItem.querySelector("video").cloneNode(true);
    mediaContainer.appendChild(video);
  }
  
  currentIndex = index;
  updateButtons();
}

function updateButtons() {
  if (currentIndex === 0) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }
  
  if (currentIndex === items.length - 1) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "block";
  }
}
