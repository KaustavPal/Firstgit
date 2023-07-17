function product_numbers(n){
    if(n==1 || n==0){
        return 1;
    }
    else if(n<0){

    }
    else{
        return n*product_numbers(n-1);
    }
}
console.log(product_numbers(5));