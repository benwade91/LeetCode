/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(str1, str2) {
  if(str1.length > str2.length) [str1, str2] = [str2, str1];
  let table = Array(str1.length + 1).fill().map(()=>Array(str2.length+1).fill(0))
  let a = ["", ...str2.split('')]
  let b = ["", ...str1.split('')]

  for(let i = 0; i < a.length; i++){
    if(table[i]) table[i][0] = i;
    if(i < table[0].length) table[0][i] = i;
  }

  for(let r = 1; r < a.length; r++){
    for(let c = 1; c < b.length; c++){
      if(a[r] == b[c]) table[c][r] = table[c-1][r-1];
      else {
        table[c][r] = 1 + Math.min(table[c-1][r-1],table[c-1][r],table[c][r-1])
      }
    }
  }

  return table[str1.length][str2.length]
};