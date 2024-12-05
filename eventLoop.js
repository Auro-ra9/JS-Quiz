let timer= setTimeout(()=>{
    console.log('hello');
},0);
clearTimeout(timer);

// Explanation:
// setTimeout(() => { console.log('hello'); }, 0);: This schedules a callback to be executed after a delay of 0 milliseconds. Even though the delay is 0, the callback is not executed immediately; it is placed in the event queue and will only run once the call stack is empty.

// clearTimeout(timer);: This immediately clears the scheduled timeout. As a result, the callback function console.log('hello') will never be executed because the timeout was cleared before it could run.