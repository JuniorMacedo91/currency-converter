const amountInput = document.querySelector('#amount-input')
const currencyOne = document.querySelector('#currency-one')
const currencyTwo = document.querySelector('#currency-two')
const btnConverter =document.querySelector('#btn-converter')
const updateInfo = document.querySelector('#update-info')


const fetchApiExchange = async () => {
    const url = await fetch(`https://v6.exchangerate-api.com/v6/c62a7e04cb7eace0dd080d6b/latest/USD`);
    const response = await url.json();
   
    return response
}

const showRates = async () =>{
    const rateData = await fetchApiExchange();

    const rates = rateData.conversion_rates
   
    for(var rate in rates){
        currencyOne.innerHTML += `<option>${rate}</option>`
        currencyTwo.innerHTML += `<option>${rate}</option>`
    }
}

fetchApiExchange() 
showRates()
