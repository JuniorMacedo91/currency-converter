const amount = document.querySelector('#amount-input')
const currencyOne = document.querySelector('#currencyOne')
const currencyTwo = document.querySelector('#currencyTwo')
const btnConverter = document.querySelector('#btn-convert')
const showResult = document.getElementById('result-container')
const result = document.querySelector('#result')
const baseRate = document.querySelector('#rate')
const updateRate = document.querySelector('#updateRate')

btnConverter.addEventListener('click', toConvert)

async function fetchExchangeRate (){
    const url = await fetch(`https://api.frankfurter.app/currencies`)
    const response = await url.json()
    display(response)
}

fetchExchangeRate()

async function display (response){
    const rates = response
    
    for(let rate in rates){
        currencyOne.innerHTML += `<option>${rate}</option>`
        currencyTwo.innerHTML += `<option>${rate}</option>`
    }
    selectedRateOne = currencyOne.options[currencyOne.selectedIndex = 31].text
    selectedRateTwo = currencyTwo.options[currencyTwo.selectedIndex = 2].text
}

async function toConvert(){
   (amount.value === '')? alert('Informe um valor') : showResult.style.display='grid'
 
    let currentDate = new Date().toDateString()
    let selectedRateOne = currencyOne.value
    let selectedRateTwo = currencyTwo.value

    const url = await fetch(`https://api.frankfurter.app/latest?&from=${selectedRateOne}&to=${selectedRateTwo}`)
    const response = await url.json()
    const rateInfo = Object.entries(response.rates)
    
    const rate = rateInfo[0][1]
    let total = (rate * amount.value)

    result.innerHTML = total.toFixed(2).replace('.',',')
    baseRate.innerHTML = `1 ${selectedRateOne} = ${rate.toFixed(2)}`
    updateRate.innerHTML = `Ultima atualização: ${currentDate}`
}
