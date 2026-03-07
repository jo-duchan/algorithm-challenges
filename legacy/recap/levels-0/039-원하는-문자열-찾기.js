// https://school.programmers.co.kr/learn/courses/30/lessons/181878

function solution(myString, pat) {
  const lowerMyString = myString.toLocaleLowerCase();
  const lowerPat = pat.toLocaleLowerCase();

  return lowerMyString.includes(lowerPat) ? 1 : 0;
}

// solution('AbCdEfG', 'aBc');
// 1
