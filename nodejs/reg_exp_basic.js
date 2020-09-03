// To match the format of string abc.abc.abc.def
let re = /^\S{3}\.\S{3}\.\S{3}\.\S{3}$/g;

//let str = "1231.456.abc.def";
//let str = "12345678.2.2.2";

let str = "123.456.abc.def";
//let str = "...............";
//let str = "`!@.#$%.^&*.()_";
//let str = "123456789.2.2.2";

console.log(re.test(str));
