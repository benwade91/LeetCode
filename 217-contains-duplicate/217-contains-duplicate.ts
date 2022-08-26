function containsDuplicate(nums: number[]): boolean {
    let set = new Set(nums);
    return set.size !== nums.length
};