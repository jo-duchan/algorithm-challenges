// https://school.programmers.co.kr/learn/courses/30/lessons/181902

function solution(my_string) {
  const answer = Array(52).fill(0);

  for (let i = 0; i < my_string.length; i++) {
    const asciiCode = my_string[i].charCodeAt();
    const index = asciiCode >= 97 ? asciiCode - 71 : asciiCode - 65;

    answer[index] = answer[index] + 1;
  }

  return answer;
}

// solution('Programmers');
// [
//   0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//   1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0,
// ]
