//problem statement: given an nested array - [1, [2, [3, 4], 5], 6] make it flatern without using flat()
//input : [1, [2, [3, 4], 5], 6]
//output : [1, 2, 3, 4, 5, 6]

function deepFlatten(arr){
    let temp =[];
    for(let i = 0 ; i < arr.length ; i++){
        if(Array.isArray(arr[i])) {
            temp.push(...deepFlatten(arr[i]))
        }
        else{
            temp.push(arr[i])
        }
    }
    return temp;
}
const res = deepFlatten([1, [2, 3, [4, 5, 6], 7, 8], 9]);
console.log(res)