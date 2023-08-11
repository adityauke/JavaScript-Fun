function add(){
    let act=0 , b=0;
    act = calc.disp.value;
    b = act.charAt(act.length - 1);
    if(b=='+' || b=='-' || b=='/' || b=='*'){
        calc.disp.value = act.substring(0 , act.length-1);
        calc.disp.value+='+';
    }
    else{
        calc.disp.value+='+';
    }
}
function sub(){
    let act=0 , b=0;
    act = calc.disp.value;
    b = act.charAt(act.length - 1);
    if(b=='+' || b=='-' || b=='/' || b=='*'){
        calc.disp.value = act.substring(0 , act.length-1);
        calc.disp.value+='-';
    }
    else{
        calc.disp.value+='-';
    }
}
function mul(){
    let act=0 , b=0;
    act = calc.disp.value;
    b = act.charAt(act.length - 1);
    if(b=='+' || b=='-' || b=='/' || b=='*'){
        calc.disp.value = act.substring(0 , act.length-1);
        calc.disp.value+='*';
    }
    else{
        calc.disp.value+='*';
    }
}
function div(){
    let act=0 , b=0;
    act = calc.disp.value;
    b = act.charAt(act.length - 1);
    if(b=='+' || b=='-' || b=='/' || b=='*'){
        calc.disp.value = act.substring(0 , act.length-1);
        calc.disp.value+='/';
    }
    else{
        calc.disp.value+='/';
    }
}