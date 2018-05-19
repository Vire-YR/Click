
var count=0;   

function clock(){
    count++;
    var v1 = 'rotate(' + 6*count + ', 70, 70)';
    var v2 ='rotate(' + 180-6*count + ', 70, 70)';
    document.getElementById('s-hand').setAttribute('transform', v1);
    document.getElementById('s-tail').setAttribute('transform', v2);
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
