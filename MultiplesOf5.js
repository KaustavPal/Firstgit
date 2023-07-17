function print_output(n){
        if(n==0){
            console.log(0);
            return;
        }
        else{
            print_output(n-5);
            console.log(n);
            
        }

}
print_output(30);