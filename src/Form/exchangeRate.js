const exchangeRate = [
    { name: "Euro", shortcut: "EUR", rate: 4.7021 },
    { name: "Dolar amerykański", shortcut: "USD", rate: 4.5919 },
    { name: "Peso kolumbijskie", shortcut: "COP", rate: 0.0011 },
];

export default exchangeRate;

var requestURL = 'https://api.exchangerate.host/latest?base=PLN';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var response = request.response;
    console.log(response);
}