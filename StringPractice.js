//Making user-defined inbuilt String functions
// To make: .length, .concat, .slice(), .substring(), .trim()
// .padStart(), .padEnd(), .replace(), .replaceAll()


const Str = "Keshav";

//Str.length
function len(Str){
    let cnt = 0;
    for(i of Str){
        cnt++;
    }

    return cnt;
}

//Str.concat()
function concat(...strs){
    let res = "";
    for(const str of strs){
        res += str;
    }

    return res;
}

//Str.substring()
function substring(Str, start, end = Str.length){
    let res = "";

    for(var i = start; i<end; i++){
        res += Str[i];
    }

    return res;
}

function slice(Str, start, end = Str.length) {
    let res = "";
    let len = Str.length;

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

//Str.trim()
function trim(Str){
    let res = "";

    let start;
    let end;

    for(let i = 0; i<Str.length; i++){
        if(Str[i] === ' '){
            continue;
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


function padStart(Str, len, pad){
    let res = Str;
    
    if(res.length < len){
            while(res.length !== len){
            res = pad + res;
        }
    }

    return res;
}

function padEnd(Str, len, pad){
    let res = Str;
    
    if(res.length < len){
            while(res.length !== len){
            res = res + pad;
        }
    }

    return res;
}

console.log(padEnd(Str, 10, "k"));