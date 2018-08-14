




chrome.runtime.onMessage.addListener(
    function(request, sender) {


      if (!request.name) {
         console.log("Unvalid params.");
         return;
      }
      switch (request.name) {
        case 'generateKeyRequest':
        console.log("Start send key request from background to content.");
        chrome.tabs.query(
          { active: true },
          (tabs) => {
          chrome.tabs.sendMessage(
            tabs[0].id,
              {
                 name: 'generateKeyRequest',
                 params: request.params
               }
            );
          }
        );
       break;
            //(response) => {
             //console.log("Get response from content script. " + JSON.stringify(response));
      case 'generateKeyResponse':
        console.log('Rev generateKeyResponse from content.');
        chrome.runtime.sendMessage({
                from: 'background',
                name: 'generateKeyResponse',
                params: request.params
              });
        break;

        case 'content':
          console.log("message recieved from content");
          chrome.runtime.sendMessage({
                  name: 'background',
                  msg: request.msg + ' ' + 'and background to popup again'
                });
          break;


      }
      /*
      chrome.tabs.query(
        { active: true },
        (tabs) => {
          for(var i = 0; i < tabs.length; i++) {
               //console.log(i  + " content is " + JSON.stringify(tabs[i]));
          }




         }
      );*/
    }
);
