# Panduan Operator — Website BPD Desa Jeruk

> Panduan ini untuk operator/pengurus BPD yang ingin **mengubah isi website**
> tanpa perlu memahami kode program secara mendalam.

---

## 📁 Semua Konten Ada di Folder `src/data/`

Semua teks dan data yang tampil di website bersumber dari file-file JSON berikut:

| File | Isi yang Bisa Diubah |
|------|----------------------|
| `config.json` | Nama desa, nomor WhatsApp, alamat, email |
| `bpd.json` | Profil BPD, visi-misi, struktur anggota, fungsi |
| `berita.json` | Daftar berita dan artikel |
| `transparansi.json` | Dokumen, agenda rapat, berita acara, laporan |
| `pilkades.json` | Info Pilkades 2027 (jadwal, tahapan, FAQ) |
| `desa.json` | Data profil Desa Jeruk |
| `programPrioritas.json` | **Program Prioritas BPD** (4 program utama) |

---

## ✏️ Cara Mengubah Konten

### 1. Ubah Nomor WhatsApp
Buka `src/data/config.json`, cari baris:
```json
"whatsapp": "6285280001567"
```
Ganti dengan nomor baru (format: 62 + nomor tanpa angka 0 di depan).

---

### 2. Ubah Nama Anggota BPD
Buka `src/data/bpd.json`, cari bagian `"struktur"`:
```json
"ketua": {
  "nama": "[Nama Ketua]",   ← ganti di sini
  "jabatan": "Ketua BPD"
}
```
Lakukan hal yang sama untuk `wakilKetua`, `sekretaris`, dan tiap objek di dalam `anggota`.

---

### 3. Tambah / Edit Berita
Buka `src/data/berita.json`.

Setiap berita berbentuk:
```json
{
  "id": 5,
  "slug": "judul-berita-tanpa-spasi",
  "judul": "Judul Berita Lengkap",
  "ringkasan": "Teks singkat 1–2 kalimat.",
  "konten": "Isi berita lengkap...",
  "kategori": "Kegiatan BPD",
  "tanggal": "2026-08-20",
  "penulis": "Sekretariat BPD",
  "gambar": null,
  "tags": ["kata-kunci"]
}
```

Untuk **menambah berita baru**: salin blok di atas, ubah `id` (nomor urut berikutnya), `slug` (unik, tanpa spasi, tanpa huruf kapital), dan isi kontennya. Tambahkan di **atas** daftar (agar berita terbaru tampil duluan).

---

### 4. Ubah Program Prioritas
Buka `src/data/programPrioritas.json`.

Setiap program punya bagian berikut yang **aman diubah**:
- `"ringkasan"` — teks singkat di kartu homepage
- `"keterangan"` — penjelasan di halaman detail
- `"tujuan"` — tujuan program
- `"latarBelakang"` — latar belakang
- `"langkah"` — daftar langkah (array teks)
- `"dokumenDiperlukan"` — daftar dokumen (array teks)
- `"hasilDiharapkan"` — daftar hasil (array teks)
- `"status"` — status terkini (contoh: "Berjalan", "Selesai", "Dalam Penelusuran / Verifikasi")

**⚠️ Jangan ubah** `"id"`, `"slug"`, `"ikon"`, `"warna"` — itu mengatur tampilan teknis.

---

### 5. Ubah Agenda Rapat
Buka `src/data/transparansi.json`, cari bagian `"agendaRapat"`:
```json
{
  "id": 1,
  "judul": "Rapat Koordinasi Bulanan BPD",
  "tanggal": "2026-08-15",
  "waktu": "09.00 WIB",
  "tempat": "Balai Desa Jeruk",
  "agenda": "Evaluasi kegiatan Juli 2026",
  "status": "Akan Datang"   ← bisa: "Akan Datang" atau "Selesai"
}
```

---

### 6. Tambah Dokumen Publik
Di `src/data/transparansi.json`, bagian `"dokumenKelembagaan"` atau `"dokumenPublik"`:
- Ubah `"status"` dari `"Belum Tersedia"` menjadi `"Tersedia"`.
- Tambahkan `"url"` yang mengarah ke file PDF yang sudah diunggah.

---

## 🚀 Cara Publikasi Perubahan ke Website

1. Simpan file JSON yang telah diubah.
2. Buka terminal di folder project.
3. Jalankan:
   ```bash
   npm run build
   ```
4. Commit dan push ke GitHub — website otomatis diperbarui via GitHub Actions.

---

## ❗ Aturan Penting

- **Jangan hapus tanda `"` (kutip), `,` (koma), atau `{` `}` `[` `]`** — JSON sangat ketat formatnya. Jika ragu, gunakan https://jsonlint.com untuk mengecek file.
- Setiap perubahan di file data **langsung terlihat** setelah di-build dan di-deploy.
- Jika terjadi kesalahan build, kembalikan file ke versi sebelumnya.

---

## 📞 Butuh Bantuan?

Hubungi pengelola teknis website melalui saluran resmi BPD Desa Jeruk.
