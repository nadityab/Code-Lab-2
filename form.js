var form = document.getElementById("myForm");
var btnSubmit = document.getElementById("btn-submit");

function submit() {
  var nama = document.getElementById("nama").value;
  var email = document.getElementById("email").value;
  var alamat = document.getElementById("alamat").value;

  if (!nama || !email || !alamat) {
    alert("Anda Harus Mengisi Data Dengan Lengkap");
  }
}

btnSubmit.addEventListener("click", submit);
