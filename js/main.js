var stars = 1800;
var star = new Path.Circle({
  center: [100, 100],
  radius: 1.3,
  fillColor: new Color(247, 247, 247, 0.6), 
});

var symbol = new Symbol(star);

for (var i = 0, l = stars; i < l; i += 1) {
  var center = Point.random() * view.size;
  var placedSymbol = symbol.place(center);
  placedSymbol.scale(i/l);
}

function onFrame(event) {
  for (var i = 0, l = stars; i < l; i += 1) {
    var sideFactor = Math.max(0, Math.floor(Math.random() * 10) );
    var isUp = !(sideFactor % 3);
    var isRight = !(sideFactor % 3);
    var speed = 0.3;
    var item = project.activeLayer.children[i];

    (isUp ? item.position.y += speed : item.position.y -= speed);
    (isRight ? item.position.x += item.bounds.width / 5 : item.position.x -= item.bounds.width / 5);

    if (item.bounds.left > view.size.width) {
      item.position.x = -item.bounds.width;
    }

    delete sideFactor;
    delete isUp;
    delete isRight;
    delete speed;
  }
}
