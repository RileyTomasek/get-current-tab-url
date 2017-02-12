// Returns a promise that resolves to the url of the current tab
function getCurrentTabUrl() {
  return new Promise(function(resolve, reject) {
    if (window.safari !== undefined) {
      resolve(safari.application.activeBrowserWindow.activeTab.url);
    } else {
      var queryInfo = {
        active: true,
        currentWindow: true,
      };

      chrome.tabs.query(queryInfo, function(tabs) {
        var tab = tabs[0];
        var url = tab.url;
        console.assert(typeof url == 'string', 'tab.url should be a string');
        resolve(url);
      });
    }
  });
}

module.exports = getCurrentTabUrl;
