// https://school.programmers.co.kr/learn/courses/30/lessons/12915
// 문자열 내 마음대로 정렬하기

// localeCompare 메서드는
// 문자열의 사전상 순서에서 해당 문자가 뒤에 있는지 앞에 있는지 또는 같은지를 판단하여
// 1, 0, -1의 반환 값을 주는 메서드

function stringSort(arr, n) {
  const result = arr.sort((a, b) => {
    if (a[n] === b[n]) {
      return a.localeCompare(b);
    }

    return a[n].localeCompare(b[n]);
  });

  return result;
}

// stringSort(["sun", "bed", "car"], 1);
// [ 'car', 'bed', 'sun' ]
