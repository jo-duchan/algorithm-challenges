// https://school.programmers.co.kr/learn/courses/30/lessons/12919
// 서울에서 김서방 찾기

function returnFoundIndex(seoul) {
  const kim = seoul.findIndex((x) => x === "Kim");

  return `김서방은 ${kim}에 있다`;
}

// returnFoundIndex(["Jane", "Kim"]);
// 김서방은 1에 있다
