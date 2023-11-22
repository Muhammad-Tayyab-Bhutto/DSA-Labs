function replaceNegativeNumberWithZero(n, arr)
{
  if (n==0) return;
  if(arr[n-1] < 0) arr[n-1]=0;
  replaceNegativeNumberWithZero(n-1,arr);
}

let arr = [1, -9, 9, -4, 5, 10]
replaceNegativeNumberWithZero(arr.length, arr)
console.log(arr)
