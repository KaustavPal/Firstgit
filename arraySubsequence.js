function subsequence(init, fin){
    if(init.length==0){
        ans.push(fin);
        return;
    }
        let newfin=fin;
        let newinit=init;
        //if I choose
        newfin=newfin+newinit[0];
        newinit=init.slice(1);
        subsequence(newinit, newfin);
        //if I don't choose
        init=init.slice(1);
        subsequence(init, fin);
        
}
let arr=[1,2,3];
let ans=[];
subsequence(arr, "");
console.log(ans); //print the final array with all the subsequence stored as strings inside the array

//change all the string inside the to integer array
//because ans.push(fin) store all the subsequence as string inside the ans array
//then print the subsequence
for(let i=0;i<ans.length;i++){
    console.log(ans[i].split('').map(Number));  
}
