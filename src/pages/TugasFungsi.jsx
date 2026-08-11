import { Scale, CheckCircle, FileText, MessageSquare, Eye, ExternalLink } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import bpdData from '../data/bpd.json';

const iconMap = { FileText, MessageSquare, Eye, Scale };

export default function TugasFungsi() {
  return (
    <div>
      <PageHeader
        title="Tugas dan Fungsi BPD"
        subtitle="Kewenangan dan tanggung jawab Badan Permusyawaratan Desa berdasarkan peraturan perundang-undangan"
        breadcrumbs={[{ label: 'Tugas & Fungsi' }]}
      />

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Pengantar */}
        <section className="mb-12">
          <div className="card p-8 bg-primary-50 border-primary-200">
            <p className="text-gray-700 leading-relaxed">
              BPD merupakan lembaga yang melaksanakan fungsi pemerintahan desa yang anggotanya merupakan 
              wakil dari penduduk desa berdasarkan keterwakilan wilayah dan ditetapkan secara demokratis. 
              Fungsi dan tugas BPD diatur dalam <strong>UU No. 6 Tahun 2014 tentang Desa</strong> dan 
              peraturan pelaksanaannya, termasuk <strong>Permendagri No. 110 Tahun 2016</strong> serta 
              <strong> Perbup Sragen No. 21 Tahun 2018</strong>.
            </p>
          </div>
        </section>

        {/* Fungsi utama */}
        <section className="mb-12">
          <h2 className="text-xl font-display font-bold text-gray-900 mb-6">Fungsi BPD</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {bpdData.fungsi.map((fungsi) => {
              const Icon = iconMap[fungsi.icon] || Scale;
              return (
                <div key={fungsi.id} className="card p-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-700" />
                  </div>
                  <div className="text-xs text-primary-600 font-semibold uppercase tracking-wider mb-2">
                    Fungsi {fungsi.id}
                  </div>
                  <h3 className="font-display font-bold text-gray-900 mb-3">{fungsi.judul}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{fungsi.deskripsi}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Tugas detail */}
        <section className="mb-12">
          <h2 className="text-xl font-display font-bold text-gray-900 mb-6">Tugas BPD</h2>
          <div className="card p-6">
            <p className="text-sm text-gray-500 mb-5">
              Berdasarkan Permendagri No. 110 Tahun 2016, BPD mempunyai tugas sebagai berikut:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {bpdData.tugas.map((tugas, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 leading-relaxed">{tugas}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dasar Hukum */}
        <section>
          <h2 className="text-xl font-display font-bold text-gray-900 mb-6">Dasar Hukum</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {bpdData.dasar_hukum.map((hukum) => (
              <div key={hukum.nomor} className="card p-5 flex items-start gap-4">
                <div className="w-9 h-9 bg-primary-100 text-primary-700 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {hukum.nomor}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{hukum.nama}</div>
                  <div className="text-gray-500 text-xs mt-1">{hukum.tentang}</div>
                  {hukum.url !== '#' && (
                    <a
                      href={hukum.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary-600 hover:underline flex items-center gap-1 mt-1.5"
                    >
                      Lihat Dokumen <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hak dan Kewajiban */}
        <section className="mt-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="font-display font-bold text-gray-900 mb-4">Hak BPD</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  'Mengawasi dan meminta keterangan tentang penyelenggaraan pemerintahan desa',
                  'Menyatakan pendapat atas penyelenggaraan pemerintahan desa',
                  'Mendapatkan biaya operasional pelaksanaan tugas dari APBDes',
                  'Mengusulkan pengangkatan dan pemberhentian Kepala Desa',
                ].map((hak, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0 mt-2" />
                    {hak}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="font-display font-bold text-gray-900 mb-4">Kewajiban BPD</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  'Memegang teguh dan mengamalkan Pancasila dan UUD 1945',
                  'Melaksanakan kehidupan demokrasi dalam penyelenggaraan pemerintahan desa',
                  'Mendahulukan kepentingan umum di atas kepentingan pribadi/golongan',
                  'Menghormati nilai sosial budaya dan adat istiadat masyarakat desa',
                  'Menjaga norma dan etika dalam hubungan kerja dengan lembaga kemasyarakatan desa',
                ].map((kwj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-2" />
                    {kwj}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
