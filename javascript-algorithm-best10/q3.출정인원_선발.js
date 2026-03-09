// 문제 링크: https://jsalgo.co.kr/?page=3

// 1. 문제 설명
// 기술자의 이름, 체력, 정신력, 기술력, 방어력이 담긴 배열이 담긴 배열을 입력 받아
// 체력, 정신력, 기술력, 방어력의 총합을 구하여 점수가 높은 순으로 상위 30%의 지원자를 선발
// 동점자가 있는 경우에도 총인원에 30%가 넘지 않도록 선발하고, 상위 동일 점수가 30%가 넘어가는 경우에도 아무도 선발하지 못함
// 출력은 기술자들의 이름을 알파벳의 역순으로 배열에 담아서 출력하고, 아무도 없으면 빈 배열을 출력

// 2. 풀이 방법 설명
// scoreMap이라는 Map 자료형과 selected라는 빈 배열을 만듦
// limit을 입력받은 data의 길이에 0.3을 곱해 Math.floor로 내림을 해서 구함
// for문으로 data를 순회하며 체력, 정신력, 기술력, 방어력의 합을 key로 scoreMap에 있으면 value에 이름을 push하고
// 없으면 빈배열을 set함
// sortedGroups에 scoreMap을 배열로 만들어서 sort로 첫번째 원소 기준으로 오름 차순 정렬을 해서 담음
// for문으로 sortedGroups을 순회하며
// 만약 selected의 길이와 for문에서 구조 분해하여 받은 이름들의 합이 limit과 같거나 작으면 selected에 push하고, 아니라면 break로 for문을 종료함
// selected를 내림차순으로 정렬을 하고 반환함

// 3. 구현
function solution(data) {
  const scoreMap = new Map();
  const selected = [];
  const limit = Math.floor(data.length * 0.3);

  for (const person of data) {
    const [name, ...scores] = person;
    const sum = scores.reduce((acc, cur) => acc + cur, 0);

    if (!scoreMap.has(sum)) {
      scoreMap.set(sum, []);
    }
    scoreMap.get(sum).push(name);
  }

  const sortedGroups = [...scoreMap.entries()].sort((a, b) => b[0] - a[0]);

  for (const [sum, names] of sortedGroups) {
    if (selected.length + names.length <= limit) {
      selected.push(...names);
    } else {
      break;
    }
  }

  return selected.sort((a, b) => b.localeCompare(a));
}

solution([
  ['A', 25, 24, 11, 12],
  ['B', 13, 22, 16, 14],
  ['C', 12, 22, 16, 14],
  ['D', 13, 22, 16, 14],
  ['E', 12, 25, 16, 19],
  ['F', 23, 15, 16, 14],
  ['G', 13, 14, 3, 5],
  ['H', 25, 22, 11, 14],
  ['I', 13, 12, 14, 23],
  ['J', 13, 22, 15, 14],
]); // ['H','E','A']
