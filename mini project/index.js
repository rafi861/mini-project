// Menangkap elemen dengan id "myNavbar"
const navbar = document.getElementById("navi");

// Menambahkan event listener untuk event "mousedown"
navbar.addEventListener("mousedown", function() {
  // Mengubah warna latar belakang navbar menjadi biru
  navbar.style.backgroundColor = "#abcdef";
});

// Menambahkan event listener untuk event "mouseup"
navbar.addEventListener("mouseup", function() {
  // Mengubah warna latar belakang navbar menjadi warna asli
  navbar.style.backgroundColor = "#abcdef";
});

function btn() {
  alert('closed')
}

document.body.addEventListener("click", function() {
  document.body.style.backgroundColor = "#808080";
});

const paragraph = document.getElementById('aler');
paragraph.addEventListener('click', function() {
  paragraph.remove();
});

