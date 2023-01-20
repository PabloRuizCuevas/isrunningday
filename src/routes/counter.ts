import { writable } from "svelte/store";

let config3 = {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  fractionalSecondDigits: 3
}

function nsToMidnight() {
  // take toLocaleTimeString that is the time of "here" extract ms then convert ms to isoformat (they are not local anymore)
  let date = new Date().toLocaleTimeString("de", config3)
  let a = date.split(':').join(',').split(',')
  let b = 8.64e7 - (Number(a[0]*60*60*1000) + Number(a[1]*60*1000)  + Number(a[2]*1000) + Number(a[3]))
  return new Date(b).toISOString().slice(11,23)
}

function sToMidnight() {
  return nsToMidnight().slice(0,8)
}

function isOddDay(){
  let diffInMs   = new Date() - new Date(2023,0,03,0,0,0) //if not 00:00 then is 01 magic..
  let diffInDays = Math.floor(diffInMs/(1000 * 60 * 60 * 24));
  return Boolean((diffInDays) % 2)
}

export const time = writable(sToMidnight());
export const time2 = writable(nsToMidnight());
export const isRunningDay = writable(isOddDay());

const createTimer = () => {
  let animationRef;
  let latestStartTime;
  let remainingTime = sToMidnight();

  const animate = timestamp => {
    if (latestStartTime === undefined) {
      latestStartTime = timestamp + remainingTime;
    }
    // the time to display now
    time.set(sToMidnight());
    time2.set(nsToMidnight());
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
