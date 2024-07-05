function showImage(src) {
    var modal = document.getElementById("imageModal");
    var img = document.getElementById("largeImage");
    img.src = src;
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
