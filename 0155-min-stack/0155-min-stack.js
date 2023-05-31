class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val);

        // Update the minimum stack if the value is smaller or equal to the current minimum
        if (this.minStack.length === 0 || val <= this.getMin()) {
            this.minStack.push(val);
        }
    }

    pop() {
        const popped = this.stack.pop();

        // If the popped element is the current minimum, remove it from the minimum stack
        if (popped === this.getMin()) {
            this.minStack.pop();
        }
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
