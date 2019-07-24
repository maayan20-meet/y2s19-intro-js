function sortNumber(a, b)  //credit: https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
{
  return a - b;
}

var numArray = [4, 10, 23, 16];

numArray.sort(sortNumber);

console.log(numArray);