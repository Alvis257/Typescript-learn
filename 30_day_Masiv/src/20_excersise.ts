function flatten(arr: any): any {
    let newArr = arr.join([","]);
    return newArr;
}

var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];