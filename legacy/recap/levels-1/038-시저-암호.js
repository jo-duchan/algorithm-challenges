// https://school.programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
  const answer = s.split('').map((x) => {
    const ascii = x.charCodeAt();
    const isUppercaseRange = ascii >= 65 && ascii <= 90;
    const isLowercaseRange = ascii >= 97 && ascii <= 122;
    const shifted = (startIndex) =>
      ((ascii - startIndex + n) % 26) + startIndex;

    if (isUppercaseRange) {
      return String.fromCharCode(shifted(65));
    }

    if (isLowercaseRange) {
      return String.fromCharCode(shifted(97));
    }

    return x;
  });

  return answer.join('');
}

// solution('a B z', 4);
// "e F d"
