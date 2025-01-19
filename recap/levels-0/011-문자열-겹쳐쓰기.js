// https://school.programmers.co.kr/learn/courses/30/lessons/181943

function solution(my_string, overwrite_string, s) {
  const answer = [...my_string];

  for (let i = 0; i < overwrite_string.length; i++) {
    answer[i + s] = overwrite_string[i];
  }

  return answer.join("");
}

// solution("He11oWor1d", "lloWorl", 2);
// HelloWorld
