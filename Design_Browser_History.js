/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.history = [homepage];
    this.current = 0;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
    this.history.splice(this.current + 1, this.history.length - this.current -1);
    this.history.push(url)
    this.current++;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
    if (this.current < steps) {
        this.current = 0;
        return this.history[0];
    } else {
        this.current = this.current - steps;
        return this.history[this.current];
        
    }
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
    const len = this.history.length - 1 - this.current
    if (this.current !== this.history.length - 1) {
        if (len < steps) {
            this.current = this.history.length-1
            return this.history[this.current];
        } else {
            this.current = this.current + steps
            return this.history[this.current];
        }
    }else return this.history[this.current];
        
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */