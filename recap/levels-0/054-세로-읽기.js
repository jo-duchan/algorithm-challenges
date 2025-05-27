// https://school.programmers.co.kr/learn/courses/30/lessons/181904

function solution(my_string, m, c) {
  let answer = '';
  const rows = my_string.length / m;

  for (let i = 0; i < rows; i++) {
    answer += my_string[i * m + (c - 1)];
  }

  return answer;
}

// solution('ihrhbakrfpndopljhygc', 4, 2);
// "happy"
