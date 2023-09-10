const f = new Intl.NumberFormat(["es-DO"], {
    style:"currency", 
    currency:"DOP",
    currencyDisplay:"symbol",
    maximumFractionDigits:2
});

export{f}
