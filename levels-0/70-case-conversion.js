// 배열에서 문자열 대소문자 변환하기

function caseConversion(arr) {
  const result = arr.map((str, idx) =>
    !(idx % 2) ? str.toLowerCase() : str.toUpperCase()
  );

  return result;
}

// caseConversion(["AAA", "BBB", "CCC", "DDD"]);
// [ 'aaa', 'BBB', 'ccc', 'DDD' ]
