function twoSums(nums, target){
    let eleMap = new Map();
    for(let i=0; i<nums.length; i++){
        let a=nums[i];
        b=target-a;
        if(eleMap.has(b)){
            return [eleMap.get(b), i];
        }
        else{
            eleMap.set(a, i);
        }
    }
}
let nums = [2,7,11,15], target = 9;
console.log(twoSums(nums, target));