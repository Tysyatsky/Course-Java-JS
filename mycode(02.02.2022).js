var fgimage;
var bgimage;

function uploadFore(){
  var fginput = document.getElementById("finput");
  fgimage = new SimpleImage(fginput);
  
  var can1 = document.getElementById("canF");
  fgimage.drawTo(can1);
  //alert(value + " uploaded");
}
function uploadBack(){
  var bginput = document.getElementById("binput");
  bgimage = new SimpleImage(bginput);
  var can2 = document.getElementById("canB");
  bgimage.drawTo(can2);
}

function makeIt() {
  if (fgimage != null && fgimage.complete() && bgimage != null && bgimage.complete()){
  for (var px of fgimage.values()) {
    if (px.getGreen() > px.getRed() + px.getBlue()) {
        var posX = px.getX();
        var posY = px.getY();
        var tpx = bgimage.getPixel(posX, posY);
        fgimage.setPixel(posX, posY, tpx);
    }
}
  var can1 = document.getElementById("canF");
  fgimage.drawTo(can1);
  }
  else {
    alert('You have not chosen background or foreground image');
  }
}