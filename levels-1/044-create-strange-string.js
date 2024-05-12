// https://school.programmers.co.kr/learn/courses/30/lessons/12930
// 이상한 문자 만들기

function createStrangeString(str) {
  const result = str.split(" ").map((str) => {
    let character = "";
    for (let i = 0; i < str.length; i++) {
      character += i % 2 === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
    }
    return character;
  });

  return result.join(" ");
}

// createStrangeString("try hello world");
// TrY HeLlO WoRlD
