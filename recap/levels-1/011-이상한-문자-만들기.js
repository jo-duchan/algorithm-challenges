// https://school.programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
  const wordArr = s.split(" ");
  const answer = wordArr.map((word) => {
    let temp = "";
    for (let i = 0; i < word.length; i++) {
      temp +=
        i % 2 === 0 ? word[i].toLocaleUpperCase() : word[i].toLocaleLowerCase();
    }
    return temp;
  });

  return answer.join(" ");
}

// solution("try hello world");
// "TrY HeLlO WoRlD"
