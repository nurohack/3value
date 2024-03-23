const zaman = document.querySelector('.zaman');

let netice;

zaman.onclick = function () {

    netice = mesafe.value / suret.value;

    document.getElementById('netice').innerHTML = `Sizin ${oldugumuzyer.value} seherinden ${getdiyimizyer.value} seherine olan mesafe ${mesafe.value} km-dir. Siz ${suret.value} km/saat ile hereket etseniz ${netice.toFixed(2)} saata ${getdiyimizyer.value} seherine catacaqsiniz`;
}
