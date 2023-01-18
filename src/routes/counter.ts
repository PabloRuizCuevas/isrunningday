import { writable } from "svelte/store";

const formatter = new Intl.DateTimeFormat("de", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  fractionalSecondDigits: 3
});

const formatter2 = new Intl.DateTimeFormat("de", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

function nsToMidnight() {
  var msd = 8.64e7;
  var now = new Date();
  return (msd - (now - 2*now.getTimezoneOffset() * 6e4) % msd)
}

function isOddDay(){
  let diffInMs   = new Date() - new Date('2023-01-03') // 00:00:00
  let diffInDays = Math.floor(diffInMs/(1000 * 60 * 60 * 24));
  return Boolean((diffInDays) % 2)
}
 
export const COUNTDOWN_FROM = nsToMidnight(); //8.64e7 //
export const time = writable(formatter.format(COUNTDOWN_FROM));
export const time2 = writable(formatter2.format(COUNTDOWN_FROM));
console.log('hola')
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
    
    time.set(formatter.format(nsToMidnight()));
    time2.set(formatter2.format(nsToMidnight()));
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
