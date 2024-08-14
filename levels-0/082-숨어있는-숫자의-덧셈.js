// https://school.programmers.co.kr/learn/courses/30/lessons/120864

function solution(my_string) {
  var answer = 0;

  while (my_string.length) {
    const current = parseInt(my_string);
    const length = Number.isInteger(current) ? current.toString().length : 1;

    if (Number.isInteger(current)) {
      answer += current;
    }

    my_string = my_string.slice(length);
  }

  return answer;
}

// solution("aAb1B2cC34oOp");
// 37
