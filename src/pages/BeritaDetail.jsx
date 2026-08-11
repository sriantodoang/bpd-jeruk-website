import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowLeft, Newspaper } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import beritaData from '../data/berita.json';

function formatDate(d) {
  return new Date(d).toLocaleDateString('id-ID', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  });
}

export default function BeritaDetail() {
  const { slug } = useParams();
  const berita = beritaData.find((b) => b.slug === slug);

  if (!berita) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <Newspaper className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h2 className="text-xl font-display font-bold text-gray-900 mb-2">Berita tidak ditemukan</h2>
        <Link to="/berita" className="btn-primary mt-4">
          <ArrowLeft className="w-4 h-4" /> Kembali ke Berita
        </Link>
      </div>
    );
  }

  const related = beritaData.filter((b) => b.id !== berita.id).slice(0, 3);

  return (
    <div>
      <PageHeader
        title={berita.judul}
        subtitle=""
        breadcrumbs={[
          { label: 'Berita', path: '/berita' },
          { label: berita.kategori },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Artikel */}
          <article className="lg:col-span-2">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">
              <span className="badge bg-primary-100 text-primary-700">{berita.kategori}</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> {formatDate(berita.tanggal)}
              </span>
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" /> {berita.penulis}
              </span>
            </div>

            {/* Gambar placeholder */}
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 h-56 rounded-xl flex items-center justify-center mb-8">
              <Newspaper className="w-14 h-14 text-primary-400" />
            </div>

            {/* Konten */}
            <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
              {berita.konten.split('\n\n').map((para, i) => (
                <p key={i} className="mb-4">{para}</p>
              ))}
            </div>

            {/* Tags */}
            {berita.tags && (
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="w-4 h-4 text-gray-400" />
                  {berita.tags.map((tag) => (
                    <span key={tag} className="badge bg-gray-100 text-gray-600 text-xs px-2.5 py-1">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Back button */}
            <div className="mt-8">
              <Link to="/berita" className="btn-secondary">
                <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar Berita
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside>
            <div className="card p-5 sticky top-24">
              <h3 className="font-display font-semibold text-gray-900 mb-4">Berita Lainnya</h3>
              <div className="space-y-4">
                {related.map((b) => (
                  <Link
                    key={b.id}
                    to={`/berita/${b.slug}`}
                    className="flex gap-3 group"
                  >
                    <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Newspaper className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-primary-700 transition-colors leading-snug">
                        {b.judul}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {new Date(b.tanggal).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
