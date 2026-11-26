const Arr1 : number[] = [1, 2, 3, 4];
const Arr2 : number[][] = [[1,2],[3,4],[5,6],[7,8]];

function len(Arr : number[]) : number{
    let cnt : number = 0;
    for(let i of Arr){
        cnt++;
    }

    return cnt;
}

export {};