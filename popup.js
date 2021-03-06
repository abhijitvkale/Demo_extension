
document.getElementById("generate_btn").addEventListener("click", generateKeyHandler);
document.getElementById("attestation_btn").addEventListener("click", attestationHandler);

function generateKeyHandler() {
  chrome.runtime.sendMessage({
      name: 'generateKeyRequest',
      params: {}
  });
}
function attestationHandler() {

  chrome.runtime.sendMessage({
      name: 'attestationRequest',
      params: {}
  });
}

chrome.runtime.onMessage.addListener(function(request, sender) {
  console.log("for pop up " + JSON.stringify(request));
  if (!request.name || request.from != 'background') {
     console.log("Unvalid params.");
     return;
  }

  switch (request.name) {
    case 'generateKeyResponse':
      console.log('Rev generateKeyResponse with ' + JSON.stringify(request.params));
      document.getElementById('pubkey_txt').innerText = request.params.public;
      document.getElementById('privkey_txt').innerText = request.params.private;
      break;

      case 'attestationResponse':
        console.log('Rev attestationResponse with ' + JSON.stringify(request.params));
        document.getElementById('attestation_txt').innerText = request.params.result;
        break;

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
