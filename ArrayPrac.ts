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

export {};