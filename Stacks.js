class Stack{
    constructor(){
        this.top=-1;
        this.stack=[];
    }
    push(element){
        this.top = this.top+1;
        this.stack[this.top]=element;
    }
    pop(){
        this.stack.pop();
        this.top =this.top-1;
    }
    peek(){
        console.log(this.stack[this.top]);
    }
    isEmpty(){
        if(this.top==-1){
            return true;
        }
        else{
            return false;
        }
    }
}

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(4);
myStack.push(8);
myStack.push(16);
console.log(myStack);
myStack.peek();
myStack.pop();
console.log(myStack);
console.log(myStack.isEmpty());