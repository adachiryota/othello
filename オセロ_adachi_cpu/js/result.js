/* window.onload = function(){
    const data = location.search.substring(1);
    console.log(data);
    document.getElementById("printResult").innerHTML = data;
} */
function printResult(){
    const data = location.search.substring(1).split(':');
    let o,r,d1,t1,b,g,d2,t2;
    [o,r,d1,t1,b,g,d2,t2] = data;
    console.log(o,r,d1,t1,b,g,d2,t2);
    //document.getElementById("printresult").innerHTML = data;
    document.getElementById("nowO").innerHTML = document.getElementById("nowO").innerHTML + o;
    document.getElementById("nowR").innerHTML = document.getElementById("nowR").innerHTML + r;
    document.getElementById("nowD1").innerHTML = document.getElementById("nowD1").innerHTML + d1;
    document.getElementById("nowT1").innerHTML = document.getElementById("nowT1").innerHTML + t1;
    document.getElementById("nowB").innerHTML = document.getElementById("nowB").innerHTML + b;
    document.getElementById("nowG").innerHTML = document.getElementById("nowG").innerHTML + g;
    document.getElementById("nowD2").innerHTML = document.getElementById("nowD2").innerHTML + d2;
    document.getElementById("nowT2").innerHTML = document.getElementById("nowT2").innerHTML + t2;


    if(t1 > t2) {
        document.getElementById("result1").style.color = 'red';
        document.getElementById("result2").style.color = 'black';
        document.getElementById("result1").innerHTML = "勝ち";
        document.getElementById("result2").innerHTML = "負け";
        
        
    }else if(t1 < t2){
        document.getElementById("result2").style.color = 'red';
        document.getElementById("result1").style.color = 'black';
        document.getElementById("result2").innerHTML = "勝ち";
        document.getElementById("result1").innerHTML = "負け";
    }else{
        document.getElementById("result2").innerHTML = "引き分け";
        document.getElementById("result1").innerHTML = "引き分け";
    }

}