let n=6969
let reverse=0
while (n!=0) {
  let remainder = n%10;
  reverse = reverse * 10 + remainder;
    n =Math.floor (n / 10);
}
console.log(reverse);