/**
 * You are organizing an event and asked people to add their name to a list, if they want to attend.
 * But, oh no, some people wrote their name twice.
 * Create a function that takes an array of items, removes all duplicate items and
 * returns a new array in the same sequential order as the old array (minus duplicates).
 */

function doubleTrouble(list: string[]) {
    let newArr: string[]=[""];
    let i=0;
   list.map(element => {
        let index = newArr.indexOf(element)
        if (index >= 0) {
            newArr[i] = element;
            i++;
        }
    });
    return newArr;
}

export { doubleTrouble };
