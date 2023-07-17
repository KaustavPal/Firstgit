//Currying

/*function addAconstantValue(constant1) {
    return (value) => {
        return value + constant1;
    }
}

console.log(addAconstantValue(15)(2));
//or
function addAconstantValue(constant1) {
    return (value) => {
        return value + constant1;
    }
}

const function_with_constant_added = addAconstantValue(15);

////100 line

console.log(function_with_constant_added(3));
//or*/
function addAconstantValue(constant1) {

    constant1 = constant1 + 20;

    return (value) => {
        return (value2) => value + constant1 + value2;
    }
}

const function_with_constant_added = addAconstantValue(15);

console.log(function_with_constant_added(3)(2));