import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Image, ZoomIn } from 'lucide-react';

/**
 * Komponen Gallery — reusable untuk foto kegiatan, berita, dan dokumentasi.
 *
 * Props:
 * - items: array of { file, judul, deskripsi, tanggal }
 * - title: judul galeri (opsional)
 * - columns: jumlah kolom grid (default 3)
 * - showInfo: tampilkan judul & deskripsi di bawah foto (default true)
 */
export default function Gallery({ items = [], title = '', columns = 3, showInfo = true }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const colClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-2 sm:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-4',
  }[columns] || 'grid-cols-2 sm:grid-cols-3';

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevPhoto = () => setLightboxIndex((i) => (i - 1 + items.length) % items.length);
  const nextPhoto = () => setLightboxIndex((i) => (i + 1) % items.length);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (lightboxIndex === null) return;
    if (e.key === 'ArrowLeft') prevPhoto();
    if (e.key === 'ArrowRight') nextPhoto();
    if (e.key === 'Escape') closeLightbox();
  };

  const formatDate = (d) => {
    if (!d) return '';
    return new Date(d).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const getImageSrc = (file) => {
    if (!file) return null;
    // Jika sudah URL lengkap, langsung gunakan
    if (file.startsWith('http')) return file;
    // Jika path relatif dari public/
    return `/${file}`;
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-16 text-gray-400">
        <Image className="w-12 h-12 mx-auto mb-3 opacity-40" />
        <p className="font-medium">Belum ada foto</p>
        <p className="text-sm mt-1">Foto akan ditampilkan di sini setelah diunggah</p>
      </div>
    );
  }

  return (
    <div onKeyDown={handleKeyDown} tabIndex={-1}>
      {title && (
        <h3 className="font-display font-semibold text-gray-900 text-lg mb-4">{title}</h3>
      )}

      {/* Grid Foto */}
      <div className={`grid ${colClass} gap-3`}>
        {items.map((item, index) => {
          const src = getImageSrc(item.file);
          return (
            <div
              key={item.id || index}
              className="group relative overflow-hidden rounded-xl bg-primary-50 cursor-pointer aspect-video"
              onClick={() => openLightbox(index)}
            >
              {src ? (
                <img
                  src={src}
                  alt={item.judul || `Foto ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              {/* Placeholder jika foto belum ada */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center text-primary-300 ${src ? 'hidden' : 'flex'}`}
                style={{ display: src ? 'none' : 'flex' }}
              >
                <Image className="w-8 h-8 mb-1 opacity-50" />
                <span className="text-xs text-center px-2 opacity-60">{item.judul || 'Foto belum tersedia'}</span>
              </div>
              {/* Overlay hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <ZoomIn className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              {/* Info singkat di bawah */}
              {showInfo && item.judul && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform">
                  <p className="text-white text-xs font-medium line-clamp-2">{item.judul}</p>
                  {item.tanggal && (
                    <p className="text-white/70 text-xs mt-0.5">{formatDate(item.tanggal)}</p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Tombol tutup */}
          <button
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-10"
            onClick={closeLightbox}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigasi kiri */}
          {items.length > 1 && (
            <button
              className="absolute left-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Foto */}
          <div
            className="max-w-4xl max-h-screen w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const current = items[lightboxIndex];
              const src = getImageSrc(current.file);
              return (
                <>
                  {src ? (
                    <img
                      src={src}
                      alt={current.judul || `Foto ${lightboxIndex + 1}`}
                      className="max-h-[75vh] max-w-full object-contain rounded-lg"
                    />
                  ) : (
                    <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center">
                      <Image className="w-16 h-16 text-gray-600" />
                    </div>
                  )}
                  {/* Keterangan */}
                  {(current.judul || current.deskripsi) && (
                    <div className="mt-4 text-center text-white max-w-xl px-4">
                      {current.judul && <p className="font-semibold text-base">{current.judul}</p>}
                      {current.deskripsi && <p className="text-sm text-white/70 mt-1">{current.deskripsi}</p>}
                      {current.tanggal && (
                        <p className="text-xs text-white/50 mt-1">{formatDate(current.tanggal)}</p>
                      )}
                    </div>
                  )}
                  {/* Counter */}
                  {items.length > 1 && (
                    <p className="text-white/50 text-xs mt-3">
                      {lightboxIndex + 1} / {items.length}
                    </p>
                  )}
                </>
              );
            })()}
          </div>

          {/* Navigasi kanan */}
          {items.length > 1 && (
            <button
              className="absolute right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
