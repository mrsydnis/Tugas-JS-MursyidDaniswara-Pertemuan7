//a1

const tombolCTA = document.querySelector('.cta'); //error terjadi karena pada bagian si cta di style.css ga ada cta.salah adanya cta doang jadi ga kepanggil pas di cek di console
tombolCTA.addEventListener('click', function(e) {
  e.preventDefault();
  alert('Terima kasih! Mengarahkan ke halaman pendaftaran...');
});

//a2
const cards = document.querySelectorAll('.pricing-card'); // sebelum di ubah dia pricing cards kan, nah si outputnya di console jumlah paket tersedia nya cuma 1, tapi pas diubah jadi pricingcard dia jadi output nya ada 3 karena kan emang ada 3


console.log('Jumlah paket tersedia: ' + cards.length);

//a3


cards.forEach(function(card) {
  card.addEventListener('click', function() {
    cards.forEach(function(c) {
      c.classList.remove('selected');
    });
    card.classList.add('selected');
  });
});

//pada bagian a3 yang di ubah adalah card.classList.tambah, dia kita ubah jadi add, karena di js emang ga ada .tambah kan, orang atasnya aja pake bahasa inggris .remove masa bawahnya .tambah
//lalu di a3 juga yang const cards nya di hapus, karena kan di atas di a2 udah di panggil, gatau sih bener apa nggak tapi pas ada double ga kepanggil panggil


//b1

const pilihaninfo = document.getElementById('pilihan-info');

cards.forEach(function(card) {
  card.addEventListener('click', function() {
    const namapaket = card.querySelector('h3').innerText;
    pilihaninfo.innerText = 'Paket dipilih: ' + namapaket;
  });
});


//b2

const semuajudulfaq = document.querySelectorAll('.faq-item h4');

semuajudulfaq.forEach(function(judul) {
  judul.addEventListener('click', function() {
    const isi = this.nextElementSibling;
    isi.classList.toggle('visible');
  });
});


//b3
const searchFaq = document.getElementById('faq-search');

searchFaq.addEventListener('input', function() {
  const ketikValue = this.value.toLowerCase();
  document.querySelectorAll('.faq-item').forEach(function(item) {
    const judulFaq = item.querySelector('h4').innerText.toLowerCase();
    if (judulFaq.includes(ketikValue)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    } 
  });
});

