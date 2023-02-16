const $form = $('form[name="triangle-are"]');
const $edgeA = $form.find('input[name="edgeA"]')
const $edgeB = $form.find('input[name="edgeB"]')
const $edgeC = $form.find('input[name="edgeC"]')

const halfPerimeterOfTriangle = (edgeA, edgeB, edgeC) => {
    return (edgeA + edgeB + edgeC) / 2;
}

$form.find('.js-btn-calculation').on('click', () => {
    const edgeA = parseInt($edgeA.val());
    const edgeB = parseInt($edgeB.val());
    const edgeC = parseInt($edgeC.val());
    if (edgeA + edgeB < edgeC || edgeA + edgeC < edgeB || edgeC + edgeB < edgeA) {
        alert("Khong phai tam giac")
    }
    const halfPerimeter = halfPerimeterOfTriangle(edgeA, edgeB, edgeC)
    const result = Math.sqrt(halfPerimeter * (halfPerimeter - edgeA) * (halfPerimeter - edgeB) * (halfPerimeter - edgeC)).toFixed(2)
    $form.find('input[name="result"]').val(result)
})
