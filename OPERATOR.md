# Panduan Operator — Website BPD Desa Jeruk

> Panduan ini untuk operator/pengurus BPD yang ingin **mengubah isi website**
> tanpa perlu memahami kode program secara mendalam.

---

## 📁 Struktur File Penting

```
website/
├── public/
│   ├── images/
│   │   ├── anggota/       ← 📸 Foto profil anggota BPD
│   │   ├── berita/        ← 📸 Foto thumbnail berita
│   │   ├── kegiatan/      ← 📸 Foto dokumentasi kegiatan
│   │   ├── desa/          ← 📸 Foto kondisi desa
│   │   └── galeri/        ← 📸 Foto galeri umum
│   └── documents/
│       ├── regulasi/      ← 📄 File PDF peraturan/regulasi
│       └── laporan/       ← 📄 File PDF laporan kegiatan
└── src/data/
    ├── bpd.json           ← Data profil & anggota BPD
    ├── berita.json        ← Daftar berita & artikel
    ├── media.json         ← Daftar semua foto
    ├── config.json        ← Nomor WA, email, alamat
    ├── transparansi.json  ← Dokumen & agenda rapat
    ├── pilkades.json      ← Info Pilkades 2027
    ├── desa.json          ← Data profil Desa Jeruk
    └── programPrioritas.json
```

---

## 📸 Aturan Foto (PENTING)

### Format foto yang disarankan

| Hal | Aturan |
|-----|--------|
| **Format** | JPG atau WebP (bukan PNG untuk foto) |
| **Ukuran file** | Maksimal 500 KB per foto |
| **Foto profil anggota** | Disarankan rasio 1:1 (kotak), minimal 400×400 piksel |
| **Foto berita/kegiatan** | Rasio 16:9, minimal 800×450 piksel |

### Nama file yang baik

✅ **Bagus:**
```
ketua-bpd-jeruk.jpg
musdes-februari-2026-01.jpg
pelantikan-bpd-15-januari-2026.jpg
```

❌ **Hindari:**
```
IMG_938383.jpg
foto (1).jpg
WhatsApp Image 2026.jpg
foto baru.jpg       ← jangan pakai spasi
```

**Aturan nama file:**
- Gunakan huruf kecil semua
- Gunakan tanda `-` (strip) sebagai pengganti spasi
- Sertakan tanggal atau nomor urut untuk foto kegiatan
- Jangan gunakan karakter khusus: `! @ # $ % ^ & *`

---

## 👤 Mengganti Foto Profil Anggota BPD

### Langkah-langkah:

**Langkah 1 — Siapkan foto**
- Ukuran: minimal 400×400 piksel, rasio 1:1 (kotak)
- Format: JPG
- Maksimal: 300 KB

**Langkah 2 — Beri nama file sesuai format**
Contoh untuk Ketua BPD:
```
ketua-bpd.jpg
```
Contoh untuk anggota bernama Sunarno:
```
sunarno.jpg
```

**Langkah 3 — Upload ke folder yang tepat**
```
public/images/anggota/
```

**Langkah 4 — Periksa nama file di `src/data/bpd.json`**

Buka file `src/data/bpd.json`, cari bagian `"struktur"`. Setiap anggota punya field `"foto"`:
```json
"ketua": {
  "nama": "Sunarto",
  "jabatan": "Ketua BPD",
  "foto": "images/anggota/ketua-bpd.jpg",   ← nama file harus cocok
  "profilSingkat": "Ketua BPD periode 2026-2034."
}
```

Pastikan nama file di `"foto"` **sama persis** dengan file yang Anda upload.

**Langkah 5 — Build dan publish**
```bash
npm run build
```
Lalu commit dan push ke GitHub.

---

## ✏️ Mengganti Data Anggota BPD

Buka `src/data/bpd.json`, cari bagian `"struktur"`:

```json
"ketua": {
  "nama": "Sunarto",              ← Ganti nama
  "jabatan": "Ketua BPD",        ← Jangan diubah
  "wilayah": "—",                ← Wilayah keterwakilan
  "keterwakilan": "Wilayah",     ← "Wilayah" atau "Perempuan"
  "pendidikan": "S1",            ← Pendidikan terakhir
  "foto": "images/anggota/ketua-bpd.jpg",
  "profilSingkat": "Keterangan singkat tentang anggota."
}
```

Untuk anggota biasa, edit array `"anggota"`:
```json
{
  "nama": "Sunarno",
  "jabatan": "Anggota BPD",
  "wilayah": "Wilayah I",
  "keterwakilan": "Wilayah",
  "pendidikan": "SMA",
  "foto": "images/anggota/sunarno.jpg",
  "profilSingkat": "Anggota BPD mewakili Wilayah I."
}
```

---

## 📰 Menambah Berita Baru dengan Foto

### Langkah-langkah:

**Langkah 1 — Siapkan foto**
- Foto thumbnail (gambar utama): rasio 16:9, minimal 800×450 piksel
- Foto galeri (opsional, bisa banyak): bebas ukuran

**Langkah 2 — Upload foto**
- Thumbnail → `public/images/berita/`
- Galeri kegiatan → `public/images/kegiatan/`

Contoh nama file:
```
public/images/berita/rapat-apbdes-april-2026.jpg
public/images/kegiatan/rapat-apbdes-april-2026-01.jpg
public/images/kegiatan/rapat-apbdes-april-2026-02.jpg
```

**Langkah 3 — Tambah data berita di `src/data/berita.json`**

Salin blok di bawah dan isi datanya:
```json
{
  "id": 5,
  "slug": "judul-berita-tanpa-spasi-lowercase",
  "judul": "Judul Berita Lengkap",
  "ringkasan": "Ringkasan 1–2 kalimat yang tampil di daftar berita.",
  "konten": "Isi berita lengkap.\n\nParagraf kedua dipisah dengan \\n\\n.\n\nParagraf ketiga.",
  "kategori": "Kegiatan BPD",
  "tanggal": "2026-08-15",
  "penulis": "Sekretariat BPD",
  "gambar": "images/berita/rapat-apbdes-april-2026.jpg",
  "galeri": [
    "images/kegiatan/rapat-apbdes-april-2026-01.jpg",
    "images/kegiatan/rapat-apbdes-april-2026-02.jpg"
  ],
  "status": "published",
  "tags": ["rapat", "APBDes", "pengawasan"]
}
```

> ⚠️ **Penting:** Tambahkan berita baru di **bagian paling atas** array (sebelum berita lama) agar berita terbaru tampil duluan.

**Pilihan kategori:**
- `"Kegiatan BPD"` — rapat, kunjungan, agenda BPD
- `"Musdes"` — musyawarah desa
- `"Aspirasi Masyarakat"` — penyerapan aspirasi warga
- `"Pemerintahan Desa"` — info dari pemerintah desa

**Format slug:**
- Huruf kecil semua
- Gunakan `-` (strip) pengganti spasi
- Unik (tidak boleh sama dengan berita lain)
- Contoh: `"pelantikan-bpd-januari-2026"`

---

## 🖼️ Menambah Foto ke Halaman Galeri

**Langkah 1 — Upload foto**
```
public/images/kegiatan/    ← untuk foto kegiatan BPD
public/images/desa/        ← untuk foto kondisi desa/masyarakat
public/images/galeri/      ← untuk foto umum
```

**Langkah 2 — Daftarkan di `src/data/media.json`**

Buka `src/data/media.json`. Tambahkan entry baru di bagian `"kegiatan"` atau `"galeri"`:
```json
{
  "id": "kegiatan-004",
  "nama": "Rapat Evaluasi APBDes",
  "kategori": "kegiatan",
  "file": "images/kegiatan/rapat-apbdes-april-2026-01.jpg",
  "judul": "Rapat Evaluasi Pelaksanaan APBDes Triwulan I",
  "deskripsi": "Rapat evaluasi yang dihadiri seluruh anggota BPD dan perwakilan pemerintah desa",
  "tanggal": "2026-04-05",
  "status": "active"
}
```

> `"id"` harus unik. Lanjutkan penomoran dari yang sudah ada.

---

## 📋 Mengubah Konten Lain

### Nomor WhatsApp
Buka `src/data/config.json`:
```json
"whatsapp": "6285280001567"
```
Format: `62` + nomor tanpa angka 0 di depan.

### Agenda Rapat
Buka `src/data/transparansi.json`, bagian `"agendaRapat"`:
```json
{
  "id": 1,
  "judul": "Rapat Koordinasi Bulanan BPD",
  "tanggal": "2026-08-15",
  "waktu": "09.00 WIB",
  "tempat": "Balai Desa Jeruk",
  "agenda": "Evaluasi kegiatan Juli 2026",
  "status": "Akan Datang"   ← "Akan Datang" atau "Selesai"
}
```

### Program Prioritas
Buka `src/data/programPrioritas.json`. Aman diubah: `"ringkasan"`, `"keterangan"`, `"tujuan"`, `"latarBelakang"`, `"langkah"`, `"status"`.

⚠️ **Jangan ubah:** `"id"`, `"slug"`, `"ikon"`, `"warna"`.

---

## 🚀 Cara Publish Perubahan ke Website

```bash
# 1. Pastikan semua file sudah disimpan
# 2. Jalankan build
npm run build

# 3. Commit dan push ke GitHub
git add .
git commit -m "Update: [jelaskan perubahannya]"
git push
```

Website akan otomatis diperbarui via GitHub Actions (biasanya 2–5 menit).

---

## ❗ Aturan Penting

- **Jangan hapus tanda `"`, `,`, `{`, `}`, `[`, `]`** — JSON sangat ketat formatnya.
- Gunakan https://jsonlint.com untuk mengecek file JSON jika ada error.
- Jika terjadi kesalahan build, kembalikan file ke versi sebelumnya.
- Nama file foto **harus sama persis** antara yang ada di folder dan yang tertulis di JSON (termasuk huruf kecil/besar).

---

## 📞 Butuh Bantuan?

Hubungi pengelola teknis website melalui saluran resmi BPD Desa Jeruk.
