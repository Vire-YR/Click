
var count=0; var hits=0; var flag=true; 
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
    else{
        gameOver();
    } 
}

function colorSelector(){
    var x= "0123456789ABCDEF";
    var color="#";
    for(var i=0;i<6;i++)
    {
        var j=Math.floor(Math.random()*16);
        color+= x[j];
    }
    return color;
}

function shapeSelector(){
    var shape=["rect","circle","ellipse","star","tri"];
    var select= Math.floor(Math.random()*5);
    var length= (30 + Math.random()*270);
    var breadth= (30 + Math.random()*270);    
    width= length.toFixed(2);
    height= breadth.toFixed(2);
    var tag="<svg id='SVG' x='10' width="+width;
    if(select===1)
        tag+=" height="+width+">";
    else
        tag+=" height="+height+">";
    length-=10;breadth-=10;
    var x= (length/2).toFixed(2);
    var y= (breadth/2).toFixed(2);    
    width= length.toFixed(2);
    height= breadth.toFixed(2);
    
    switch(select){
        case 0: tag+="<rect width="+width+" height="+height;
                break;

        case 1: tag+= "<circle cx="+x+" cy="+x+" r="+x;
                break;

        case 2: tag+= "<ellipse  cx="+x+" cy="+y+" rx="+x+" ry="+y;
                break;

        case 3: var w=parseFloat(width);var h=parseFloat(height);
                var point2= (w*0.2).toFixed(2); var point34= (h*0.4).toFixed(2); var point5=(w*0.8).toFixed(2);
                var points= "'"+x+",0 "+ point2+","+height+" "+width+","+point34+" "+"0,"+point34+" "+point5+","+height+"'";
                tag+= "<polygon points="+points;
                break;

        case 4: var points="'0,"+height+" "+ y+",0"+" "+width+","+height+"'";
                tag+= "<polygon points="+points;
    }
    tag+=" id='geometry' onclick='compute()'";
    tag+=" fill='"+colorSelector()+"' stroke='black' stroke-width='2'";
    tag+= " /></svg>";
    console.log(tag);
    document.getElementById("shape").innerHTML=tag;
    document.getElementById('geometry').style.fill=colorSelector();

    document.getElementById('SVG').style.marginLeft=Math.random()*(1200-270);
    document.getElementById('SVG').style.marginTop=Math.random()*(635-270);
}

function gameOver(){
        flag=false;
        alert("GAME OVER. You made "+hits+" clicks");
}

function compute(){
        if(flag===true){
                hits++;
                document.getElementById("hits").innerHTML=hits;
                shapeSelector();
        }

}

window.onload= function(){
        clock();
        shapeSelector();
};
