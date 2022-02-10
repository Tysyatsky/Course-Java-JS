var image;
var can;
var preImage;

function upload(){
  var input = document.getElementById("finput");
  image = new SimpleImage(input);
  can = document.getElementById("canT");
  can.width = image.width;
  can.height = image.height;
  image.drawTo(can);
}

function undo() {
  image = preImage;
  clear();
  image.drawTo(can);
}

function clear() {
   var context = can.getContext("2d"); context.clearRect(0,0,can.width,can.height);
}
function resizeW(newWidth) {
  if (image == null) {
    alert('meh');
    return;
  }
  if (newWidth >=15) {
    can.width = newWidth;
    image.width = newWidth;
    image.drawTo(can);
  }
}
function resizeH(newHeight) {
  if (image == null) {
    alert('meh');
    return;
  }
  if (newHeight >= 15) {
    can.height = newHeight;
    image.height = newHeight;
    image.drawTo(can);
  }
}
function resizeMinus(){
  if (image.width > 100 && image.height > 100) {
    clear();
    image.width *=0.9;
  image.height *=0.9;
    can.width = image.width;
  can.height = image.height;
  image.drawTo(can);
  }
  else {
    alert("mem");
  }
}

function resizePlus() {
  if (image.width <= 2000 && image.height <=2000) {
    clear();
    image.width *=1.1;
  image.height *=1.1;
    can.width = image.width;
  can.height = image.height;
  image.drawTo(can);
  }
    else {
      alert("mem");
    }
}

function makeGray(){
  preImage = new SimpleImage(image)
  for (var px of image.values()) {
    var avar = (px.getGreen() + px.getRed() + px.getBlue()) / 3
    px.setGreen(avar);
    px.setRed(avar);
    px.setBlue(avar);
  }
  image.drawTo(can);
}

function makeRed() {
  preImage = new SimpleImage(image);
  for (var px of image.values()) {
    var avar = (px.getRed()+ px.getGreen()+px.getBlue())/3;
    if (avar < 128) {
      px.setRed(avar*2);
      px.setGreen(0);
      px.setBlue(0);
    }
    else {
      px.setRed(255);
      px.setGreen(2*avar-255);
      px.setBlue(2*avar-255);
    }
  }
  image.drawTo(can);
}
function makeBorder() {
  preImage = new SimpleImage(image);
  var width = image.width;
  var height = image.height;
  for (var px of image.values()) {
    if (px.getX() < width/10 || px.getX() >= width - width/10 || px.getY() < height/10 || px.getY() >= height - height/10)
      {
        px.setRed(0);
        px.setGreen(0);
        px.setBlue(0);
      }
    
  }
  image.drawTo(can);
}
function printColor(ev) {
  preImage = new SimpleImage(image);
  var color = ev.target.value;
  var Rc = parseInt(color.substr(1,2), 16);
  var Gc = parseInt(color.substr(3,2), 16);
  var Bc = parseInt(color.substr(5,2), 16);
  
  for (var px of image.values()) {
    var avar = (px.getRed()+px.getGreen()+px.getBlue())/3;
    if (avar < 128) {
      px.setRed(Rc/127.5*avar);
      px.setGreen(Gc/127.5*avar);
      px.setBlue(Bc/127.5*avar);
    }
    else {
      px.setRed((2 - Rc/127.5)*avar + 2*Rc - 255);
      px.setGreen((2 - Gc/127.5)*avar + 2*Gc - 255);
      px.setBlue((2 - Bc/127.5)*avar + 2*Bc - 255);
    }
  }
  image.drawTo(can);
}
function makeRainbow() {
  preImage = new SimpleImage(image);
  var h = image.height;
  for (var px of image.values()) {
    var avar = (px.getRed()+px.getGreen()+px.getBlue())/3;
    if (px.getY() < h/7) {
        if (avar < 128) {
          px.setRed(2*avar);
          px.setGreen(0);
          px.setBlue(0);
        }
        else {
          px.setRed(255);
          px.setGreen(2*avar-255);
          px.setBlue(2*avar-255);
        }
      }
      else if (px.getY() < 2*h/7) {
        if (avar < 128) {
          px.setRed(2*avar);
          px.setGreen(0.8*avar);
          px.setBlue(0);
        }
        else {
          px.setRed(255);
          px.setGreen(1.2*avar-51);
          px.setBlue(2*avar-255);
        }
      }
      else if (px.getY() < 3*h/7) {
        if (avar < 128) {
          px.setRed(2*avar);
          px.setGreen(2*avar);
          px.setBlue(0);
        }
        else {
          px.setRed(255);
          px.setGreen(255);
          px.setBlue(2*avar - 255);
        }
      }
      else if (px.getY() < 4*h/7) {
        if (avar < 128) {
          px.setRed(0);
          px.setGreen(2*avar);
          px.setBlue(0);
        }
        else {
          px.setRed(2*avar-255);
          px.setGreen(255);
          px.setBlue(2*avar-255);
        }
      }
      else if (px.getY() < 5*h/7) {
        if (avar < 128) {
          px.setRed(0);
          px.setGreen(0);
          px.setBlue(2*avar);
        }
        else {
          px.setRed(2*avar-255);
          px.setGreen(2*avar-255);
          px.setBlue(255);
        }
      }
      else if (px.getY() < 6*h/7) {
        if (avar < 128) {
          px.setRed(0.8*avar);
          px.setGreen(0);
          px.setBlue(2*avar);
        }
        else {
          px.setRed(1.2*avar-51);
          px.setGreen(2*avar-255);
          px.setBlue(255);
        }
      }
      else {
        if (avar < 128) {
          px.setRed(1.6*avar);
          px.setGreen(0);
          px.setBlue(1.6*avar);
        }
        else {
          px.setRed(0.4*avar+153);
          px.setGreen(2*avar-255);
          px.setBlue(0.4*avar+153);
        }
      }
  }
  image.drawTo(can);
}
//return 1 int from min to max inclusive
function makeRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function smudge() {
  preImage = new SimpleImage(image);
  for (var px of image.values()) {
    var checkFirst = makeRandom(0,1);
    console.log(checkFirst);
    if (checkFirst == 1) {
      var x = px.getX(); 
      var y = px.getY();
      var pORm = Math.random() < 0.5 ? -1 : 1;
      var newX = makeRandom(0,10) * pORm + x;
      pORm = Math.random() < 0.5 ? -1 : 1;
      var newY = makeRandom(0,10) * pORm + y;
      // 2 int
      //console.log(newX);
      //console.log(newY);
      if (newX < 0) {
        newX = 1;
      }
      if (newY < 0) {
        newY = 1;
      }
      if (newX > image.width - 1) {
        newX = image.width - 1;
      }
      if (newY > image.height - 1) {
        newY > image.height - 1;
      }
      var newPx = image.getPixel(newX, newY);
      image.setPixel(x,y,newPx);
    }
    //else {
      //px.setRed(255);
    //}
  }
  image.drawTo(can);
}

function isNumeric (value) {
  return !isNaN(value);
}


