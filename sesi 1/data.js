const nama = "aria eka";
let usia = 10;

const biodata = document.getElementById('biodata');
console.log(biodata);

function generateBiodata() {
    let generasi;

    if (usia >= 10 && usia < 19) { 
        generasi = "anda adalah anak remaja";
    } 
    else if (usia >= 19 && usia < 30) {
        generasi = "anda jenis polutan awowkowkowkwok 😂";
    } 
    else if (usia >= 30) {
        generasi = "ah lu mah tua pak 😭 banyak-banyakin istigfar wkwk";
    }
    else if (usia > 2 && usia < 10) {
        generasi = "anda adalah anak-anak";
    }
    else {
        generasi = "yah lu mah masih bau kencur (bayi) 😜"
    }
    return biodata.innerHTML = generasi;
}
   
console.log(nama);
console.log(usia);

generateBiodata();