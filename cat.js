function buttonon() {
  document.getElementById("bulb1").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
  document.getElementById("cat1").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
  document.getElementById("switchstatus").textContent = "SWITCH ON";
  document.getElementById("button1").style.backgroundColor = "green";
  document.getElementById("button2").style.backgroundColor = "red";
}

function buttonoff() {
  document.getElementById("bulb1").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
  document.getElementById("cat1").src =
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
  document.getElementById("switchstatus").textContent = "SWITCH OFF";
  document.getElementById("button1").style.backgroundColor = "red";
  document.getElementById("button2").style.backgroundColor = "green";
}
