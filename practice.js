//JS practice, making array inbuilt functions by myself
//Making Arr.length, .toString, .at(), .join(), .pop(), .push(), .shift(), .unshift(), delete, .concat()
//.flat(), .slice(), .splice()

const Arr1 = [1, 2, 3, 4];
const Arr2 = [[1,2],[3,4],[5,6],[7,8]];

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

//Arr.join()

function join(Arr, sep){
    let str = "";
    let first = true
    for(i of Arr){
        if(!first){
            str += sep;
        }
        str += i;
        first = false;
    }

    return str;
}


//Arr.pop()

function pop(Arr){
    let res = Arr[Arr.length - 1];
    Arr.length -= 1;
    return res;
}

//Arr.push()

function push(Arr, val){
    Arr.length += 1;
    Arr[Arr.length - 1] = val;
    return Arr.length;
}

//Arr.shift()

function shift(Arr){
    let shiftVal = Arr[0];

    for(var i = 1; i<Arr.length; i++){
        Arr[i - 1] = Arr[i];
    }

    Arr.length -= 1;

    return shiftVal
}

//Arr.unshift()

function unshift(Arr, val){
    Arr.length += 1;

    for(var i = Arr.length - 1; i>=0; i--){
        Arr[i] = Arr[i-1];
    }

    Arr[0] = val;

    return Arr.length;
}

// delete

function del(Arr, idx){
    Arr[idx] = undefined;
}

//Arr.concat()

function concat(...arrs){
    let res = [];
    for(const arr of arrs){
        for(const val of arr){
            res.push(val);
        }
    }

    return res;
}

// arr.flat()

function flat(arrs){
    let res = [];
    for(const arr of arrs){
        for(const val of arr){
            res.push(val);
        }
    }

    return res;
}

// Arr.slice()

function slice(Arr, start, end = Arr.length){
    let res = [];

    for(var i = start; i<end; i++){
        res.push(Arr[i]);
    }

    return res;
}

// Arr.splice()

function splice(Arr, start, removeVal, ...vals){
    let res = [];
    for(let i = start; i < start + removeVal; i++){
        res.push(Arr[i]);
    }

    if(vals.length === 0){
        for(let i = start; i<start + removeVal; i++){
            if(Arr[i+removeVal]  !== undefined){
                Arr[i] = Arr[i + removeVal]
            }
        }

        Arr.length -= removeVal;
    }
    else{
        if(vals.length === removeVal){
            for(let i = 0; i < vals.length; i++){
                Arr[i+start] = vals[i];
            }
        }
        else if(vals.length > removeVal){
                let diff = vals.length - removeVal;
                
                for (let i = Arr.length - 1; i >= start + removeVal; i--) {
                    Arr[i + diff] = Arr[i];
                }

                for (let i = 0; i < vals.length; i++) {
                    Arr[start + i] = vals[i];
                }

                
            }
        else if (vals.length < removeVal) {
            let diff = removeVal - vals.length;

            for (let i = start + vals.length; i < Arr.length - diff; i++) {
                Arr[i] = Arr[i + diff];
            }

            Arr.length -= diff;

            for (let i = 0; i < vals.length; i++) {
                Arr[start + i] = vals[i];
            }
        }
    }
        

    return res;
}

console.log(splice(Arr1, 2, 1, 5, 6, 7, 8), Arr1);