// 신규 아이디 추천(2021 KAKAO BLIND RECRUITMENT)

function recommendNewID(new_id) {
  // 길이는 3자 이상 15자 이하여야 합니다.
  // 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 문자만 사용할 수 있습니다.
  // 단, 마침표(.)는 처음과 끝에 사용할 수 없으며 또한 연속으로 사용할 수 없습니다.

  // step01
  let recommendId = new_id.toLowerCase();

  // // step02
  recommendId = recommendId.replace(/[^\-|_|.|a-z|0-9]+/g, "");

  // // step03
  recommendId = recommendId.replaceAll(/\.+/g, ".");

  // // step04
  recommendId = recommendId.replace(/^\.|\.$/g, "");

  // step05
  recommendId = recommendId.padEnd(1, "a");

  // step06
  recommendId = recommendId.slice(0, 15).replace(/^\.|\.$/g, "");

  // step07
  recommendId = recommendId.padEnd(3, recommendId[recommendId.length - 1]);

  return recommendId;
}

// recommendNewID("...!@BaT#*..y.abcdefghijklm");
// bat.y.abcdefghi

// recommendNewID("z-+.^.");
// z--
