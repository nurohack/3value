// let oldugumuzYer = prompt('Oldugunuz yeri qeyd edin: ');
// let getdiyimizYer = prompt('Gedeceyiniz yeri qeyd edin: ');
const zaman = document.querySelector('.zaman');

let netice;

zaman.onclick = function () {

    netice = mesafe.value / suret.value;

    document.getElementById('netice').innerHTML = `Sizin hal hazirda oldugunuz yer ${oldugumuzyer.value} seheridir. Gedeceyiniz yer ise ${getdiyimizyer.value} seheridir. Sizin eger ${oldugumuzyer.value} seherinden ${getdiyimizyer.value} seherine ${mesafe.value} km mesafeniz olarsa ve ${suret.value} km suret ile hereket etseniz siz ${getdiyimizyer.value} seherine ${netice.toFixed(2)} saat-a catacaqsiniz.`;
}