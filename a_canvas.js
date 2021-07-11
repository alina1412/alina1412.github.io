// import Table from "./pure_canvas/table.mjs";
import config from "./sub_js/config.mjs";

(function() {


    console.log(config.defaults.name2)

    const canvas = document.getElementById("canvas001");
    const ctx = canvas.getContext("2d")


    var c=document.getElementById("canvas001");
    var ctx=c.getContext("2d");

    // Красный прямоугольник
    ctx.beginPath();
    ctx.lineWidth="6";
    ctx.strokeStyle="red";
    ctx.rect(5,5,290,140); 
    ctx.stroke();

})();