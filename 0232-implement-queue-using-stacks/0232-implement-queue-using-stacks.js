var MyQueue = function() {
  this.inputStack = [];   // Used for pushing elements
  this.outputStack = [];  // Used for popping elements
    //use 2 stacks for efficency and simplicity 
};

MyQueue.prototype.push = function(x) {
  this.inputStack.push(x);
};

MyQueue.prototype.pop = function() {
  this._shiftStacks();
  return this.outputStack.pop();
};

MyQueue.prototype.peek = function() {
  this._shiftStacks();
  return this.outputStack[this.outputStack.length - 1];
};

MyQueue.prototype.empty = function() {
  return this.inputStack.length === 0 && this.outputStack.length === 0;
};

MyQueue.prototype._shiftStacks = function() {
    //check if empty and shift only when necessary
  if (this.outputStack.length === 0) {
    while (this.inputStack.length > 0) {
      this.outputStack.push(this.inputStack.pop());
        //reverses order for FIFO 
    }
  }
};

