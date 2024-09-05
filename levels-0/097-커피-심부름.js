// https://school.programmers.co.kr/learn/courses/30/lessons/181837

function solution(order) {
  const prices = {
    anything: 4500,
    americano: 4500,
    cafelatte: 5000,
  };

  const answer = order.reduce((acc, cur) => {
    const coffee = cur.replace("ice", "").replace("hot", "");

    return (acc += prices[coffee]);
  }, 0);

  return answer;
}

// solution(["cafelatte", "americanoice", "hotcafelatte", "anything"]);
// 19000
