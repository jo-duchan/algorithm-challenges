// https://school.programmers.co.kr/learn/courses/30/lessons/181862

function solution(myStr) {
  const divided = myStr.split(/[a-c]+/g);
  const answer = divided.filter((s) => s !== '');

  return answer.length !== 0 ? answer : ['EMPTY'];
}

// solution('baconlettucetomato');
// [ 'onlettu', 'etom', 'to' ]
