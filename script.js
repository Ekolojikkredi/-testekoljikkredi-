// Sayfa Yönlendirme
function showPage(page) {
    const content = document.getElementById('page-content');
    content.innerHTML = ''; // Önce temizle

    if (page === 'kayit') {
        content.innerHTML = `
            <h2>Kayıt Ol</h2>
            <button onclick="showPage('okul-kayit')">Okul Kaydı</button>
            <button onclick="showPage('ogrenci-kayit')">Öğrenci Kaydı</button>
        `;
    } else if (page === 'okul-kayit') {
        content.innerHTML = `
            <h3>Okul Kaydı</h3>
            <form>
                <label>Okul Adı:</label><input type="text" id="okulAdi" required><br>
                <label>İl:</label><input type="text" id="il" required><br>
                <label>İlçe:</label><input type="text" id="ilce" required><br>
                <label>Okul Şifresi:</label><input type="password" id="okulSifre" required><br>
                <button type="button" onclick="kaydetOkul()">Kaydet</button>
            </form>
        `;
    } else if (page === 'ogrenci-kayit') {
        content.innerHTML = `
            <h3>Öğrenci Kaydı</h3>
            <form>
                <label>Ad:</label><input type="text" id="ogrenciAd" required><br>
                <label>Soyad:</label><input type="text" id="ogrenciSoyad" required><br>
                <label>Okul No:</label><input type="text" id="ogrenciNo" required><br>
                <label>Sınıf:</label><input type="text" id="ogrenciSinif" required><br>
                <button type="button" onclick="kaydetOgrenci()">Kaydet</button>
            </form>
        `;
    } else if (page === 'veri-giris') {
        content.innerHTML = `
            <h3>Veri Girişi</h3>
            <form>
                <label>Okul Adı:</label><input type="text" id="girisOkulAdi" required><br>
                <label>Okul Şifresi:</label><input type="password" id="girisOkulSifre" required><br>
                <button type="button" onclick="dogrulaOkul()">Giriş Yap</button>
            </form>
        `;
    }
}

// Okul Kaydı
function kaydetOkul() {
    const okulAdi = document.getElementById('okulAdi').value;
    const il = document.getElementById('il').value;
    const ilce = document.getElementById('ilce').value;
    const sifre = document.getElementById('okulSifre').value;
    alert(`Okul ${okulAdi} kaydedildi!`);
}

// Öğrenci Kaydı
function kaydetOgrenci() {
    const ad = document.getElementById('ogrenciAd').value;
    const soyad = document.getElementById('ogrenciSoyad').value;
    const okulNo = document.getElementById('ogrenciNo').value;
    const sinif = document.getElementById('ogrenciSinif').value;
    alert(`Öğrenci ${ad} ${soyad} kaydedildi!`);
}

// Veri Girişi Doğrulama
function dogrulaOkul() {
    const girisOkulAdi = document.getElementById('girisOkulAdi').value;
    const girisOkulSifre = document.getElementById('girisOkulSifre').value;
    alert(`Giriş Başarılı: ${girisOkulAdi}`);
}
