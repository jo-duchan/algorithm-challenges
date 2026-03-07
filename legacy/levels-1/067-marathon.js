// https://school.programmers.co.kr/learn/courses/30/lessons/42576
// 완주하지 못한 선수

function marathon(participant, completion) {
  const participantList = participant.reduce((map, name, idx) => {
    const count = map.get(name) || 0;
    return map.set(name, count + 1);
  }, new Map());

  for (let player of completion) {
    const playerCount = participantList.get(player);

    if (playerCount > 1) {
      participantList.set(player, playerCount - 1);
      continue;
    }

    if (playerCount) {
      participantList.delete(player);
    }
  }

  return Array.from(participantList.keys())[0];
}

// marathon(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);
// 'mislav'
