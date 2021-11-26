/**
 * Remove array element(s) by value.
 * @param {Value to be remove} value 
 * @returns Array which removed value.
 */
Array.prototype.remove = function(value) {
    let index = 0;
    do {
      index = this.indexOf(value);
      if(index >=0)
        this.splice(index, 1);
    } while(index < 0)
}
