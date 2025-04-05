// https://school.programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  const maxLength = brown + yellow;
  const outer = {
    w: 0,
    h: 0,
  };
  let count = 0;

  while (outer.w * outer.h !== maxLength) {
    count++;

    if (yellow % count !== 0) continue;

    const inner = {
      w: yellow / count,
      h: count,
    };

    outer.w = inner.w + 2;
    outer.h = inner.h + 2;
  }

  return [outer.w, outer.h];
}

solution(10, 2);

24, 1;

26, 3 != 48;

12, 2;

14, 4 != 48;

6, 4;

8, 6 == 48;
