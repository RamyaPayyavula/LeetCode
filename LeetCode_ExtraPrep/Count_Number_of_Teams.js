/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    let res =0
    for (let i = 0; i < rating.length; i++){
        let descLeft = 0
        let descRight = 0
        let ascLeft = 0
        let ascRight = 0
        //left
        for (let j = 0; j < i; j++){
            if (rating[j] < rating[i]) ascLeft++
            if (rating[j] > rating[i]) descLeft++
        }
        //right
        for (let k = i+1; k < rating.length; k++){
            if (rating[k] < rating[i]) descRight++
            if (rating[k] > rating[i]) ascRight++
        }
        res += (descLeft * descRight) + (ascLeft * ascRight)
    }
    return res
};

console.log(numTeams([2,5,3,4,1]))