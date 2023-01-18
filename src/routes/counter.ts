import { writable } from "svelte/store";

const formatter = new Intl.DateTimeFormat("de", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  fractionalSecondDigits: 3
});


function nsToMidnight() {
  var msd = 8.64e7;
  var now = new Date();
  return (msd - (now - now.getTimezoneOffset() * 6e4) % msd)
}


console.log('minutes')
console.log(nsToMidnight())
console.log(nsToMidnight()/1000/60/60)


function isOddDay(){
  let diffInMs   = new Date() - new Date('2023-01-01')
  let diffInDays = Math.floor(diffInMs/(1000 * 60 * 60 * 24));
  return Boolean((diffInDays) % 2)
}

var today = new Date();
let todayNow = new Date(today.setHours(today.getHours()))
let todayNowDay = todayNow.getDate()
console.log('todayNowDay')
console.log(todayNowDay)

 
export const COUNTDOWN_FROM = 8.64e7 //nsToMidnight();
export const time = writable(formatter.format(COUNTDOWN_FROM));
console.log(formatter.format(COUNTDOWN_FROM))

//console.log(time)
export const isRunningDay = writable(isOddDay());


const createTimer = () => {
  let animationRef;
  let latestStartTime;
  let remainingTime = COUNTDOWN_FROM;

  const animate = timestamp => {
    if (latestStartTime === undefined) {
      latestStartTime = timestamp + remainingTime;
    }
    // the time to display now
    const currentTime = latestStartTime - timestamp;
    
    time.set(formatter.format( 2*nsToMidnight()));
    isRunningDay.set(isOddDay())

    animationRef = requestAnimationFrame(animate);

  };

  const api = {
    start: () => {
      animationRef = requestAnimationFrame(animate);
    },
    reset: Function.prototype
  };
  return api;
};

export const timer = createTimer();
