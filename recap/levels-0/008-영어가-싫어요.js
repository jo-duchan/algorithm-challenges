// https://school.programmers.co.kr/learn/courses/30/lessons/120894

function solution(numbers) {
  let answer = numbers;
  const numberSpell = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0,
  };

  Object.entries(numberSpell).forEach(([key, val]) => {
    answer = answer.replaceAll(key, val);
  });

  return answer;
}

// solution("onetwothreefourfivesixseveneightnine");
// 123456789
