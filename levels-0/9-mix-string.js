// 문자열 섞기

function mixString(str1, str2) {
  let result = "";

  for (let i = 0; i < str1.length; i++) {
    result += str1[i] + str2[i];
  }

  return result;
}

// mixString("aaaaa", "bbbbb");
// ababababab
