# PDFWordPro - Converter PDF ke Word & PDF Suite Online (GitHub Pages)

Aplikasi web modern berbasis **100% Client-Side** untuk konversi PDF ke Microsoft Word (.docx), ekstraksi teks, penggabungan PDF (Merge), pemisahan halaman (Split), dan konversi Gambar ke PDF. 

Didesain khusus untuk di-host secara gratis di **GitHub Pages**, memiliki performa tinggi, UI Glassmorphism mewah, siap monetisasi iklan, dan dioptimasi penuh untuk SEO agar mendapatkan banyak trafik organik dari Google.

---

## 🚀 Fitur Utama

1. **Convert PDF ke Word (.docx)**: Mengekstrak teks, paragraf, dan heading menjadi file `.docx` asli tanpa server backend.
2. **Convert PDF ke Teks (.txt)**: Ekstraksi teks murni secara cepat.
3. **Gabung PDF (Merge)**: Menggabungkan beberapa dokumen PDF menjadi satu file.
4. **Pisah PDF (Split)**: Mengambil halaman tertentu atau rentang halaman (misal: `1-3, 5`).
5. **Gambar ke PDF (JPG/PNG to PDF)**: Menyatukan gambar menjadi dokumen PDF.
6. **100% Client-Side & Privasi Penuh**: Semua proses berlangsung di memori browser pengguna. File tidak pernah dikirim ke server.
7. **Siap Monetisasi Iklan**: Tersedia slot iklan khusus di bagian Header, Tengah (Mid-Content), dan Hasil Download.
8. **SEO & Rich Snippets Ready**: Dilengkapi Schema.org (`WebApplication`, `HowTo`, `FAQPage`), meta tags, OpenGraph, `robots.txt`, dan `sitemap.xml`.
9. **Dark / Light Mode & Multi-Bahasa**: Tampilan responsif dengan dukungan tema gelap/terang dan bahasa Indonesia / Inggris.

---

## 📦 Cara Push ke GitHub & Mengaktifkan GitHub Pages

Buka terminal di folder ini (`d:\VSCODE\convertpdftoword.github.io`):

### 1. Inisialisasi Git & Commit Pertama
```powershell
git init
git add .
git commit -m "feat: initial commit pdf to word online converter suite"
git branch -M main
```

### 2. Hubungkan ke Repository GitHub Anda
Ganti `<username-anda>` dan `<nama-repo>` dengan repository yang ada di akun GitHub Anda:
```powershell
git remote add origin https://github.com/<username-anda>/<nama-repo>.git
git push -u origin main
```

> **Tips:** Jika menggunakan GitHub CLI (`gh`), Anda bisa langsung membuat repo baru secara otomatis dengan perintah:
> ```powershell
> gh repo create convertpdftoword.github.io --public --source=. --remote=origin --push
> ```

### 3. Aktifkan GitHub Pages
1. Buka repository Anda di GitHub melalui browser.
2. Masuk ke tab **Settings** > **Pages** (di menu sebelah kiri).
3. Pada bagian **Build and deployment** > **Branch**:
   - Pilih Branch: `main`
   - Pilih Folder: `/(root)`
4. Klik **Save**.
5. Tunggu 1–2 menit, website Anda akan langsung aktif di:
   `https://<username>.github.io/<nama-repo>/` (atau di root domain jika menggunakan `<username>.github.io`).

---

## 💰 Cara Memasang Iklan (Google AdSense / Adsterra / dsb.)

Di file `index.html`, cari komentar berikut dan ganti isinya dengan script iklan Anda:

1. **Slot Iklan Atas (Header Banner):**
   Cari `<div class="ad-placeholder" id="ad-slot-header">`
2. **Slot Iklan Tengah (Mid-Content Display):**
   Cari `<div class="ad-placeholder" id="ad-slot-middle">`
3. **Slot Iklan Bawah (Footer Banner):**
   Cari `<div class="ad-placeholder" id="ad-slot-bottom">`

---

## 📈 Tips Menaikkan Trafik Organik (SEO)
- Daftarkan sitemap Anda di **Google Search Console** (`https://domain-anda.github.io/sitemap.xml`).
- Hubungkan dengan custom domain jika ingin meningkatkan kredibilitas merek (misalnya membeli domain `.com` atau `.id` seharga terjangkau).
- Bagikan link ke forum, media sosial, grup tugas kuliah, dan komunitas kantor untuk membangun backlink awal.
