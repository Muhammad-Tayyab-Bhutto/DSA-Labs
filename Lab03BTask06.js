class Stack {
    constructor(size) {
        this.arr = new Array(size);
        this.capacity = 0;
        this.top = -1;
    }
    isFull() {
        (this.top === this.arr.length) ? true : false;
    }
    isEmpty() {
        if (this.top === -1) return true; else false;
    }
    push(value) {
        !this.isFull() ? this.arr[++this.top] = value : console.log("Array Index Out Of Bound.");
    }
    pop() {
        if (this.isEmpty()) {
            console.log("Stack is Empty.")
        }
        else {
            return this.arr[this.top--];
        }
    }
    size() {
        this.capacity = this.top + 1;
        return this.capacity;
    }
    peek() {
        return this.arr[this.top];
    }
    insert(element, stack) {
        if (!stack.isEmpty() && element > stack.peek()) {
            let top = stack.peek();
            stack.pop();
            this.insert(element, stack);
            stack.push(top);
        }
        else {
            stack.push(element);
        }
    }

    sortStack(stack) {
        if (!stack.isEmpty()) {
            let top = stack.peek();
            stack.pop();
            this.sortStack(stack);
            this.insert(top, stack);
        }
        return stack;
    }
    print() {
        for (let i = 0; i <= this.top; i++) {
            console.log(this.arr[i]);
        }
    }
    
}
function postFix(str) {
    let stack = new Stack(str.length);
    for (let i = 0; i < str.length; i++) {
        let c = str[i];
        if (!isNaN(parseInt(c)))
            stack.push(c.charCodeAt(0) - '0'.charCodeAt(0));
        else {
            let val1 = stack.pop();
            let val2 = stack.pop();

            switch (c) {
                case '+':
                    stack.push(val2 + val1);
                    break;

                case '-':
                    stack.push(val2 - val1);
                    break;

                case '/':
                    stack.push(val2 / val1);
                    break;

                case '*':
                    stack.push(val2 * val1);
                    break;
            }
        }
    }
    return stack.pop();
}
let str = "921*-8-4+";
console.log(postFix(str));