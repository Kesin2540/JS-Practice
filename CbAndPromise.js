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


// Func(CbFunc, (x) => {
//     console.log(x);
// });

//Making Prom as a promise example

function Prom(CbFunc, printFunc){
    return new Promise((resolve, reject) => {
        try{
            for(let i = 0; i<21; i++){
                if(i === 15){
                    setTimeout(() => {
                        printFunc(CbFunc(i));
                    } , 5000);
                }
                else{
                    printFunc(i);
                }
            }

            resolve("Executed.")
        }
        catch(error){
            reject(error);
        }
    })
}

Prom(CbFunc, (x) => {
    console.log(x);
})
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error);
})