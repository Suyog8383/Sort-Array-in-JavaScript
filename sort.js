   let nums=[2,5,9,1,3,4];
    
    function sortArray(nums){
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
        if(nums[j]>nums[i]){
            let temp=nums[i];
            nums[i]=nums[j];
            nums[j]=temp;
        }
        }
    }
    return nums;
    }
    console.log(sortArray(nums))
