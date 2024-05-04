// https://school.programmers.co.kr/learn/courses/30/lessons/131701
// 연속 부분 수열 합의 개수

function sumOfPartialSequences(elements) {
  // 중복 제거
  const sumSet = new Set();

  for (let i = 0; i < elements.length; i++) {
    let sum = 0;
    for (let j = 0; j < elements.length; j++) {
      // elements.concat(elements)[i + j]
      // (i + j) % elements.length와 동일하게 인덱스 순회
      sum += elements[(i + j) % elements.length];
      sumSet.add(sum);
    }
  }

  return sumSet.size;
}

// sumOfPartialSequences([7, 9, 1, 1, 4]);
// 18
