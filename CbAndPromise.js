//Callback and promises usage and need in code

//Making Func as callback example

function Func(CbFunc, printFunc){
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
                        resolve("Executed.");
                    } , 5000);
                }
                else{
                    printFunc(i);
                }
            }

        }
        catch(error){
            reject(error);
        }
    })
}

// Prom(CbFunc, (x) => {
//     console.log(x);
// })
// .then((message) => {
//     console.log(message);
// })
// .catch((error) => {
//     console.log(error);
// })
// .finally(() => {
//     console.log("Factorial Done");
// })


function delay(t){
    return new Promise((resolve) => {
        setTimeout(resolve, t);
    });
}

async function AFunc(CbFunc, printFunc) {
    for(let i = 0; i<21; i++){
        if(i === 15){
            await delay(3000); 
            printFunc(CbFunc(i));
        }
        else{
            printFunc(i);
        }
    }

}

AFunc(CbFunc, (x) => {
    console.log(x);
});