//Callback and promises usage and need in code

//Making Func as callback example

function Func(CbFunc, printFunc){
    let res;
    for(let i = 0; i<21; i++){
        if(i === 15){
           printFunc(CbFunc(i));
        }
        else{
            printFunc(i);
        }
    }
}

function CbFunc(num){
    let res = 1;
    while(num > 0){
        res *= num;
        num--;
    }

    return res;
}


Func(CbFunc, (x) => {
    console.log(x);
});

