// https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s, stats = [0, 0]) {
  if (s === '1') return stats;

  const originalLength = s.length;
  const zerosRemoved = originalLength - s.replaceAll('0', '').length;

  const steps = stats[0] + 1;
  const totalZerosRemoved = stats[1] + zerosRemoved;

  const nextBinary = (originalLength - zerosRemoved).toString(2);

  return solution(nextBinary, [steps, totalZerosRemoved]);
}

// solution('01110');
// [ 3, 8 ]
