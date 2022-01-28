var fground = new SimpleImage("drewRobert.png");
var bground = new SimpleImage("dinos.png");

for (var px of fground.values()) {
    if (px.getGreen() > px.getRed() + px.getBlue()) {
        var posX = px.getX();
        var posY = px.getY();
        var tpx = bground.getPixel(posX, posY);
        fground.setPixel(posX, posY, tpx);
    }
}

//print (fground);

var img = new SimpleImage(200,200);
for (var px of img.values()){
  var x = px.getX();
  var y = px.getY();
  if (x < img.getWidth()/2){
    px.setRed(255);
  }
  if (y>img.getHeight()/2){
    px.setBlue(255);
  }
  if (x >= img.getWidth()/2 && y<=img.getHeight()/2) {
    px.setGreen(255);
  }
}
function setBlack(pixel) {
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);
    return pixel;
}
img = new SimpleImage("smallpanda.png");
var bord = 10;
var h = img.getHeight();
var w = img.getWidth();
for (var px of img.values()) {
    var x = px.getX();
    var y = px.getY();
    if (y <= bord || x <= bord || y >= h - bord || x >= w - bord) {
        px = setBlack(px);
    }
}
print (img);

