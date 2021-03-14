/**
 * @param {string} path
 * @return {string}
 */
class stack {
    constructor(items){
        this.items = items;
    }
    pop(){
        return this.items.pop();
    }
    push(element){
        return this.items.push(element);
    }
    isEmpty(){
        return this.items.length === 0
    }
    getLastElement(){
        if(this.isEmpty()){
            return null;
        }
        return this.items[this.items.length-1];
    }
    getSecondLastElement(){
        if(this.isEmpty() || this.items.length <2){
            return null;
        }
        return this.items[this.items.length-2];
    }
    getArray(){
        const temp = [];
        for(let i=0; i< this.items.length; i++){
            temp.push(this.items[i]);
        }
        return temp;

    }
    getLength(){
        return this.items.length;
    }
}
var simplifyPath = function(path) {
    const givenArray = Array.from(path).reverse();
    const stackObj1 = new stack(givenArray);
    const resultArray = [];
    const stackObj2 = new stack(resultArray);
    while( stackObj1.getLength() !== 0){
        const temp = stackObj1.pop();
        if(temp !== '/' && temp !== '.'){
            stackObj2.push(temp);
        }
        else if(temp === '/'){
            if( stackObj2.isEmpty() || stackObj2.getLastElement() !== '/'){
                stackObj2.push(temp);
            }
        }
        else if(temp === '.'){
            if(stackObj1.getLastElement() === '.' && stackObj1.getSecondLastElement() !== '.'){
                stackObj2.pop();
                stackObj2.pop();
                stackObj2.pop();
            }
            if(stackObj1.getLastElement() === '.' && stackObj1.getSecondLastElement() === '.'){
                stackObj2.push('.');
                stackObj2.push('.');
                stackObj2.push('.');
                stackObj1.pop();
                stackObj1.pop();
            }

        }
    }
    if(stackObj2.getLastElement() === '/'){
        stackObj2.pop();
    }
    if(stackObj2.isEmpty()){
        stackObj2.push('/');
    }
    const result = stackObj2.getArray().join('');
    console.log(result);
    return result;
};

//simplifyPath('/a/./b/../../c/');
// simplifyPath('/a/../../b/../c//.//');
// simplifyPath('/a//b////c/d//././/..');
// simplifyPath('/home/');
// simplifyPath('/../');
simplifyPath('/...');

// simplifyPath('/home//foo/');
