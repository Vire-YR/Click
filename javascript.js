
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
