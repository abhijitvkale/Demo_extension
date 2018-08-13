




chrome.runtime.onMessage.addListener(
    function(request, sender) {


      if (!request.name) {
         console.log("Unvalid params.");
         return;
      }
      switch (request.name) {
        case 'popup':
        chrome.tabs.query(
          { active: true },
          (tabs) => {
          chrome.tabs.sendMessage(
            tabs[0].id,
              {
                 name: 'background',
                 msg: request.msg + ' ' + 'and background to content'
               }
            );
          }
        );
          break;
            //(response) => {
             //console.log("Get response from content script. " + JSON.stringify(response));

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
