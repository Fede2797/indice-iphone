export const getDolarBlue = async() => {
    const res = await fetch('https://api.bluelytics.com.ar/v2/latest');
    const blue = await res.json();
    const blue_avg = blue.blue.value_avg

    return blue_avg;
}

export const getBitcoin = async() => {
    const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    const response = await res.json();
    const btc_price = response.bitcoin.usd;

    return btc_price;
}

export const data = {
    SALARIO_MIN: 87987,
    BLUE: 0,
    JUBILACION_MIN: 70938,
    CAFECITO: 500,
    BTC: 0,
}