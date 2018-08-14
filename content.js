

console.log("Taxa page loaded");

chrome.runtime.onMessage.addListener(
  function(request) {
    /*console.log("Rev request from background " + JSON.stringify(request));
    chrome.runtime.sendMessage({
      name: 'content',
      msg: request.msg + ' ' + 'and content to background'
    });
    window.postMessage({
      name: 'content',
      msg: request.msg + ' ' + 'and content to webpage'
    }, "*");*/
    switch (request.name) {
      case 'generateKeyRequest':
      console.log('Start to send generateKeyRequest to web page.');
      window.postMessage({
        name: 'generateKeyRequest',
        params: request.params
      }, "*");
      break;
      default:
      console.log("Content JS: Unhandled request " + JSON.stringify(request));
    }
  }
);

  window.addEventListener("message", function(event) {

    if (event.source != window)
      return;

    if (!event.data.name) {
      console.log("Invalid message for content page.");
      return;
    }

    switch (event.data.name){
      case 'generateKeyResponse':
        console.log('Rev generateKeyResponse params ' + JSON.stringify(event.data.params));
        chrome.runtime.sendMessage({
          from: 'content',
          name: 'generateKeyResponse',
          params: event.data.params
        });
        break;
    }
  }, false);
