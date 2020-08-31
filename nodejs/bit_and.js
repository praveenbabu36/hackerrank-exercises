let n = 5,
  k = 2;

let maxDiff = 0;

for (let i = 1; i < n; i++) {
  for (let j = i + 1; j <= n; j++) {
    let temp = i | j;
    if (temp > maxDiff && temp < k) {
      maxDiff = temp;
    }
  }
}

console.log(maxDiff);
