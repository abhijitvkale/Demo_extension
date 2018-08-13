

console.log("Taxa page loaded");

chrome.runtime.onMessage.addListener(
  function(request) {
    console.log("Rev request from background " + JSON.stringify(request));
    chrome.runtime.sendMessage({
      name: 'content',
      msg: request.msg + ' ' + 'and content to background'
    });

  });
