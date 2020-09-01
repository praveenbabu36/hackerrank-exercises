//let re = /\d*[^\s,A-Za-z]/g;
let re = /\d*[^\D]/g;
let str = "1 2 300";

const r = str.match(re);

console.log(r);

for (const e of r) {
  console.log(e);
}
