const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
const refresh = document.querySelector("#refresh");
const gbp = document.querySelector("#gbp");
const usd = document.querySelector("#usd");
const eur = document.querySelector("#eur");
const bitValue = document.querySelector("#rate");
let current;

function getData(radio) {
  fetch(url)
  .then(getData)
  .then(appendData)
  .catch(displayErr);
  
  //GET DATA, THROW ERROR IF NEEDED
  function getData(res) {
    if(!res.ok) throw Error(res.status);
    return res.json();
  }
  
  //APPEND DATA TO HTML
  function appendData(obj) {
    data = obj.bpi[radio].rate;
   
    if(radio === "EUR") bitValue.innerHTML = data + "&euro;";
    else if(radio === "USD") bitValue.innerHTML = data + "&#36;";
    else if(radio === "GBP") bitValue.innerHTML = data + "&pound;";
  }
  
  //DISPLAY ERROR
  function displayErr(err) {
    bitValue.innerHTML = err;
  }
  
  current = radio;
}

window.onload = getData("GBP");

refresh.addEventListener("click", function() {
  getData(current);
});

gbp.addEventListener("click", function() {
  getData("GBP");
});

usd.addEventListener("click", function() {
  getData("USD");
});

eur.addEventListener("click", function() {
  getData("EUR");
});

/*var XHR = new XMLHttpRequest();
  
  XHR.onreadystatechange = function() {
    if(XHR.readyState === 4 && XHR.status === 200)
      var data = JSON.parse(XHR.responseText).bpi[radio].rate;
  
    if(data !== undefined) {
      if(radio === "EUR") rate.innerHTML = data + "&euro;";
      else if(radio === "USD") rate.innerHTML = data + "&#36;";
      else if(radio === "GBP") rate.innerHTML = data + "&pound;";
    }
  }
  
  XHR.open("GET", url);
  XHR.send();*/

