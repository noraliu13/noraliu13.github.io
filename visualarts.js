
// modal elements
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modalImage");
var modalTitle = document.getElementById("modalTitle");
var modalMedium = document.getElementById("modalMedium");
var modalSize = document.getElementById("modalSize");
var closeModal = document.getElementsByClassName("close")[0];

// open 
document.querySelectorAll('.myImages').forEach(item => {
    item.addEventListener('click', function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        modalTitle.textContent = this.getAttribute("data-title");
        modalMedium.textContent = this.getAttribute("data-medium");
        modalSize.textContent = this.getAttribute("data-size");
    });
});

// close 
closeModal.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

