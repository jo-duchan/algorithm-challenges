// https://school.programmers.co.kr/learn/courses/30/lessons/181836

function solution(picture, k) {
  const answer = picture.reduce((acc, cur) => {
    const repeat = cur.split("").map((s) => s.repeat(k));
    return [...acc, ...Array(k).fill(repeat.join(""))];
  }, []);

  return answer;
}

// solution(["x.x", ".x.", "x.x"], 3);
// [
//   "xxx...xxx",
//   "xxx...xxx",
//   "xxx...xxx",
//   "...xxx...",
//   "...xxx...",
//   "...xxx...",
//   "xxx...xxx",
//   "xxx...xxx",
//   "xxx...xxx",
// ];
