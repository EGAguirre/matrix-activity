const Matrix = require("matrix-js");


let A = Matrix([
    [0,1,1,1],
    [1,0,1,0],
    [1,1,0,0],
    [1,0,0,0]
]);

function power(mtrx,p){
    //mtrx is the matrix you input
    //p is the power of the matrix you want
    while p < 10
    let squared = matrix(A.prod(A));//A^2
    let fourth = matrix(squared.prod(squared));//A^4
    let eight = matrix(fourth.prod(fourth));//A^8
    let tenth = matrix(fifth.prod(fifth));//A^10

}


//testing code
console.log(power(A,10));
