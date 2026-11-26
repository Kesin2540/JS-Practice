const Str = "Keshav";

function len(Str : string) : number{
    let cnt = 0;
    for(let i of Str){
        cnt++;
    }

    return cnt;
}

function concat(...strs : string[]) : string{
    let res = "";
    for(const str of strs){
        res += str;
    }

    return res;
}

function substring(Str : string, start : number, end : number= Str.length) : string{
    let res : string = "";

    for(let i = start; i<end; i++){
        res += Str[i];
    }

    return res;
}


export{};