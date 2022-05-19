const data = `{"ticker":{"base":"BTC","target":"USD","price":"29771.54668105","volume":"31413.67301335","change":"75.51235769"},"timestamp":1652971505,"success":true,"error":""}`

const parsedData = JSON.parse(data); //convert JSON to JS object

console.log(parsedData.ticker.price); //BTC price 

const dataStringify = JSON.stringify(parsedData); // convert JS object to JSON

console.log(dataStringify);