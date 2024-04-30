// 원하는 문자열 찾기

function searchString(str, pat) {
  const result = str.toLowerCase().includes(pat.toLowerCase());
  return result ? 1 : 0;
}

// searchString("AbCdEfG", "aBc");
// 1
