/*function mergeSort(nums){
    if(nums.length<=1){
        return nums;
    }
    let mid = Math.floor(nums.length/2);
    let left = mergeSort(nums.slice(0, mid));
    let right = mergeSort(nums.slice(mid));
    return merge(left, right);
}
function merge(arr1, arr2){
    let ans=[];
    let i=0;
    let j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<=arr2[j]){
            ans.push(arr1[i]);
            i++;
        }
        else{
            ans.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length){
        ans.push(arr1[i]);
        i++;
    } 
    while(j<arr2.length){
        ans.push(arr2[j]);
        j++;
    }
    return ans;
}*/
//console.log(mergeSort([1,5,8,3,4,9,6,7,2]));


function divide(a, i, j){
    if(i>=j){
        return;
    }
    let mid=Math.floor((i+j)/2);
    divide(a, i, mid);
    divide(a, mid+1, j);
    merge(a, i, mid, mid+1, j);
}
function merge(a, start1, end1, start2, end2){
    let b=[];
    let counter=0;
    let i=start1;
    let j=start2;
    while(i<=end1 && j<=end2){
        if(a[i]<a[j]){
            b[counter]=a[i];
            i++;
            counter++;
        }
        else{
            b[counter]=a[j];
            j++;
            counter++;
        }
    }
    while(i<=end1){
        b[counter]=a[i];
        i++;
        counter++;
    }
    while(j<=end2){
        b[counter]=a[j];
        j++;
        counter++;
    }
    counter=0;
    for(i=start1; i<=end2; i++){
        a[i]=b[counter];
        counter=counter+1;
    }
}
let a=[1,2,5,3,4,9,6,8,7];
divide(a,0,a.length-1);
for(let i=0;i<a.length;i++){
    console.log(a[i]);
}