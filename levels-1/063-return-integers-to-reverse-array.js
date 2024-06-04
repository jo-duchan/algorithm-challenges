// https://school.programmers.co.kr/learn/courses/30/lessons/12932
// 자연수 뒤집어 배열로 만들기

function returnIntegersToreverse(n) {
  const convertToStringArr = n.toString().split("");
  const convertToIntegerArr = convertToStringArr.map((x) => parseInt(x));

  return convertToIntegerArr.reverse();
}

returnIntegersToreverse(12345);
// [ 5, 4, 3, 2, 1 ]
