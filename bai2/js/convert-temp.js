const $form = $('form[name="convert-temp"]');

$form.find('input[name="value"]').on('input', (event) => {
    const value = event.currentTarget.value
    const result = (parseInt(value) - 32)/ 1.8
    $('#rangeValue').text(`${value} ${String.fromCharCode(176)}F`);
    $('.js-result').text(`${result.toFixed(2)} ${String.fromCharCode(176)}C`);
})
