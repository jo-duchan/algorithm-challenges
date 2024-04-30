// 글자 이어 붙여 문자열 만들기

function makeSentences(my_string, index_list) {
  let result = "";

  index_list.forEach((s) => {
    result += my_string[s];
  });

  return result;
}

// makeSentences("zpiaz", [1, 2, 0, 0, 3]);
// pizza
