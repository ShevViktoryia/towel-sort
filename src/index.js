
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
  if(arguments.length) {
    for(let i = 0; i < matrix.length; i++) {
      (i % 2 !== 0) ? res.push(matrix[i].reverse()) : res.push(matrix[i]);
    }
    return res.length ? res.reduce((a, b) => a.concat(b)) : [];
  }
  return [];
}
