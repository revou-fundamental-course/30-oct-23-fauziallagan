let reset = document.getElementById('reset');
document.getElementById('hitung').addEventListener('click', function () {

  let beratB = parseFloat(document.getElementById('berat').value);
  let result = document.getElementById('result');
  let tinggiB = parseFloat(document.getElementById('tinggi').value) / 100;
  let keterangan = document.getElementById('keterangan');

  let bmi = beratB / (tinggiB * tinggiB);
  result.textContent = bmi.toFixed(2) + ' KG';
  console.log(bmi);

  if(bmi < 18.5) {
    keterangan.textContent = 'Keterangan : kurang berat badan';
  }
  else if(bmi >= 18.5 && bmi <= 24.9) {
    keterangan.textContent = 'Keterangan : Ideal';
  }
  else if(bmi >= 25.0 && bmi <= 29.9) {
    keterangan.textContent = 'Keterangan : kelebihan berat badan';
  } else if(bmi >= 30.0) {
    keterangan.textContent = 'Keterangan : Obesitas';
  }
  else {
    result.textContent = "DATA NOT VALID";
    keterangan.textContent = "Keterangan : Harap Isi data dengan benar !"
  }

})

reset.addEventListener('click', () => {
  document.getElementById('berat').value = '';
  document.getElementById('tinggi').value = '';
  document.getElementById('age').value = '';
})

document.getElementById('konsul').addEventListener('click', function () {
  alert("Comming Soon");

})
document.getElementById('konsul2').addEventListener('click', function () {
  alert("Comming Soon");

})