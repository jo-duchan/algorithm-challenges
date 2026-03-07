// https://school.programmers.co.kr/learn/courses/30/lessons/181856

function solution(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return arr1.length > arr2.length ? 1 : -1;
  }

  const sumArr1 = arr1.reduce((acc, cur) => (acc += cur), 0);
  const sumArr2 = arr2.reduce((acc, cur) => (acc += cur), 0);

  if (sumArr1 !== sumArr2) {
    return sumArr1 > sumArr2 ? 1 : -1;
  }

  return 0;
}

solution([49, 13], [70, 11, 2]);
// -1
