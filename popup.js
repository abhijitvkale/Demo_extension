
document.getElementById("generate_btn").addEventListener("click", generateKeyHandler);

function generateKeyHandler() {
  chrome.runtime.sendMessage({
      name: 'generateKeyRequest',
      params: {}
  });
}


chrome.runtime.onMessage.addListener(function(request, sender) {
  if (!request.name) {
     console.log("Unvalid params.");
     return;
  }
  switch (request.name) {
    case 'background':
      console.log(request.params);
      break;
  }
});

/*
var xhr = new XMLHttpRequest();


xhr.open('POST', "http://localhost:8080", true);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.send();

xhr.onload = function () {

  alert(xhr.response);
}
*/
