// https://school.programmers.co.kr/learn/courses/30/lessons/12906
// 같은 숫자는 싫어

// filter로 arr[index+1]와 값 비교해서 처리도 가능

function duplicateNumbersRemove(arr) {
  let temp = null;
  const result = [];

  arr.forEach((x) => {
    if (x === temp) {
      return;
    }
    temp = x;
    result.push(x);
  });

  return result;
}

// duplicateNumbersRemove([1, 1, 3, 3, 0, 1, 1]);
// [ 1, 3, 0, 1 ]
