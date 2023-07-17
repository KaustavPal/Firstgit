let multiply = function (x, y) {
    console.log(x * y);
}

/*let multiplybyTwo = function (y) {
    let x= 2;
    console.log(x * y);
}*/

let multiplayByTwo = multiply.bind(this, 2); //->can be written like this. But this is the best way
multiplayByTwo(5);

/*let multiplayByTwo = multiply.bind(this, 2, 3); //->can be written like this
multiplayByTwo();*/

/*let multiplayByTwo = multiply.bind(this); //->can be written like this
multiplayByTwo(2, 3);*/

let multiplayByThree = multiply.bind(this, 3); //->But this is the best way
multiplayByThree(5);

//currying using function closure

let multi = function (x) {
    return function (y) {
        console.log(x * y);
    }
}
let multiByTwo = multi(2);
multiByTwo(3);

let multiByThree = multi(3);
multiByThree(10);