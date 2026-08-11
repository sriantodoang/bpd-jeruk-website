import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag, Newspaper, Search } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import beritaData from '../data/berita.json';

const KATEGORI_LIST = ['Semua', 'Kegiatan BPD', 'Musdes', 'Aspirasi Masyarakat', 'Pemerintahan Desa'];

function formatDate(d) {
  return new Date(d).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function Berita() {
  const [activeKategori, setActiveKategori] = useState('Semua');
  const [search, setSearch] = useState('');

  const filtered = beritaData.filter((b) => {
    const matchKat = activeKategori === 'Semua' || b.kategori === activeKategori;
    const matchSearch =
      search === '' ||
      b.judul.toLowerCase().includes(search.toLowerCase()) ||
      b.ringkasan.toLowerCase().includes(search.toLowerCase());
    return matchKat && matchSearch;
  });

  return (
    <div>
      <PageHeader
        title="Berita & Kegiatan"
        subtitle="Informasi terkini seputar kegiatan BPD dan pemerintahan Desa Jeruk"
        breadcrumbs={[{ label: 'Berita' }]}
      />

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Filter bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Cari berita..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          {/* Category chips */}
          <div className="flex gap-2 flex-wrap">
            {KATEGORI_LIST.map((k) => (
              <button
                key={k}
                onClick={() => setActiveKategori(k)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  activeKategori === k
                    ? 'bg-primary-700 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {k}
              </button>
            ))}
          </div>
        </div>

        {/* Grid berita */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <Newspaper className="w-12 h-12 mx-auto mb-3 opacity-40" />
            <p className="font-medium">Tidak ada berita ditemukan</p>
            <p className="text-sm mt-1">Coba ubah kata kunci atau kategori pencarian</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((berita) => (
              <Link
                to={`/berita/${berita.slug}`}
                key={berita.id}
                className="card overflow-hidden group"
              >
                <div className="bg-gradient-to-br from-primary-100 to-primary-200 h-44 flex items-center justify-center relative">
                  <Newspaper className="w-12 h-12 text-primary-400" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="badge bg-primary-100 text-primary-700 text-xs">{berita.kategori}</span>
                  </div>
                  <h3 className="font-display font-semibold text-gray-900 leading-snug mb-2 group-hover:text-primary-700 transition-colors line-clamp-2">
                    {berita.judul}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-3 mb-4">{berita.ringkasan}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {formatDate(berita.tanggal)}
                    </span>
                    <span>{berita.penulis}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
