// // To match the format of string abc.abc.abc.def
// let re = /^\S{3}\.\S{3}\.\S{3}\.\S{3}$/g;

// //let str = "1231.456.abc.def";
// //let str = "12345678.2.2.2";

// let str = "123.456.abc.def";
// //let str = "...............";
// //let str = "`!@.#$%.^&*.()_";
// //let str = "123456789.2.2.2";

// console.log(re.test(str));

/**  ex 2
let re = /\d{2}\D\d{2}\D\d{4}/; // 10-20-2020

//let str = "12A34C5678";
//let str = "12A34C567a";
//let str = "10.20a22";
let str = "10-11-2020";

console.log(re.test(str));

*/

/*
//  ex 3
let re = /\S{2}\s\S{2}\s\S{2}/; // 10 20 30

//let str = "12A34C5678";
//let str = "12A34C567a";
//let str = "10.20a22";
let str = "1020 30";

console.log(re.test(str));
*/

/*
//  ex 4
let re = /\w{3}\W\w+\W\w{3}/; // xxxXxxxXxxx  // www.hackerrank.com

let str = "www.google.com";

console.log(re.test(str));
*/

/*
//  ex 5
let re = /^\d\w{4}\.$/; // Xxxxxxx.  // 0praveen.

let str = "0pra_.";

console.log(re.test(str));
*/

/*
//  Matching Specific Characters
let re = /^[123][120][xs0][30Aa][xsu][.,]$/; //1203x.

let str = "1203x.";

console.log(re.test(str));

*/

/**
//Excluding Specific Characters
let re = /^[^\d][^aeiou][^bcDF][^\s][^AEIOU][^.,]$/; //think?.

let str = "think?";

console.log(re.test(str));
*/

/*

//Matching Character Ranges
let re = /^[a-z][1-9][^a-z][^A-Z][A-Z]/; //h4CkR

//let str = "h4CkR";
//let str = "h4CkRank";
//let str = "hh4CkRank";
let str = "a0$?ZWe";

console.log(re.test(str));

*/

/*

//Matching {x} Repetitions

let re = /^[a-zA-Z02468]{40}[13579\s]{5}$/; //h4CkR

let str = "x4202v2A22A8a6aaaaaa2G2222m222qwertyYuIo957798";

console.log(str.length, re.test(str));
*/

/*
//Matching {x, y} Repetitions

let re = /^\d{1,2}[a-zA-Z]{3,}\.{0,3}$/; //h4CkR

//let str = "3threeormorealphabets8";
let str = "3threeormorealphabets....";

console.log(str.length, re.test(str));
*/

/*
//Matching Word Boundaries
let re = /\b[aeiouAEIOU][a-zA-Z]*\b/;

let str = "Found any match?";

console.log(str.match(re));
*/

/*
let re = /(ok){3}/;

let str = "ok okokkonooK";

console.log(str.match(re));
*/

/*
//Alternative Matching

let re = /^(Mr|Mrs|Ms|Dr|Er)\.[a-zA-Z]*[^\.]$/;

let str = "Mr#VKDoshi";

console.log(str.match(re));
*/

/*
//Matching Same Text Again & Again
let re = /([a-z])(\w)(\s)(\W)(\d)(\D)([A-Z])([a-zA-Z])([aeiouAEIOU])(\S)\1\2\3\4\5\6\7\8\9\10/;

let str = "ab #1?AZw$ab #1?AZw$";

console.log(str.match(re));
*/

// Forward References
let re = /(\2tic|(tac))+/;

let str = "tac";

console.log(str.match(re));
