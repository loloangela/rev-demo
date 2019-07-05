Date.prototype.getUnixTime = function () { return this.getTime() / 1000 | 0 };
if (!Date.now) Date.now = function () { return new Date(); }
Date.time = function () { return Date.now().getUnixTime(); }

let today = new Date;
console.log("Date today, basic object", today);
console.log("Date today, get time/1000", Math.round(today.getTime()));
console.log("Date in millisesonds: ", today.getMilliseconds());