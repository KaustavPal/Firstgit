function valid(pushed, popped){
    let stack =[];
    let j=0;
    let i=0;
    while(i<pushed.length){
        stack.push(pushed[i]);
        while(j<popped.length && stack.length!==0 && stack[stack.length-1]==popped[j]){
            stack.pop();
            j++;
        }
        i++;
    }
    if(stack.length===0){
        return true;
    }
    return false;
}

let pushed = [1,2,3,4,5], popped = [4,3,5,1,2];
console.log(valid(pushed, popped));