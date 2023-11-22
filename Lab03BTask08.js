class Stack{
    constructor(size){
        this.arr = new Array(size);
        this.capacity = 0;
        this.top = -1;
    }
    isFull(){
        (this.top === this.arr.length) ? true : false;
    }
    isEmpty(){
        (this.top === -1) ? true : false;
    }
    push(value){
        !this.isFull() ? this.arr[++this.top] = value : console.log("Array Index Out Of Bound.");
    }
    pop(){
        if (this.isEmpty()) {
            console.log("Stack is Empty.")
        }
        else {
            return this.arr[this.top--];
        }
    }
    size(){
        this.capacity = this.top + 1;
        return this.capacity;
    }
    peek(){
        return this.arr[this.top];
    }
    print(){
        for (let i = 0; i <= this.top; i++){
            console.log(this.arr[i]);
        }
    }
    
}
function isBalanced(exp){
    let stack = new Stack();

    for(let i = 0; i < exp.length; i++)
    {
        let x = exp[i];
        if (x == '(' || x == '[' || x == '{')
        {
            stack.push(x);
            continue;
        }
        if (stack.size() == 0)
            return false;
            
        let check;
        switch (x){
        case ')':
            check = stack.pop();
            if (check == '{' || check == '[')
                return false;
            break;

        case '}':
            check = stack.pop();
            if (check == '(' || check == '[')
                return false;
            break;

        case ']':
            check = stack.pop();
            if (check == '(' || check == '{')
                return false;
            break;
        }
    }
    return (stack.size() == 0);
}
let exp = "{[({})]}";
exp = "{[({}]}";
console.log(isBalanced(exp))
