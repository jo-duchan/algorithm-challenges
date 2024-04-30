// 포켓몬

function pickingPokemon(list) {
  const max = list.length / 2;
  const pick = new Set(list);

  return pick.size > max ? max : pick.size;
}

// pickingPokemon([3, 1, 2, 3]);
// 2
// pickingPokemon([3, 3, 3, 2, 2, 4]);
// 3
