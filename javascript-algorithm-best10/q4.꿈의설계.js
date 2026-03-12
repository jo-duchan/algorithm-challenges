// 문제 링크: https://jsalgo.co.kr/?page=4

// 1. 문제 설명
// [훈련수치, 고민수치]의 형태로 문자열을 입력 받아.
// 훈련수치 X 고민수치의 계산 방식으로 알파벳 별 수치 별 수치를 구한다.
// 둘 중 값이 없는 알파벳은 구하지 않음.
// 모든 수치를 더해 원래 미래의 수치를 구하고,
// 가장 많이 훈련한 수치에 100을 더하고, 가장 많이 고민한 수치에 100을 더해 수치를 다시 구해
// 바뀐 미래의 수치를 구한다.
// 결괏값을 '최종 꿈의 설계는 원래 미래 2200, 바뀐 미래 7200입니다. 이 수치대로 Vision을 만듭니다.'와 같은식으로 리턴한다.

// 2. 풀이 방법 설명
// dataMap, 원래 미래, 바뀐 미래, 훈련 최대값 인덱스, 걱정 최대값 인덱스를 담을 변수를 선언한다.
// 입력 받은 데이터를 for문으로 순회하며 키값으로 사용할 label 변수에 index가 0이면 train, 1이면 worry을 넣는다.
// temp 변수에 data[i]값을 split하고 filter로 빈값을 제거해 넣는다.
// temp를 for을 돌아 name과 score를 정규식을 match로 값을 추출하고 dataMap에 name(key), value({label: score}) 구조로 넣는다.
// filtered라는 배열로 dataMap을 filter를 통해 train이나 worry가 없는 이름을 필터한다.
// filtered의 길이가 0이면 early return 시킨다.
// filtered를 for문으로 돌며 현재 미래 값과 훈련 최대값 인덱스, 걱정 최대값 인덱스를 구해 넣는다.
// 훈련 최대값 인덱스, 걱정 최대값 인덱스를 이용해 filtered에 각 최대 값들에 100을 증가시킨다.
// filtered를 for문을 돌며 바뀐 미래 값을 구해 넣는다.
// 템플릿 리터럴을 통해 결괏값을 리턴한다.

// 3. 구현
function solution(data) {
  const dataMap = new Map();
  let originallyFuture = 0;
  let changedFuture = 0;
  let maxTrainIdx = 0;
  let maxWorryIdx = 0;

  for (let i = 0; i < data.length; i++) {
    const label = i === 0 ? 'train' : 'worry';

    const temp = data[i]
      .split('.')
      .map((v) => v.trim())
      .filter(Boolean);

    for (const word of temp) {
      const name = word.match(/[A-Za-z]/)?.[0];
      const score = Number(word.match(/\d+/)?.[0]);

      if (!name || Number.isNaN(score)) continue;

      const prev = dataMap.get(name) || {};
      dataMap.set(name, {
        ...prev,
        [label]: (prev[label] || 0) + score,
      });
    }
  }

  const filtered = [...dataMap].filter(
    ([, v]) => v.train !== undefined && v.worry !== undefined,
  );

  if (filtered.length === 0) {
    return '미래가 보이지 않습니다.';
  }

  for (let i = 0; i < filtered.length; i++) {
    const value = filtered[i][1];

    originallyFuture += value.train * value.worry;

    if (value.train > filtered[maxTrainIdx][1].train) {
      maxTrainIdx = i;
    }

    if (value.worry > filtered[maxWorryIdx][1].worry) {
      maxWorryIdx = i;
    }
  }

  filtered[maxTrainIdx][1].train += 100;
  filtered[maxWorryIdx][1].worry += 100;

  for (const [, value] of filtered) {
    changedFuture += value.train * value.worry;
  }

  return `최종 꿈의 설계는 원래 미래 ${originallyFuture}, 바뀐 미래 ${changedFuture}입니다. 이 수치대로 Vision을 만듭니다.`;
}

solution([
  '100만큼 A를 훈련. 201 B. 120보다 이십만큼 더 B를 훈련했다.',
  '30만큼 A를 고민했다. 40만큼 B를 고민. 빙키는 A를 70만큼. C 10. D 10. A 10. z 10.',
]); // '최종 꿈의 설계는 원래 미래 23840, 바뀐 미래 37840입니다. 이 수치대로 Vision을 만듭니다.'
