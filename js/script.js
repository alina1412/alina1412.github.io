var config = {
    type: Phaser.AUTO,
    width: 900,
    height: 600,
    
    /*
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
        
    },*/
    scene: {
        preload: preload,
        create: create,
        /*update: update*/
    }

};

var game = new Phaser.Game(config);

//arr
const cars = ["Saab", "Volvo", "BMW"];
/*
for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
  }
*/
// --------------- into element p id="demo"
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  //document.getElementById("demo").innerHTML = Object.values(person);
  // loop to show data in person
  let txt = "";
  for (let x in person) {
  txt += person[x] + "<br>";
  };
  document.getElementById("demo").innerHTML = txt;

// ---------------
  /*
var ctx = document.getElementById("rounded-rect").getContext("2d");
  //var rect = new Phaser.Geom.Rectangle(x, y, width, height);
  var r0 = new Phaser.Geom.Rectangle(0, 0, 20, 20);
  graphics.fillRectShape(r0);
  //rect.setTo(0, 0, 20, 20);
  document.getElementById("rounded-rect").innerHTML = r0;*/
// ---------------





function preload()
{
    
    /*
    this.load.setBaseURL('../img'); 

    this.load.image('sky', 'space3.png');
    this.load.image('logo', 'phaser3-logo.png');
    this.load.image('red', 'red.png');
    */
}
/*rect.color = "red";
var rect;
graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x0000aa }, fillStyle: { color: 0xaa0000 }});
rect = new Phaser.Geom.Rectangle(0, 0, 30, 30);

rect.push(new Phaser.Geom.Rectangle());
graphic = this.add.graphics({ lineStyle: { color: 0x00ffff } });
*/



/*
for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
  }
*/

function create ()
{
    for (let i = 1; i < 5; i++) {
        var graphics = this.add.graphics({ lineStyle: { width: 5, color: 0x0000aa }, fillStyle: { color: 0xaa0000 }});
        var rect = new Phaser.Geom.Rectangle(i*100, i*100, 100, 100);
        graphics.fillRectShape(rect);
    }
}



/*
function create()
{
    var logo = this.physics.add.image(400, 100, 'logo');
    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);
  
    emitter.startFollow(logo);
}
    */

    /*
    this.add.image(400, 300, 'sky');
    

    var particles = this.add.particles('red');

    var emitter = particles.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    
    });
    */