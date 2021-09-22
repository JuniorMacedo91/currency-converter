const amountInput = document.querySelector('#amount-input')
const currencyOne = document.querySelector('#currency-one')
const currencyTwo = document.querySelector('#currency-two')
const btnConverter =document.querySelector('#btn-converter')
const resultValue = document.querySelector('#result-value')
const currencyName = document.querySelector('#currencyName')
const currencyBase = document.querySelector('#currencyBase')


const fetchApiExchange = async (rateOne,rateTwo) => {
    const url = await fetch(`https://economia.awesomeapi.com.br/json/${rateOne}-${rateTwo}`);
    const response = await url.json()
    return response
}

const showRates = async () =>{
    const url = await fetch(`https://economia.awesomeapi.com.br/json/all`)
    const rates = await url.json()

    for(var rate in rates){
        var getRates = selectedRate =>`<option ${rate === selectedRate ? 'selected':''}>${rate}</option>`
        currencyOne.innerHTML += getRates('BRL')
        currencyTwo.innerHTML +=  getRates('USD')
    }
}

function toConvert(fetchApiExchange){
    var rateOne = currencyOne.value;
    var rateTwo = currencyTwo.value;
   
    return fetchApiExchange('USD','BRL')
}


toConvert(fetchApiExchange)
showRates()


//BRL = 0,190215 USD