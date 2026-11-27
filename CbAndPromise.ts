function Func(CbFunc : (num : number) => number, printFunc : (val : number) => void) : void{
    for(let i = 0; i<21; i++){
        if(i === 15){
           printFunc(CbFunc(i));
        }
        else{
            printFunc(i);
        }
    }
}

function CbFunc(num : number) : number{
    let res = 1;
    while(num > 0){
        res *= num;
        num--;
    }

    return res;
}

function Prom(CbFunc : (num : number) => number, printFunc : (val : number) => void) : Promise<(string | number)>{
    return new Promise((resolve, reject) => {
        try{
            for(let i = 0; i<21; i++){
                if(i === 15){
                    setTimeout(() => {
                        printFunc(CbFunc(i));
                        resolve(200);
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

function delay(t : number) : Promise<void>{
    return new Promise((resolve) => {
        setTimeout(resolve, t);
    });
}

async function AFunc(CbFunc : (num : number) => number, printFunc : (val : number) => void ) : Promise<void>{
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