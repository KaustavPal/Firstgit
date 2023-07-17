let arr=[];
function permute(init,fin){
   if(init.length===0){
        arr.push(fin);
    }
    for(let i=0; i<init.length; i++){
        let newfin=fin; 
        newfin=newfin+init[i];
        let newinit=init.substring(0,i)+init.substring(i+1);
        permute(newinit, newfin);
    }
    return;  
}
permute("abc","")
console.log(arr);

