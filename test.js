let a=[4,82,1,5,-5,8];
console.log(a);
console.log("*************After Sorting*************");
for(let i=0; i<a.length; i++){
    if(a[i+1]<a[i]){
        let temp=a[i+1];
        a[i+1]=a[i];
        a[i]=temp;
        i=-1;
    }
}
console.log(a);