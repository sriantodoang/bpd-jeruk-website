import { useState } from 'react';
import {
  FileText, Calendar, Download, Clock, AlertCircle,
  ExternalLink, FolderOpen, Landmark, Newspaper, BookOpen
} from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import transparansiData from '../data/transparansi.json';

function formatDate(d) {
  return new Date(d).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
}

const TABS = [
  { id: 'kelembagaan', label: 'Dok. Kelembagaan', icon: Landmark },
  { id: 'regulasi', label: 'Dok. Regulasi', icon: BookOpen },
  { id: 'publik', label: 'Dok. Publik', icon: FolderOpen },
  { id: 'agenda', label: 'Agenda Rapat', icon: Calendar },
  { id: 'beritaacara', label: 'Berita Acara', icon: FileText },
  { id: 'laporan', label: 'Laporan', icon: Newspaper },
];

function StatusBadge({ status }) {
  const map = {
    'Tersedia': 'bg-green-100 text-green-700',
    'Belum Tersedia': 'bg-amber-100 text-amber-700',
    'Aktif': 'bg-green-100 text-green-700',
    'Selesai': 'bg-gray-100 text-gray-600',
    'Akan Datang': 'bg-blue-100 text-blue-700',
  };
  return (
    <span className={`badge text-xs px-2 py-0.5 rounded-full ${map[status] || 'bg-gray-100 text-gray-600'}`}>
      {status}
    </span>
  );
}

function PlaceholderNote({ note }) {
  return (
    <div className="flex items-center gap-2 mt-2 text-xs text-amber-700 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-100">
      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
      {note}
    </div>
  );
}

export default function Transparansi() {
  const [activeTab, setActiveTab] = useState('kelembagaan');

  return (
    <div>
      <PageHeader
        title="Transparansi BPD"
        subtitle="Keterbukaan informasi kegiatan, program, dan dokumen resmi BPD Desa Jeruk"
        breadcrumbs={[{ label: 'Transparansi' }]}
      />

      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* Tabs — scrollable on mobile */}
        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 mb-8">
          <div className="flex gap-1 border-b border-gray-200 min-w-max">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium rounded-t-lg transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'text-primary-700 border-b-2 border-primary-700 bg-primary-50'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── DOKUMEN KELEMBAGAAN ── */}
        {activeTab === 'kelembagaan' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-display font-bold text-gray-900">Dokumen Kelembagaan</h2>
              <div className="text-xs text-gray-500 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                Dokumen dalam persiapan
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Dokumen-dokumen internal kelembagaan BPD Desa Jeruk Periode 2026–2034.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {transparansiData.dokumenKelembagaan.map((d) => (
                <div key={d.id} className="card p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-primary-700" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 text-sm">{d.nama}</div>
                      <div className="text-xs text-gray-500 mt-1">{d.deskripsi}</div>
                      <StatusBadge status={d.status} />
                      {d.keterangan && <PlaceholderNote note={d.keterangan} />}
                    </div>
                  </div>
                  <button
                    disabled
                    className="mt-4 w-full flex items-center justify-center gap-2 py-2 text-xs text-gray-400 bg-gray-50 rounded-lg border border-dashed border-gray-200 cursor-not-allowed"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Segera Tersedia
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── DOKUMEN REGULASI ── */}
        {activeTab === 'regulasi' && (
          <div className="space-y-4">
            <h2 className="text-lg font-display font-bold text-gray-900 mb-2">Dokumen Regulasi</h2>
            <p className="text-sm text-gray-500 mb-6">
              Peraturan perundang-undangan yang menjadi landasan hukum BPD Desa Jeruk.
            </p>
            <div className="space-y-4">
              {transparansiData.dokumenRegulasi.map((d) => (
                <div key={d.id} className="card p-5 flex items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-5 h-5 text-blue-700" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{d.nama}</div>
                      <div className="text-xs text-gray-500 mt-1">{d.deskripsi}</div>
                      <div className="text-xs text-gray-400 mt-1">Sumber: {d.sumber}</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 flex-shrink-0">
                    <StatusBadge status={d.status} />
                    {d.url !== '#' ? (
                      <a
                        href={d.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary-600 hover:text-primary-700 flex items-center gap-1"
                      >
                        Lihat <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-xs text-gray-400">Segera tersedia</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── DOKUMEN PUBLIK ── */}
        {activeTab === 'publik' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-display font-bold text-gray-900">Dokumen Publik</h2>
              <div className="text-xs text-gray-500 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                Dokumen dalam persiapan
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Dokumen-dokumen yang dapat diakses publik sebagai bentuk transparansi BPD.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {transparansiData.dokumenPublik.map((d) => (
                <div key={d.id} className="card p-5">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FolderOpen className="w-5 h-5 text-purple-700" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 text-sm">{d.nama}</div>
                      <div className="text-xs text-gray-500 mt-1">{d.deskripsi}</div>
                      <div className="mt-2">
                        <StatusBadge status={d.status} />
                      </div>
                    </div>
                  </div>
                  {d.keterangan && <PlaceholderNote note={d.keterangan} />}
                  <button
                    disabled
                    className="mt-4 w-full flex items-center justify-center gap-2 py-2 text-xs text-gray-400 bg-gray-50 rounded-lg border border-dashed border-gray-200 cursor-not-allowed"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Segera Tersedia
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── AGENDA RAPAT ── */}
        {activeTab === 'agenda' && (
          <div className="space-y-4">
            <h2 className="text-lg font-display font-bold text-gray-900 mb-4">Agenda & Jadwal Rapat</h2>
            {transparansiData.agendaRapat.map((r) => (
              <div key={r.id} className={`card p-5 ${r.status === 'Akan Datang' ? 'border-blue-200 bg-blue-50/30' : ''}`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      r.status === 'Akan Datang' ? 'bg-blue-100' : 'bg-gray-100'
                    }`}>
                      <Calendar className={`w-5 h-5 ${r.status === 'Akan Datang' ? 'text-blue-600' : 'text-gray-500'}`} />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{r.judul}</div>
                      <div className="text-sm text-gray-600 mt-1">{r.agenda}</div>
                      <div className="flex flex-wrap gap-3 mt-2 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" /> {formatDate(r.tanggal)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> {r.waktu}
                        </span>
                        <span>{r.tempat}</span>
                      </div>
                    </div>
                  </div>
                  <StatusBadge status={r.status} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── BERITA ACARA ── */}
        {activeTab === 'beritaacara' && (
          <div className="space-y-4">
            <h2 className="text-lg font-display font-bold text-gray-900 mb-2">Berita Acara</h2>
            <p className="text-sm text-gray-500 mb-6">
              Dokumen berita acara resmi kegiatan dan musyawarah BPD.
            </p>
            {transparansiData.beritaAcara.map((b) => (
              <div key={b.id} className="card p-5 flex items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{b.judul}</div>
                    <div className="text-xs text-gray-500 mt-1">No. {b.nomor}</div>
                    <div className="text-xs text-gray-400 mt-1">{formatDate(b.tanggal)}</div>
                    {b.status === 'Belum Tersedia' && (
                      <PlaceholderNote note="Dokumen akan tersedia setelah ditetapkan." />
                    )}
                  </div>
                </div>
                <StatusBadge status={b.status} />
              </div>
            ))}
          </div>
        )}

        {/* ── LAPORAN KEGIATAN ── */}
        {activeTab === 'laporan' && (
          <div className="space-y-4">
            <h2 className="text-lg font-display font-bold text-gray-900 mb-2">Laporan Kegiatan</h2>
            <p className="text-sm text-gray-500 mb-6">
              Laporan berkala kegiatan BPD Desa Jeruk sebagai bentuk akuntabilitas kepada masyarakat.
            </p>
            {transparansiData.laporanKegiatan.map((l) => (
              <div key={l.id} className="card p-5 flex items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Newspaper className="w-5 h-5 text-purple-700" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{l.judul}</div>
                    <div className="text-xs text-gray-500 mt-1">Periode: {l.periode}</div>
                    <div className="text-xs text-gray-400 mt-1">Diterbitkan: {formatDate(l.tanggal)}</div>
                    {l.keterangan && <PlaceholderNote note={l.keterangan} />}
                  </div>
                </div>
                <StatusBadge status={l.status} />
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
