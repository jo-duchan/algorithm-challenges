// [1차]비밀지도 2023 KAKAO BLIND RECRUITMENT

function mapDecoder(n, arr1, arr2) {
  const result = [];
  for (let i = 0; i < n; i++) {
    const sumMap = (arr1[i] | arr2[i])
      .toString(2)
      .padStart(n, "0")
      .replaceAll("1", "#")
      .replaceAll("0", " ");
    result.push(sumMap);
  }

  return result;
}

// mapDecoder(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
// [ '#####', '# # #', '### #', '#  ##', '#####' ]
