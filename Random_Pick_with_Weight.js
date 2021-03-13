/**
 * @param {number[]} w
 */
var Solution = function(w) {
  this.weights =[]
  this.sum=0;
  for (let i=0; i<w.length; i++) {
    this.sum += w[i];
    this.weights.push(this.sum)
  }
};

Solution.prototype.pickIndex = function() {
    let index = Math.floor(Math.random() * this.sum);
    let arr = this.weights
    let start = 0, end = arr.length - 1
    while(start <= end){
        let mid = Math.floor((start + end) / 2)
        if(index < arr[mid]){
            end = mid - 1
        }else{
            start = mid + 1
        }
    }
    return start
};

 var obj = new Solution([1,3])
 var param_1 = obj.pickIndex()
/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 * 
 **/
