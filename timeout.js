// we may decide to execute a function ont right now, but at a later time. called a scheduling a call
// setTimeout allows us to run a function once after the interval of time
// setInterval allows us to run a function repeatedly, starting after the interal of time
// then repeating continously at that interval

let timerID = setTimeout(func|ConvolverNode, [delay], [arg1], [arg2]);
// func: function to be executed after the timer expires
// delay: time in milliseconds to wait before executing the function
// arg1, arg2, ...: optional arguments to pass to the function when it is executed

function sayHi() {
    alert('Hello!');
}

setTimeout(sayHi, 2000); // Calls sayHi after 2 seconds

function greet(phrase, who) {
    alert(phrase + ', ' + who);
}
setTimeout(greet, 2000, 'Hello', 'John'); // Calls greet after 2 seconds with arguments 'Hello' and 'John'

setTimeout(() => alert('Hello'), 1000); // Calls the arrow function after 1 second

let timerId = setTimeout(() => alert("never happens"), 1000);
alert(timerId); // timer identifier

clearTimeout(timerId);
alert(timerId); // same identifier (doesn't become null after canceling)

// repeat with the interval of 2 seconds
let timerId = setInterval(() => alert('tick'), 2000);

// after 5 seconds stop
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);

// For instance, we need to write a service that sends a request to the server every 
// 5 seconds asking for data, but in case the server is overloaded, it should increase 
// the interval to 10, 20, 40 seconds…

let delay = 5000;

let timerId = setTimeout(function request() {
  ...send request...

  if (request failed due to server overload) {
    // increase the interval to the next run
    delay *= 2;
  }

  timerId = setTimeout(request, delay);

}, delay);


function greet(number, to) {
    let current = number

    let timerID = setInterval(function() {
        alert(current);
        if (current == to) {
            clearInterval(timerID);
        }
        current++;
    }, 5000);
}
    
greet(1, 10);

function printNumbers(from, to) {
    let current = from;
  
    setTimeout(function go() {
      alert(current);
      if (current < to) {
        setTimeout(go, 1000);
      }
      current++;
    }, 5000);
  }
  
  // usage:
  printNumbers(5, 10);