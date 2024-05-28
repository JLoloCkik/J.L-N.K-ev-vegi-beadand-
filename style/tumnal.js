// Get the modal
var modal = document.getElementById("modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("modal-img");
var thumbnails = document.getElementsByClassName("thumbnail");

for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].onclick = function(){
        modal.style.display = "block";
        var largeImageSrc = this.getAttribute("data-large");
        modalImg.src = largeImageSrc;
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";}