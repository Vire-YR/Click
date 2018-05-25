
var count=0;  
function clock(){
    count++;
    var v = 'rotate(' + 6*count + ', 70, 70)';
    document.getElementById('s-hand').setAttribute('transform', v);
    document.getElementById('sec').innerHTML = 60-count + ' sec';

     if(count>50)
     {
        document.getElementById('sec').style.color="red";
     }

    //call every second (recursive function)
    if(count<60)
       setTimeout(clock, 1000);
    
};
window.onload=clock;

function colorSelector(){
    var x= "0123456789ABCDEF".split(" ");
    var color="#";
    for(var i=0;i<6;i++)
        color+= x[Math.floor(Math.random()*15)];
    return color;
}

function shapeSelector(){
    var shape=["rect","circle","ellipse","star","tri"];
    var select= Math.floor(Math.random()*4);
    var width= (30 + Math.random()*270);
    var height= (30 + Math.random()*270);    
    var x= (width/2).toFixed(2);
    var y= (height/2).toFixed(2);
    width= width.toFixed(2);
    height= height.toFixed(2);
    var tag="<svg width="+width+" height="+height+">";
    switch(select){
        case 0: tag+="<rect x="+x+" y="+y+" rx="+width+" ry="+height+" />";
                break;

        case 1: tag+ = "<circle cx="+x+" cy="+x+" r="+x+"/>";
                break;

        case 2: tag+= "<ellipse cx="+x+" cy="+y+" rx="+x+" ry="+y+" />";
                break;

        case 3: var w=parseFloat(width);var h=parseFloat(height);
                var point2= (w*0.2).toFixed(2); var point34= (h*0.4).toFixed(2); var point5=(w*0.4).toFixed(2);
                var points= x+",0 "+ point2+","+height+" "+width+","+point34+" "+"0,"+point34+" "+point5+","+height;
                tag+= "<polygon points="+points+"/>";
                break;

        case 4: var points="0,"+height+" "+ y+",0"+" "+width+","+height;
                tag+= "<polygon points="+points+" />";
    }
    tag+= "</svg>"
}
