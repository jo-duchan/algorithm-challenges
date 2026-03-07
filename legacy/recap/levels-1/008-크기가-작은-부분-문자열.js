// https://school.programmers.co.kr/learn/courses/30/lessons/147355

function solution(t, p) {
  let start = 0;
  let end = p.length;
  const answer = [];

  while (true) {
    const temp = t.slice(start, end);

    if (temp.length < p.length) {
      break;
    }

    if (Number(temp) <= Number(p)) {
      answer.push(temp);
    }

    start++;
    end++;
  }

  return answer.length;
}

// solution("3141592", "271");
// 2
