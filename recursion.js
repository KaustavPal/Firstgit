
let addition = function(i,n){
    let sum=0;
    if(i>=10 || i==n){
        return 0;
    }
    else{
        sum=i+addition(i+2,n);
        return sum;      
    }
}
console.log(addition(0,5));






 