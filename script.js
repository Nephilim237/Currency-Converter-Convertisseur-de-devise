const currencyOne = document.getElementById('currency-1')
const currencyTwo = document.getElementById('currency-2')
const amountOne = document.getElementById('amount-1')
const amountTwo = document.getElementById('amount-2')
const rateValue = document.getElementById('rate')
const swap = document.getElementById('swap')

function handleCurrencies() {
    const firstCurrencyName = currencyOne.value
    const secondCurrencyName = currencyTwo.value

    return fetch(`https://api.exchangerate-api.com/v4/latest/${firstCurrencyName}`)
    .then(response => response.json())
    .then(({rates}) => {
        amountTwo.value = (rates[secondCurrencyName] * amountOne.value).toFixed(2)

        rateValue.innerText = `1 ${firstCurrencyName} = ${rates[secondCurrencyName]} ${secondCurrencyName}`
    })
}

function swapCurrency() {
    [currencyOne.value, currencyTwo.value] = [currencyTwo.value, currencyOne.value]
    handleCurrencies()
}

currencyOne.addEventListener('change', handleCurrencies)
currencyTwo.addEventListener('change', handleCurrencies)
amountTwo.addEventListener('input', handleCurrencies)
swap.addEventListener('click', swapCurrency)

handleCurrencies();
