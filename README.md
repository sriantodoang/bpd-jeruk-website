# BPD Desa Jeruk — Website Resmi

**Portal Transparansi dan Aspirasi Masyarakat Desa**

Website resmi Badan Permusyawaratan Desa (BPD) Desa Jeruk, Kecamatan Miri, Kabupaten Sragen.
Masa Jabatan: **2026 - 2034**

---

## Teknologi

- React 19 + Vite 6
- Tailwind CSS 3
- React Router DOM 7 (HashRouter)
- Lucide React Icons
- Deploy: GitHub Pages via GitHub Actions

---

## Halaman

| URL | Halaman |
|-----|---------|
| `/` | Beranda |
| `#/profil-bpd` | Profil BPD + Struktur Organisasi |
| `#/tugas-fungsi` | Tugas & Fungsi BPD |
| `#/aspirasi` | Form Aspirasi Masyarakat |
| `#/transparansi` | Transparansi (Program Kerja, Agenda, Dokumen) |
| `#/berita` | Berita & Kegiatan |
| `#/desa-jeruk` | Data Desa Jeruk |
| `#/pilkades-2027` | Info Pilkades 2027 |

---

## Instalasi

```bash
git clone https://github.com/[username]/bpd-jeruk-website.git
cd bpd-jeruk-website
npm install
npm run dev
```

Buka: http://localhost:5173

---

## Build

```bash
npm run build
npm run preview
```

---

## Deploy GitHub Pages

### Cara Otomatis (GitHub Actions)

1. Push ke GitHub
2. Settings > Pages > Source: GitHub Actions
3. Push ke main -> otomatis deploy

### Cara Manual

```bash
npm run build
npx gh-pages -d dist
```

### Konfigurasi base URL

Edit `vite.config.js`:
```js
base: '/bpd-jeruk-website/',  // nama repository
// atau '/' untuk custom domain
```

---

## Cara Update Konten

### Tambah Berita — Edit `src/data/berita.json`

```json
{
  "id": 5,
  "slug": "judul-url-friendly",
  "judul": "Judul Berita",
  "ringkasan": "Ringkasan...",
  "konten": "Isi lengkap...",
  "kategori": "Kegiatan BPD",
  "tanggal": "2026-08-01",
  "penulis": "Sekretariat BPD",
  "gambar": null,
  "tags": ["kata-kunci"]
}
```

### Update Struktur BPD — Edit `src/data/bpd.json`

Ganti placeholder `[Nama Ketua BPD]`, dll. dengan nama sebenarnya.

### Upload Dokumen PDF

1. Letakkan PDF di `public/documents/`
2. Update path di `src/data/transparansi.json`

### Nomor WhatsApp BPD — Edit `src/App.jsx`

```js
const WA_NUMBER = '628xxxxxxxxxx';
```

---

## Struktur Folder

```
bpd-jeruk-website/
├── .github/workflows/deploy.yml
├── public/
│   ├── documents/          <- PDF publik letakkan di sini
│   ├── favicon.svg
│   ├── manifest.json
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/layout/  <- Navbar, Footer
│   ├── components/ui/      <- Komponen reusable
│   ├── data/               <- Semua data JSON (edit untuk update konten)
│   ├── pages/              <- Semua halaman
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## Roadmap

- [x] Fase 1: Website statis, semua halaman, GitHub Pages ready
- [ ] Fase 2: Foto nyata, Google Form aspirasi, custom domain
- [ ] Fase 3: CMS, backend aspirasi, galeri foto
- [ ] Fase 4: Dashboard admin, manajemen dokumen

---

**BPD Desa Jeruk** | Kecamatan Miri, Kabupaten Sragen
Website Desa: https://mail.jeruk-miri.desa.id/
