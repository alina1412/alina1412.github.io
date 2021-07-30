

function draw_rec(ctx, rec_parameters) {

    let {x, y} = rec_parameters.loc;
    ctx.beginPath();
    ctx.clearRect(x-10,y-10,110,110);
    ctx.fillStyle = "blue";
    ctx.fillRect(x,y,100,100); 
    ctx.closePath();

    
}

function change_rec_location(rec_parameters) {
    let {x, y} = rec_parameters.loc;
    //...
    x += 2;
    y += 2;
    rec_parameters.loc.x = x;
    rec_parameters.loc.y = y;

}



























var config = {
    type: Phaser.AUTO,
    width: 900,
    height: 600,
    
    scene: {
        preload: preload,
        create: create,
        /*update: update*/
    }

};

var game = new Phaser.Game(config); 


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




function preload()
{
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
        var graphics = this.add.graphics({ lineStyle: { width: 1, color: 0x0000aa }, fillStyle: { color: 0xaa0000 }});
        var rect = new Phaser.Geom.Rectangle(i*100, j*100, 90, 90);
        graphics.fillRectShape(rect);
        }
    }
}


function create ()
{

}



