let num=0;

function decrease(){
    num-=1;
    document.getElementById('number').innerHTML=num;
}

function reset(){
    num=0;
    document.getElementById('number').innerHTML=num;
}

function increase(){
    num+=1;
    document.getElementById('number').innerHTML=num;
}