import { useState } from 'react';
import { Image, Camera } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import Gallery from '../components/ui/Gallery';
import mediaData from '../data/media.json';

const KATEGORI_GALERI = [
  {
    id: 'semua',
    label: 'Semua Foto',
    icon: Camera,
    color: 'bg-primary-700',
  },
  {
    id: 'kegiatan',
    label: 'Kegiatan BPD',
    icon: Camera,
    color: 'bg-emerald-600',
    deskripsi: 'Dokumentasi kegiatan resmi BPD Desa Jeruk',
  },
  {
    id: 'musdes',
    label: 'Musyawarah Desa',
    icon: Camera,
    color: 'bg-blue-600',
    deskripsi: 'Foto musyawarah desa dan rapat BPD',
  },
  {
    id: 'aspirasi',
    label: 'Dokumentasi Aspirasi',
    icon: Camera,
    color: 'bg-orange-500',
    deskripsi: 'Dokumentasi kegiatan penyerapan aspirasi masyarakat',
  },
  {
    id: 'desa',
    label: 'Kegiatan Masyarakat',
    icon: Camera,
    color: 'bg-purple-600',
    deskripsi: 'Foto kegiatan dan kondisi Desa Jeruk',
  },
];

// Kumpulkan semua foto dari media.json + beri label kategori tampilan
function buildGaleriItems() {
  const all = [
    ...mediaData.kegiatan,
    ...mediaData.galeri,
  ];
  return all;
}

export default function Galeri() {
  const [activeKategori, setActiveKategori] = useState('semua');
  const allItems = buildGaleriItems();

  // Filter berdasarkan kategori aktif
  const filteredItems = activeKategori === 'semua'
    ? allItems
    : allItems.filter((item) => item.kategori === activeKategori);

  return (
    <div>
      <PageHeader
        title="Galeri Foto"
        subtitle="Dokumentasi visual kegiatan BPD dan kehidupan Desa Jeruk"
        breadcrumbs={[{ label: 'Galeri' }]}
      />

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Filter kategori */}
        <div className="flex flex-wrap gap-2 mb-8">
          {KATEGORI_GALERI.map((kat) => (
            <button
              key={kat.id}
              onClick={() => setActiveKategori(kat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeKategori === kat.id
                  ? 'bg-primary-700 text-white shadow-sm'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {kat.label}
              {activeKategori === kat.id && filteredItems.length > 0 && (
                <span className="ml-1.5 bg-white/20 text-white text-xs px-1.5 py-0.5 rounded-full">
                  {filteredItems.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Deskripsi kategori */}
        {activeKategori !== 'semua' && (
          <div className="mb-6 text-sm text-gray-500">
            {KATEGORI_GALERI.find((k) => k.id === activeKategori)?.deskripsi}
          </div>
        )}

        {/* Galeri grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20">
            <Image className="w-14 h-14 text-gray-200 mx-auto mb-4" />
            <p className="text-gray-400 font-medium">Belum ada foto di kategori ini</p>
            <p className="text-sm text-gray-400 mt-1">
              Foto akan ditampilkan setelah diunggah ke folder yang sesuai
            </p>
          </div>
        ) : (
          <Gallery
            items={filteredItems}
            columns={3}
            showInfo={true}
          />
        )}

        {/* Panduan singkat untuk operator */}
        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <Camera className="w-4 h-4 text-amber-700" />
            </div>
            <div>
              <h3 className="font-semibold text-amber-900 mb-2">📸 Cara Menambah Foto ke Galeri</h3>
              <ol className="text-sm text-amber-800 space-y-1 list-decimal list-inside">
                <li>Siapkan foto dalam format JPG atau WebP, maksimal 500 KB per foto</li>
                <li>Beri nama file yang jelas, contoh: <code className="bg-amber-100 px-1 rounded">musdes-februari-2026-01.jpg</code></li>
                <li>Upload ke folder <code className="bg-amber-100 px-1 rounded">public/images/kegiatan/</code></li>
                <li>Tambahkan data foto di <code className="bg-amber-100 px-1 rounded">src/data/media.json</code> bagian <code className="bg-amber-100 px-1 rounded">"kegiatan"</code> atau <code className="bg-amber-100 px-1 rounded">"galeri"</code></li>
                <li>Jalankan <code className="bg-amber-100 px-1 rounded">npm run build</code> lalu push ke GitHub</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
