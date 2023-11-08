let imageElement = document.getElementById("image");
let warningMessageElement = document.getElementById("warningMessage");
let imageWidthElement = document.getElementById("imageWidth");


let originalImageWidth = 200;

imageElement.style.width = originalImageWidth + "px";

function onIncrement() {
    if (originalImageWidth > 295) {
        warningMessageElement.textContent = "Too big. Decrease the size of the Image";
    } else {
        warningMessageElement.textContent = ""
        originalImageWidth = originalImageWidth + 5
        imageElement.style.width = originalImageWidth + "px"
        imageWidthElement.textContent = originalImageWidth + "px"
    }
}

function onDecrement() {
    if (originalImageWidth < 105) {
        warningMessageElement.textContent = "Can't Visible. Increase the size of the Image"
    } else {
        warningMessageElement.textContent = ""
        originalImageWidth = originalImageWidth - 5
        imageElement.style.width = originalImageWidth + "px"
        imageWidthElement.textContent = originalImageWidth + "px"
    }


}