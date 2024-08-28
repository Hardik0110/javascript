// const my_arr = input => {
//     if(toString.call(input) === "[object Array]"){
//         return true;
//     }
//     return false;
// }

// console.log(my_arr("web3school"));
// console.log(my_arr([1,2,3,4]));

// var my_arr = function(array1){
//     return array1.slice(0);
// }

// console.log(my_arr([1,2,3,4]));
// console.log(my_arr.typeof);

var first = function(array,n){
    if(array == null)
        return void (0);
    if(n== null)
        return array[0];
    if(n < 0 )
        return [];

    return array.slice(0,n);
}

console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));