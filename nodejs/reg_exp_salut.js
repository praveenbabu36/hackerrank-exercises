//let re = /^(Mr|Dr)\.[a-zA-Z]*(?!.*[.]$)/;
let re = /^(Mr|Dr)\.[a-zA-Z]*[^.]$/;
let str = "Mr.Dr";

console.log(re.test(str));
