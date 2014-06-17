console.log('This would be the main JS file.');


function DontClickMyFace() {
    var image = document.getElementById('faceid');
    if (image.src.match("face")) {
        image.src = "images/house.jpg";
    } else {
        image.src = "images/face.jpg";
    }
}

