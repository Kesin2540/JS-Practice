const Arr1 : number[] = [1, 2, 3, 4];
const Arr2 : number[][] = [[1,2],[3,4],[5,6],[7,8]];

function len(Arr : number[]) : number{
    let cnt : number = 0;
    for(let i of Arr){
        cnt++;
    }

    return cnt;
}

function str(Arr : number[]) : String{
    let str : string = "";
    let first :boolean = true
    for(let i of Arr){
        if(!first){
            str += ",";
        }
        str += i;
        first = false;
    }

    return str;
}

function at(Arr : number[], idx : number) : number{
    return Arr[idx];
}

function join(Arr : number[], sep : string) : string{
    let str :string = "";
    let first : boolean = true
    for(let i of Arr){
        if(!first){
            str += sep;
        }
        str += i;
        first = false;
    }

    return str;
}

function pop(Arr : number[]) : number{
    let res : number = Arr[Arr.length - 1];
    Arr.length -= 1;
    return res;
}

function push(Arr : number[], val : number) : number{
    Arr.length += 1;
    Arr[Arr.length - 1] = val;
    return Arr.length;
}

function shift(Arr : number[]) : number{
    let shiftVal : number = Arr[0];

    for(let i = 1; i<Arr.length; i++){
        Arr[i - 1] = Arr[i];
    }

    Arr.length -= 1;

    return shiftVal
}

function unshift(Arr : number[], val : number) : number{
    Arr.length += 1;

    for(let i = Arr.length - 1; i>=0; i--){
        Arr[i] = Arr[i-1];
    }

    Arr[0] = val;

    return Arr.length;
}

function del(Arr : (number | undefined)[] , idx : number){
    Arr[idx] = undefined;
}

function concat(...arrs : number[][]) : number []{
    let res : number[] = [];
    for(let arr of arrs){
        for(const val of arr){
            res.push(val);
        }
    }

    return res;
}

function flat(arrs : number[][]) : number[]{
    let res : number[] = [];
    for(const arr of arrs){
        for(const val of arr){
            res.push(val);
        }
    }

    return res;
}
export {};