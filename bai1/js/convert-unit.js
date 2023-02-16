const CURRENCY = {
    USD: 24780,
    EUR: 26630,
    JPY: 188,
    GBP: 30141,
    CHF: 27022,
}
const $form = $('form[name="convert-money"]');

const convertCurrency = (currency, unit) => {
    const value = CURRENCY[unit]
    if (value === undefined) {
        return;
    }
    let result = parseInt(currency) * value;
    result = result.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
    $form.find('input[name="result"]').val(`${result}`);
}

$form.find('.js-convert-button').on('click', () => {
    const currency = $form.find('input[name="currency"]').val();
    const unit = $form.find('#currency-unit').find(':selected').val();
    convertCurrency(currency, unit);
})
