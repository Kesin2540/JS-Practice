//Making user-defined inbuilt String functions
// To make: .length, .concat, .slice(), .substring(), .toUpperCase(), .toLowerCase(), .trim()
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

console.log(substring(str, 2));