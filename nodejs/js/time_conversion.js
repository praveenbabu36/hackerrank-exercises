let str = "12:05:45am";

let strArr = str.split(/[:a-zA-Z]/);

let hours_ = strArr[0];
let minutes_ = strArr[1];
let seconds_ = strArr[2];

let am_ = str.toLowerCase().includes("am");

console.log(hours_, minutes_, seconds_, am_);

if (!am_ && parseInt(hours_) >= 1 && parseInt(hours_) < 12) {
  hours_ = parseInt(hours_) + 12;
} else if (am_ && parseInt(hours_) == 12) {
  hours_ = "00";
}

let newTime = hours_ + ":" + minutes_ + ":" + seconds_;
console.log(newTime);
