const COUNTRIES = [
    {
        name: 'An Giang',
        shortName: 'AG'
    },
    {
        name: 'Bà Rịa - Vũng Tàu',
        shortName: 'BRVT',
    },
    {
        name: 'Bạc Liêu',
        shortName: 'BL',
    },
    {
        name: 'Bắc Kạn',
        shortName: 'BK',
    },
    {
        name: 'Bắc Giang',
        shortName: 'BG',
    },
    {
        name: 'Bắc Ninh',
        shortName: 'BN',
    },
    {
        name: 'Bến Tre',
        shortName: 'BT',
    },
    {
        name: 'Bình Dương',
        shortName: 'BD',
    },
    {
        name: 'Bình Định',
        shortName: 'BDi',
    },
    {
        name: 'Bình Phước',
        shortName: 'Bp',
    },
    {
        name: 'Bình Thuận',
        shortName: 'BTh',
    },
    {
        name: 'Cà Mau',
        shortName: 'CM',
    },
    {
        name: 'Cao Bằng',
        shortName: 'CB',
    },
    {
        name: 'Cần Thơ',
        shortName: 'CT',
    },
    {
        name: 'Đà Nẵng',
        shortName: 'DN',
    },
    {
        name: 'Điện Biên',
        shortName: 'DB',
    },
    {
        name: 'Đắk Lắk',
        shortName: 'DL',
    },
    {
        name: 'Đắk Nông',
        shortName: 'DN',
    },
    {
        name: 'Đồng Nai',
        shortName: 'DNa',
    },
    {
        name: 'Đồng Tháp',
        shortName: 'DT',
    },
    {
        name: 'Gia Lai',
        shortName: 'GL',
    },
    {
        name: 'Hà Giang',
        shortName: 'HG',
    },
    {
        name: 'Hà Nam',
        shortName: 'HNa',
    },
    {
        name: 'Hà Nội',
        shortName: 'HN',
    },
    {
        name: 'Hà Tĩnh',
        shortName: 'HT',
    },
    {
        name: 'Hải Dương',
        shortName: 'HD',
    },
    {
        name: 'Hải Phòng',
        shortName: 'HP',
    },
    {
        name: 'Hậu Giang',
        shortName: 'HG',
    },
    {
        name: 'Hòa Bình',
        shortName: 'HB',
    },
    {
        name: 'Hồ Chí Minh',
        shortName: 'HCM',
    },
    {
        name: 'Hưng Yên',
        shortName: 'HY',
    },
    {
        name: 'Khánh Hòa',
        shortName: 'KH',
    },
    {
        name: 'Kiên Giang',
        shortName: 'KG',
    },
    {
        name: 'Kon Tum',
        shortName: 'KT',
    },
    {
        name: 'Lai Châu',
        shortName: 'LCh',
    },
    {
        name: 'Lạng Sơn',
        shortName: 'LS',
    },
    {
        name: 'Lào Cai',
        shortName: 'LC',
    },
    {
        name: 'Lâm Đồng',
        shortName: 'LD',
    },
    {
        name: 'Long An',
        shortName: 'LA',
    },
    {
        name: 'Nam Định',
        shortName: 'ND',
    },
    {
        name: 'Nghệ An',
        shortName: 'NA',
    },
    {
        name: 'Ninh Bình',
        shortName: 'NB',
    },
    {
        name: 'Ninh Thuận',
        shortName: 'NT',
    },
    {
        name: 'Phú Thọ',
        shortName: 'PT',
    },
    {
        name: 'Phú Yên',
        shortName: 'PY',
    },
    {
        name: 'Quảng Bình',
        shortName: 'QB',
    },
    {
        name: 'Quảng Nam',
        shortName: 'QN',
    },
    {
        name: 'Quảng Ngãi',
        shortName: 'QNg',
    },
    {
        name: 'Quảng Ninh',
        shortName: 'QNi',
    },
    {
        name: 'Quảng Trị',
        shortName: 'QT',
    },
    {
        name: 'Sóc Trăng',
        shortName: 'ST',
    },
    {
        name: 'Sơn La',
        shortName: 'SL',
    },
    {
        name: 'Tây Ninh',
        shortName: 'TN',
    },
    {
        name: 'Thái Bình',
        shortName: 'TB',
    },
    {
        name: 'Thái Nguyên',
        shortName: 'TNg',
    },
    {
        name: 'Thanh Hóa',
        shortName: 'TH',
    },
    {
        name: 'Thừa Thiên Huế',
        shortName: 'TTH',
    },
    {
        name: 'Tiền Giang',
        shortName: 'TG',
    },
    {
        name: 'Trà Vinh',
        shortName: 'TV',
    },
    {
        name: 'Tuyên Quang',
        shortName: 'TQ',
    },
    {
        name: 'Vĩnh Long',
        shortName: 'VL',
    },
    {
        name: 'Vĩnh Phúc',
        shortName: 'VP',
    },
    {
        name: 'Yên Bái',
        shortName: 'YB',
    },
]

const DATA = {
    AG: {
        name: 'An Giang',
        phoneCode: 296,
        postalCode: 880000
    },
    BRVT: {
        name: 'Bà Rịa - Vũng Tàu',
        phoneCode: 254,
        postalCode: 790000
    },
    BL: {
        name: 'Bạc Liêu',
        phoneCode: 291,
        postalCode: 260000
    },
    BK: {
        name: 'Bắc Kạn',
        phoneCode: 209,
        postalCode: 960000
    },
    BG: {
        name: 'Bắc Giang',
        phoneCode: 209,
        postalCode: 220000
    },
    BN: {
        name: 'Bắc Ninh',
        phoneCode: 222,
        postalCode: 790000
    },
    BT: {
        name: 'Bến Tre',
        phoneCode: 275,
        postalCode: 930000
    },
    BD: {
        name: 'Bình Dương',
        phoneCode: 274,
        postalCode: 590000
    },
    BDi: {
        name: 'Bình Định',
        phoneCode: 256,
        postalCode: 820000
    },
    BP: {
        name: 'Bình Phước',
        phoneCode: 271,
        postalCode: 830000
    },
    BTh: {
        name: 'Bình Thuận',
        phoneCode: 252,
        postalCode: 800000
    },
    CM: {
        name: 'Cà Mau',
        phoneCode: 290,
        postalCode: 970000
    },
    CB: {
        name: 'Cao Bằng',
        phoneCode: 206,
        postalCode: 270000
    },
    CT: {
        name: 'Cần Thơ',
        phoneCode: 292,
        postalCode: 900000
    },
}

const countries = COUNTRIES.map((country) => {
    return `<option data-tokens="${country.shortName}" value="${country.shortName}">${country.name}</option>`
})

$('.js-select-picker').html(countries)

$('.selectpicker').on('change', (e) => {
    const provinceCode = e.currentTarget.value;
    const data = DATA[provinceCode];
    const $error = $('.js-error')
    if (data === undefined) {
        $error.css('display', 'block')
        $('.js-area-code').html('')
        $('.js-post-code').html('')
        return;
    }
    $error.css('display', 'none')
    $('.js-area-code').html(data.phoneCode)
    $('.js-post-code').html(data.postalCode)
})
