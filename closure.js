
const name1 = (arr) => {
    let count = 0;
    return () =>{
        console.log("Hello "+ arr[count]);
        count++;
    }

}

const fun = name1(["Ram", "Shyam"]);
fun(); //Prints Hello Ram
fun(); //Prints Hello Shyam