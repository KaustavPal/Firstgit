function countPrimes(n){
    if(n<2){
        return 0;
    }
    let count=0;
    let prime=new Array(n).fill(true);
    for(let i=2; i<Math.sqrt(n); i++){
        if(prime){
            for(let j=i*i; j<n; j=j+i){
                prime[j]=false;
            }
        }
    }

    for(let i=2; i<n; i++){
        if(prime[i]){
            count++;
        }
    }
    return count;
}

let n=10;
console.log(countPrimes(n));