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

function slice(Str : string, start : number, end : number = Str.length) : string {
    let res : string = "";
    let len : number = Str.length;

    if (start < 0) {
        start = len + start;

        if (start < 0) {
            start = 0;
        }
    }

    if (end < 0) {
        end = len + end;

        if (end < 0) {
            end = 0;
        }
    }

    if (start > len) {
        start = len;
    }

    if (end > len) {
        end = len;
    }

    for (let i = start; i < end; i++) {
        res += Str[i];
    }

    return res;
}

function trim(Str : string) : string{
    let res = "";

    let start : number = 0;
    let end : number = Str.length - 1;

    for(let i = 0; i<Str.length; i++){
        if(Str[i] === ' '){
            continue;
        }
        else if (i + 1 === Str.length){
            return ""
        }
        else{
            start = i;
            break;
        }
    }

    for(let i = Str.length - 1; i>=0; i--){
        if(Str[i] === ' '){
            continue;
        }
        else{
            end = i;
            break;
        }
    }

    for(let i = start; i<=end; i++){
        res += Str[i];
    }

    return res;
}


export{};