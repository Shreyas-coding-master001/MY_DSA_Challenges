let arr = [1,2,3,4,5,6,7,8,1,1,2,3,3,4,5,5,5,5,6,7,7,6,8,8];

let map = new Map();

for(let i=0; i< arr.length; i++){
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
}

console.log(map.get(undefined));

