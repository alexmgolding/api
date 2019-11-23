const baseURL = 'https://marketdata.websol.barchart.com/getHistory.csv?apikey='
const key = 'd685de05e1a59d65e15c2d9323b1be78'
let url
//charts.js to display data in a chart
const searchTerm = document.querySelector('.search');
let startDate = document.querySelector('.start-date');
let endDate = document.querySelector('.end-date');
const searchFrom = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const stockName = document.querySelector('ul');

searchFrom.addEventListener('submit', fetchResults)

function fetchResults(e) {
    e.preventDefault();
    let url = baseURL + key + '&symbol='+ searchTerm.value +'&type=minutes&startDate='+ startDate + '&endDate=' + endDate;

    fetch(url).then(response => {
        console.log(response);
    })
    console.log(url);

    // getData();
    // async function getData() {
    //     const response = await fetch(url);
    //     const data = await response.text();
    //     console.log(data)
    }
    // if (startDate.value !== '') {
    //     console.log(startDate.value)
    //     url += '&begin_date=' + startDate.value;
    // };

    // if (endDate.value !== '') {
    //     url += '&end_date=' + endDate.value;
    // };






//     fetch(url).then(function (results) {
//         return results.json()
//     }).then(function (json) {
//         displayResults(json);
//     })
//         .catch(err => console.log(err))
// }

// function displayResults(stocks) {
//     console.log(stocks)
//     stocks.results.forEach(s => {
//         let stock = document.createElement('li');
//         stock.innerText = '$' + s.lastPrice;
//         stockName.appendChild(stock);
//     });
// }


// let chart = document.getElementById('myChart').getContext('2d')
// let stockLineChart = new Chart(stockChart, {
//     type: 'line',
//     data: {
//         labels: [],
//         dataset:[{
//             label: 'Stock Price',
//             data:''
//         }]
//     },
//     options: {}
// })
