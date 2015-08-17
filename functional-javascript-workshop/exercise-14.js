function repeat(operation, num) {
  // Modify this so it doesn't cause a stack overflow!
  if (num <= 0) return false
  operation()
  return true
}

function trampoline(fn) {
  if( repeat(fn.operation, fn.num) ){
    repeat(fn.operation, fn.num - 1);
  }
}

module.exports = function(operation, num) {
  this.operation = operation;
  this.num = num;
  trampoline(this); 
}