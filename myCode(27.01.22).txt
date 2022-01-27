var image = new SimpleImage("chapel.png");
for (var px of image.values()) {
    px.setRed(0);
}

image = new SimpleImage ("eastereggs.jpg");
for (var px of image.values()) {
    if (px.getRed() > 70) {
        px.setRed(70);
    }
}

image = new SimpleImage("astrachan.jpg");
var h = image.getHeight();
for (var px of image.values()) {
    if (px.getY() >= h - 10) {
        px.setRed(0);
        px.setGreen(0);
        px.setBlue(0);
    } 
}
var image = new SimpleImage("chapel.png");
for (var px of image.values()) {
    if (px.getY() <=50 && px.getX() <=50) {
        px.setRed(0);
        px.setGreen(255);
        px.setBlue(0);
    }
}
//print(image);


function topRightCorner (cornerWidth, cornerHeight, someImage,red, green, blue) {
    //var h = someImage.getHeight();
    var w = someImage.getWidth();
    for (var px of someImage.values()) {
        if (px.getX() >= w - cornerWidth && px.getY() <= cornerHeight) {
            px.setRed(red);
            px.setGreen(green);
            px.setBlue(blue);
        }
    }
    return someImage;
} 


var picture = new SimpleImage("chapel.png");
var result = topRightCorner(30, 60, picture, 255, 255, 0);
//print(result);
var picture2 = new SimpleImage("smalllion.jpg");
var result2 = topRightCorner(125, 20, picture2, 255, 0, 0);
//print(result2);

function changeRed(width, height) {
var picture = new SimpleImage(width, height);
var red = 0;
for (var px of picture.values()) {
    px.setRed(red);
    red++;
    if (red == 256) {
        red = 0;
    }
}

return picture;
}

var result = changeRed(256,200);
//print(result);

var picture = new SimpleImage("hilton.jpg");
var w = picture.getWidth();
for (var px of picture.values()) {
    if (px.getX() <= w/3) {
        px.setRed(255);
    }
    else if (px.getX() > w/3 && px.getX() <= w*2/3) {
        px.setGreen(255);
    }
    else {
        px.setBlue(255);
    }
}
//print(picture);

function swapRG (pixel) {
   var R = pixel.getRed();
   pixel.setRed(pixel.getGreen());
   pixel.setGreen(R);
   return pixel;
}
function BtoY (pixel) {
    pixel.setRed(255);
    pixel.setGreen(255);
    pixel.setBlue(0);
   return pixel;
}
var picture = new SimpleImage("smalllion.jpg");
for (var px of picture.values()) {
    px = swapRG(px);
}
//print(picture);
var picture = new SimpleImage("duke_blue_devil.png");
for (var px of picture.values()) {
    if (px.getRed() < 255) {
        px = BtoY(px);
    }
}
print(picture);
