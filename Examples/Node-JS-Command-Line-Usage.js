const radius = process.argv[2];

if (isNaN(radius)){
    console.log("Geçerli bir yarıçap değeri giriniz...")
}
else{
    const area = Math.PI * Math.pow(radius,2);
    console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area.toFixed(2)}`)
}