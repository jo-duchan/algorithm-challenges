// https://school.programmers.co.kr/learn/courses/30/lessons/120890

function solution(array, n) {
  let closest = array[0];
  let minDiff = Math.abs(array[0] - n);

  for (let i = 1; i < array.length; i++) {
    const currentDiff = Math.abs(array[i] - n);

    if (
      currentDiff < minDiff ||
      (currentDiff === minDiff && array[i] < closest)
    ) {
      closest = array[i];
      minDiff = currentDiff;
    }
  }

  return closest;
}

// solution([3, 3, 4, 4, 5, 5, 6, 6], 5);
// 5
