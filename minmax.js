function minmax(arr){
    let min;
    let max;
    let n=arr.length;
    if(n===1){
        min=arr[0];
        max=arr[0];
        return `min = ${min}, max=${max}`;
    }

    if(arr[0]>arr[1]){
        max=arr[0];
        min=arr[1];
    }
    else{
        max=arr[1];
        min=arr[0];
    }

    for(let i=0; i<n; i++){
        if(arr[i]>max){
            max=arr[i];
        }
        else if(arr[i]<min){
            min=arr[i];
        }
    }
    return `min = ${min}, max=${max}`;
}

let arr=[1000, 11, 445, 1, 330, 3000];
console.log(minmax(arr));