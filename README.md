🍅 Pomodoro App – Chrome Extension (MV3)

A minimal Pomodoro Timer built as a Chrome Extension using Manifest V3.

This project was built to deeply understand Chrome Extension architecture — especially service workers, messaging, storage persistence, and notifications.

🚀 Why I Built This

Instead of watching tutorials passively, I wanted to:

* Understand how Chrome Extension APIs actually work

* Learn popup ↔ background communication

* Handle service worker lifecycle issues (MV3)

* Implement persistent state using chrome.storage

* Work with browser notifications

This extension helped me understand event-driven architecture in a practical way.

🛠 Tech Used

* Manifest V3

* Service Worker (background.js)

* chrome.runtime messaging

* chrome.storage.local

* chrome.notifications API

* Vanilla JavaScript (no frameworks)

✨ Features

* 25-minute countdown timer

* Start / Pause / Reset controls

* Persistent timer state using chrome.storage

* Survives popup close

* Notification when session ends

* Clean minimal UI

🧠 Key Concepts Learned

1️⃣ Service Worker (MV3)

* Event-based background script

* Gets terminated when idle

* Needs state persistence


2️⃣ Messaging

* chrome.runtime.sendMessage()

* chrome.runtime.onMessage.addListener()

* Understanding message channel behavior


3️⃣ State Persistence

* Saving seconds and isRunning

* Restoring timer after popup reopen

* Handling service worker lifecycle properly


4️⃣ Asynchronous JavaScript

* setInterval()

* Event loop basics

* Callback-based APIs


📂 Project Structure
pomodoro-extension/
│

├── manifest.json

├── popup.html

├── popup.css

├── popup.js

├── background.js

└── icons/
   
   ├── icon16.png
    
   ├── icon48.png
   
  └── icon128.png


📦 How to Run Locally

* Clone this repo

* Open Chrome → chrome://extensions

* Enable Developer Mode

* Click Load Unpacked

* Select the project folder


🎯 Future Improvements

* Accurate time calculation using Date.now()

* Custom session duration

* Break timer automation

* Sound alert option

* Improved UI animations


💭 Reflection

This is a simple project — but it helped me understand:

* Event-driven systems

* Extension architecture

* Debugging service workers

* Managing asynchronous flows

## 🎥 Demo

Watch how the extension works:

(Pomodoro-App-Chrome-Extension-Demo.mp4)

***Small projects build real foundations.***
