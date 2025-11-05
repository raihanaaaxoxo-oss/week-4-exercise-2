function sum(n){
    if (typeof n !== "number" || n % 1 !== 0){
        return "the input must be a numerical value";
    }
    let total = 0;
    for (let x = 0; x <= n; x++){
        total += x;
    }
    return total;
}

console.log(sum(86));
console.log(sum("what"));
console.log(sum(-21));

function factorial(num){
    if (typeof num !== "number" || num <= 0 || num % 1 !== 0){
        return "the input must be a posistive numerical value";
    }
    let result = 1;
    for (let x = num; x > 0; x--){
        result *= x;
    }
    return result;
}

console.log(factorial(-79));
console.log(factorial(8));
console.log(factorial("why"));


function funkyMath(...args){
    if (args.length === 2){
        return args[1] - args[0];
    }
    else if (args.length === 3){
        return args [0] + args[1] + args[2];
    }
    else if (args.length === 4){
        const sum1 = args[0] + args[1];
        const sum2 = args[2] + args[3];
        const result = sum1 / sum2;
        return parseFloat(result.toFixed(2));
    }
    else{
        return "this function only allows 2, 3, or 4, inputs";
    }
}

console.log(funkyMath(24, 58));
console.log(funkyMath(95, 16, 34));
console.log(funkyMath(144, 56, 25, 6));
console.log(funkyMath(3));


let arr = [1, 2, 33, 45, 6, 44];
let oddNums = [];

for (let x = 0; x < arr.length; x++){
    if (arr[x] % 2 !== 0){
        oddNums.push(arr[x]);
    }
}
oddNums.sort((a, b) => a - b);

console.log("the odd numbers in the array are ", oddNums);


const me = {
    firstName: "raihana",
    lastName: "karim",
    age: 18,
    favouriteColour: "brown",
    dreamCar: "mercedes benz g 580",
};
me.favouriteFood = "seafood pasta";
delete me.age;

for ( const key in me){
    console.log(key + ": " + me[key]);
}
