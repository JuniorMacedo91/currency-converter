const currencyOne = document.querySelector('#currency-one')
const currencyTwo = document.querySelector('#currency-two')
const btnConverter =document.querySelector('#btn-converter')
const updateInfo = document.querySelector('#update-info')


async function converter(getUpdateRate){
    const url = await fetch(`https://v6.exchangerate-api.com/v6/c62a7e04cb7eace0dd080d6b/latest/USD`);
    const response = await url.json();
    getUpdateRate(response.time_last_update_utc)
}

function getUpdateRate(time){
    const date = new Date(time);
    updateInfo.innerHTML = `Ultima atualização: <br> ${date.toDateString()}`
}

converter(getUpdateRate) 
converter()
