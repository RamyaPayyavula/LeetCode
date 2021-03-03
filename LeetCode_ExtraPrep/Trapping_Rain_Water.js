/**
 * @param {number[]} height
 * @return {number}
 */
//brute force solution
var trap = function(height) {
    let res = 0
    for (let i = 0; i < height.length; i++){
        let lmax = 0, rmax = 0
        for (let j = 0; j < i; j++){
            lmax = Math.max(lmax, height[j])
        }
        for (let j = i+1; j < height.length; j++){
            rmax = Math.max(rmax, height[j])
        }
        const waterInBuild = Math.min(lmax, rmax)
        const wi = waterInBuild - height[i] < 0 ? 0 : waterInBuild - height[i] 
        res = res + wi
    }
    return res
};

// improvising dynamic programming
var trap = function(height) {
    let res = 0
    let n= height.length
    let leftMax = [height[0]]
    let rightMax = []
    rightMax[n-1] = [height[n - 1]]
    
    for (let j = 1; j < n; j++){
        leftMax[j] = Math.max(leftMax[j-1], height[j])
    }
    for (let j = n-2; j >=0; j--){
        rightMax[j] = Math.max(rightMax[j+1], height[j])
    }
    for (let i = 0; i < height.length; i++){
        const waterInBuild = Math.min(leftMax[i], rightMax[i])
        const wi = waterInBuild - height[i] < 0 ? 0 : waterInBuild - height[i] 
        res = res + wi
    }
    return res
};

console.group(trap([4, 2, 0, 3, 2, 5]))
console.group(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))

