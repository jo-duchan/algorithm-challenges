// https://school.programmers.co.kr/learn/courses/30/lessons/120894

function solution(numbers) {
  let temp = "";
  const numObj = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  const answer = [...numbers].reduce((acc, cur) => {
    temp += cur;

    if (numObj[temp]) {
      acc += numObj[temp];
      temp = "";
    }

    return acc;
  }, "");

  return parseInt(answer);
}

// solution("onefourzerosixseven");
// 14067
