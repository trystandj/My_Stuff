const countDown = document.querySelector("#countdown");
const startButton = document.querySelector("#clickMe");
const count = 10;

let intervalId; // Moved to outer scope

function startCountDown() {
    let current = count;
    clearInterval(intervalId); // Prevent multiple intervals
    intervalId = setInterval(() => {
        countDown.textContent = current;
        if (current === 0) {
            clearInterval(intervalId);
            alert("Time's up!");
        }
        current--;
    }, 1000);
}

addEventListener("click", (e) => {
    if (e.target === startButton) {
        startCountDown();
    } else {
        
    }
});
