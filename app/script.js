const currencyOne = document.querySelector('#currency-one')
const currencyTwo = document.querySelector('#currency-two')
const btnConverter =document.querySelector('#btn-converter')
const updateInfo = document.querySelector('#update-info')


async function converter(getUpdateInfo){
    const url = await fetch(`https://v6.exchangerate-api.com/v6/c62a7e04cb7eace0dd080d6b/latest/USD`);
    const response = await url.json();
    
    getUpdateInfo(response.time_last_update_utc)
}

function getUpdateInfo(time){
    const date = new Date(time)
    updateInfo.innerHTML = `Ultima atualização: <br> ${date.toUTCString()}`
}

converter(getUpdateInfo) 


