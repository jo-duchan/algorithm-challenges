// https://school.programmers.co.kr/learn/courses/30/lessons/70129
// 이진 변환 반복하기

function binaryRecursiveConvert(s) {
  const recursive = (value, recursiveCount, removeCount) => {
    if (value === "1") return [recursiveCount, removeCount];

    let temp = "";
    recursiveCount++;

    [...value].forEach((x) => {
      if (x === "0") removeCount++;
      if (x === "1") temp += "1";
    });

    return recursive(temp.length.toString(2), recursiveCount, removeCount);
  };

  return recursive(s, 0, 0);
}

// binaryRecursiveConvert("110010101001");
// [ 3, 8 ]
