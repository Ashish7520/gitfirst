let multiply = function(a,b){
    console.log(a*b);
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

let multiplyByThree= multiply.bind(this, 3);
multiplyByThree(10);