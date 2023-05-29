let a = "cdeenetpi";
let A = [5, 2, 0, 1, 6, 4, 8, 3, 7];

let index = A[0];
let str = a[0];

for (let i = 1; i < A.length; i++) {
  str += a[index];
  index = A[index];
}
console.log(str);
