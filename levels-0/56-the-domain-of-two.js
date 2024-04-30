// 2의 영역

function theDomainOfTwo(arr) {
  const begin = arr.indexOf(2);
  const end = arr.lastIndexOf(2);

  return begin === -1 ? [begin] : arr.slice(begin, end + 1);
}

// theDomainOfTwo([1, 2, 1]);
// [ 2 ]
