//JS practice, making array inbuilt functions by myself
//Making Arr.length, .toString, .at(), .join(), .pop(), .push(), .shift(), .unshift(), delete, .concat()
//.flat(), .slice(), .splice()

const Arr1 = [1, 2, 3, 4];
const Arr2 = ["K", "E", "S", "H", "A", "V"];

//Arr.length

function len(Arr){
    let cnt = 0;
    for(i of Arr){
        cnt++;
    }

    return cnt;
}

//Arr.toString()

function str(Arr){
    let str = "";
    let first = true
    for(i of Arr){
        if(!first){
            str += ",";
        }
        str += i;
        first = false;
    }

    return str;
}

//Arr.at()

function at(Arr, idx){
    return Arr[idx];
}

