function natural_numbers(n){
    if(n<=0){
        return 0;
    }
    else{
        return n+natural_numbers(n-1);
    }
}
console.log(natural_numbers(5));