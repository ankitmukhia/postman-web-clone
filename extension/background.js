// The extension now uses declarativeNetRequest rules defined in rules.json
// No additional JavaScript is needed for header modification

chrome.runtime.onInstalled.addListener(() => {
  console.log('CORS Unblock extension installed');
}); 