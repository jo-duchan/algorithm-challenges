// https://school.programmers.co.kr/learn/courses/30/lessons/120913

function solution(my_str, n) {
  const answer = [];

  for (let i = 0; i < my_str.length; i += n) {
    answer.push(my_str.slice(i, i + n));
  }

  return answer;
}

// solution("abc1Addfggg4556b", 6);
// ["abc1Ad", "dfggg4", "556b"]
