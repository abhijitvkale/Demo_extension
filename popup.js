
document.getElementById("generate_btn").addEventListener("click", sample_func);

function sample_func()
{


  chrome.runtime.sendMessage({
      name: 'popup',
      msg: 'from popup to background'
  });





chrome.runtime.onMessage.addListener(function(request, sender) {

  if (!request.name) {
     console.log("Unvalid params.");
     return;
  }
  switch (request.name) {
    case 'background':
      console.log(request.msg);
      break;


  }
          }
      );
    }
/*
var xhr = new XMLHttpRequest();


xhr.open('POST', "http://localhost:8080", true);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.send();

xhr.onload = function () {

  alert(xhr.response);
}
*/
