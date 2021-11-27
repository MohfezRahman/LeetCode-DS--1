var containsDuplicate=function(nums){
    const visited ={}
    for(var i=0; i<nums.length;i++){
        const num =nums[i]
        if(visited[num]!==undefined ){
            return true
        }
        visited[num]=i
    }
    return false
}
console.log(containsDuplicate([1,2,3,0]))