console.log("✅ popup.js loaded");

const timeDisplay = document.getElementById("time");

document.getElementById("startBtn").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "START" });
});

document.getElementById("pauseBtn").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "PAUSE" });
});

document.getElementById("resetBtn").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "RESET" });
});


// Formating time in seconds to min :sec 
function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
 

  return (
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0") 
    
  );
}

// Listen for timer updates from background

chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "UPDATE_TIME") {
    timeDisplay.textContent = formatTime(request.seconds);
  }
});


chrome.runtime.sendMessage({ action:"GET_TIME"},(response) => {
  if(response)
   {
     timeDisplay.textContent = formatTime(response.seconds);
   }
  });
