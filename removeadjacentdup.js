function remove(s){
    const stack = [];
    for(let i=0; i<s.length; i++){
        if(stack.length!==0 && stack[stack.length-1]==s[i]){
            stack.pop();
        }
        else{
            stack.push(s[i]);
        }
    }
    let temp="";
    let ans="";
    if(stack.length !==0){
        while(stack.length!==0){     
            temp += stack.pop();
        }
        for(let i=temp.length-1; i>=0; i--){
            ans += temp[i];
        }
        return ans;
    }
 
}

let s="abbaca";
console.log(remove(s));