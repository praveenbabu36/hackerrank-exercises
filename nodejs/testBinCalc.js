let exp1 = "110001 * 10001";
var args = exp1.split(/+|-|*|\//);
var args1 = parseInt(args[0], 2).toString(10);
var args2 = parseInt(args[1], 2).toString(10);
var res = parseInt(args1) + parseInt(args2);

console.log(res, (res >>> 0).toString(2));
