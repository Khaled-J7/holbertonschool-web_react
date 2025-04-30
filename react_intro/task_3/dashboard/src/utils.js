// utils.js

// Return the current year
export function getCurrentYear() {
  return new Date().getFullYear();
}

// Return different text based on whether we're on index page or not
export function getFooterCopy(isIndex) {
  return isIndex ? "Holberton School" : "Holberton School main dashboard";
}

// New function to get the latest notification
export function getLatestNotification() {
  return "<strong>Urgent requirement</strong> - complete by EOD";
}