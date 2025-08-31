const target = document.querySelector("#target");

// Get browser name + version
const userAgent = navigator.userAgent;
let browserName = "Unknown Browser";
let browserVersion = "";

// Detect common browsers
if (/chrome|crios|crmo/i.test(userAgent) && !/edg/i.test(userAgent)) {
  browserName = "Google Chrome";
  browserVersion = userAgent.match(/Chrome\/(\d+)/i)?.[1] || "";
} else if (/firefox|fxios/i.test(userAgent)) {
  browserName = "Mozilla Firefox";
  browserVersion = userAgent.match(/Firefox\/(\d+)/i)?.[1] || "";
} else if (/safari/i.test(userAgent) && !/chrome/i.test(userAgent)) {
  browserName = "Safari";
  browserVersion = userAgent.match(/Version\/(\d+)/i)?.[1] || "";
} else if (/edg/i.test(userAgent)) {
  browserName = "Microsoft Edge";
  browserVersion = userAgent.match(/Edg\/(\d+)/i)?.[1] || "";
}

// OS detection
let os = "Unknown OS";
if (/win/i.test(userAgent)) os = "Windows";
else if (/mac/i.test(userAgent)) os = "macOS";
else if (/linux/i.test(userAgent)) os = "Linux";
else if (/android/i.test(userAgent)) os = "Android";
else if (/iphone|ipad|ipod/i.test(userAgent)) os = "iOS";

// Screen details
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
const availWidth = window.screen.availWidth;
const availHeight = window.screen.availHeight;

// Date & time in Finnish localization
const now = new Date();
const date = now.toLocaleDateString("fi-FI", {
  day: "numeric",
  month: "long",
  year: "numeric"
});
const time = now.toLocaleTimeString("fi-FI", {
  hour: "2-digit",
  minute: "2-digit"
});

// Insert info into #target
target.innerHTML = `
  <p><strong>Browser:</strong> ${browserName} ${browserVersion}</p>
  <p><strong>Operating System:</strong> ${os}</p>
  <p><strong>Screen Resolution:</strong> ${screenWidth} x ${screenHeight}</p>
  <p><strong>Available Screen Space:</strong> ${availWidth} x ${availHeight}</p>
  <p><strong>Date:</strong> ${date}</p>
  <p><strong>Time:</strong> ${time}</p>
`;
