//Making user-defined inbuilt String functions
// To make: .length, .concat, .slice(), .substring(), .trim()
// .trimStart(), .padStart(), .padEnd(), .replace(), .replaceAll()


const str = "Keshav";

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

console.log(slice(str, 2));