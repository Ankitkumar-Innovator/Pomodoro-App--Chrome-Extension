console.log(" ✅ Background Service worker loaded");


let timer = null;
let seconds = 25*60 // 1500 seconds;

function saveState() {
  chrome.storage.local.set({
    seconds: seconds,
    isRunning: !!timer,
  });
}

chrome.storage.local.get(["seconds", "isRunning"], (data) => {
  seconds = data.seconds ?? 25*60;

  if (data.isRunning) {
    startTimer();
  }
});

// Timer logic
function startTimer() {
  if (!timer) {

    // If fresh start, set to 25 min
    if(seconds === 0){
      seconds = 25 * 60;
    }

    timer = setInterval(() => {
      seconds--;
      saveState();

      // Send update to pop
      chrome.runtime.sendMessage({
        action: "UPDATE_TIME",
        seconds: seconds,
      }).catch(() => {
        // Ignore error if popup is closed
      });

      // When session ends
      if(seconds === 0)
       {
console.log("Firing notification");

        clearInterval(timer);
        timer = null
        saveState()

        chrome.notifications.create( {
          type: "basic",
          iconUrl: "icons/icon48.png",
          title: "Pomodoro Session Complete 🏆",
          message: "Time for a 5 minute break 😀...",
          priority: 2,
        });

        // Reset back to 25 minutes
        seconds = 25*60
        saveState()

    chrome.runtime
      .sendMessage({
        action: "UPDATE_TIME",
        seconds: seconds,
      })
      .catch(() => {});
        
      }
    }, 1000);

    // Here setInterval() return the inveral ID . So our timer varibale stores the id of the interval when START is clicked . If !timer is not used when START IS cliked  say 3 times then 3  intervals will be created .
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "START") {
    startTimer();
  } else if (request.action === "PAUSE") {
    clearInterval(timer);
    timer = null;
    saveState();
  } else if (request.action === "RESET") {
    clearInterval(timer);
    timer = null;
    seconds = 25*60;
    saveState();

    chrome.runtime.sendMessage({
      action: "UPDATE_TIME",
      seconds: seconds,
    }).catch(() => {
        // Ignore error if popup is closed
      });
  } else if (request.action === "GET_TIME") {
    sendResponse({
      seconds: seconds ?? 25*60,
     isRunning : !!timer
    });
  }

  return true;
});
