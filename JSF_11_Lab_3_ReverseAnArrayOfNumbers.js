function reverseAnArrayOfNumbers(n, arr){
    let newArr = [];
    for(let i = 0; i < n; i++){
        newArr.push(arr[i]);
    }
    newArr = newArr.reverse();
    console.log(newArr.join(' '));
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]) 
//30 20 10
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]) 
//5 99 20 -1
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47])
//43 66
