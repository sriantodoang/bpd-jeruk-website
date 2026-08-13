import { useState } from 'react';
import {
  ExternalLink, AlertTriangle, CheckCircle2, XCircle,
  Clock, BookOpen, Info, Archive, ChevronDown, ChevronUp,
  Scale, FileText, Building2, FolderOpen
} from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import regulasiData from '../data/regulasi.json';

// ── Konfigurasi visual ─────────────────────────────────────────────────────
const kelompokIcon = { nasional: Scale, bpd: BookOpen, sragen: Building2, bidang: FolderOpen };

const statusConfig = {
  BERLAKU: {
    icon: CheckCircle2,
    cls: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
    dot: 'bg-emerald-500',
  },
  DICABUT: {
    icon: XCircle,
    cls: 'bg-red-50 text-red-700 border border-red-200',
    dot: 'bg-red-400',
  },
  'PERLU VERIFIKASI': {
    icon: AlertTriangle,
    cls: 'bg-amber-50 text-amber-800 border border-amber-200',
    dot: 'bg-amber-400',
  },
};

const badgeConfig = {
  green:   'bg-green-600 text-white',
  emerald: 'bg-emerald-600 text-white',
  amber:   'bg-amber-500 text-white',
  blue:    'bg-blue-600 text-white',
};

// ── Sub-komponen ───────────────────────────────────────────────────────────
function StatusBadge({ status }) {
  const cfg = statusConfig[status] || statusConfig['PERLU VERIFIKASI'];
  const Icon = cfg.icon;
  return (
    <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${cfg.cls}`}>
      <Icon className="w-3 h-3" />
      {status}
    </span>
  );
}

function RegulasiCard({ reg }) {
  const [expanded, setExpanded] = useState(false);
  const isArsip = reg.arsip;
  const hasBadge = !!reg.badge;

  return (
    <div className={`bg-white rounded-xl border transition-all duration-200 ${
      isArsip
        ? 'border-gray-200 opacity-75'
        : 'border-gray-200 hover:border-primary-300 hover:shadow-sm'
    }`}>
      {/* Header kartu */}
      <div className="p-4 flex items-start gap-3">
        {/* Dot status */}
        <span className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${(statusConfig[reg.status] || statusConfig['PERLU VERIFIKASI']).dot}`} />

        <div className="flex-1 min-w-0">
          {/* Badge + Arsip */}
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            {hasBadge && (
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${badgeConfig[reg.badgeWarna] || badgeConfig.blue}`}>
                {reg.badge}
              </span>
            )}
            {isArsip && (
              <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded-full">
                <Archive className="w-3 h-3" /> ARSIP HISTORIS
              </span>
            )}
            <StatusBadge status={reg.status} />
          </div>

          {/* Nomor + Judul */}
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
            {reg.nomor} Tahun {reg.tahun}
          </p>
          <h3 className={`font-display font-bold text-sm leading-snug ${isArsip ? 'text-gray-500' : 'text-gray-900'}`}>
            {reg.judul}
          </h3>

          {/* Berlaku sejak */}
          {reg.berlakuSejak && !isArsip && (
            <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              Berlaku sejak: {reg.berlakuSejak}
            </p>
          )}
          {isArsip && reg.dicabutOleh && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <XCircle className="w-3 h-3" />
              Dicabut oleh: {reg.dicabutOleh}
            </p>
          )}
        </div>

        {/* Tombol expand */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex-shrink-0 text-gray-400 hover:text-gray-700 p-1 rounded transition-colors"
          aria-label={expanded ? 'Tutup detail' : 'Lihat detail'}
        >
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* Detail yang dapat dibuka */}
      {expanded && (
        <div className="px-4 pb-4 pt-0 border-t border-gray-100 mt-0">
          <div className="pt-3 space-y-3">
            {/* Status Notes */}
            <div className="flex items-start gap-2 bg-gray-50 rounded-lg px-3 py-2">
              <Info className="w-3.5 h-3.5 text-gray-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-gray-600 leading-relaxed">{reg.statusNotes}</p>
            </div>

            {/* Relevansi */}
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                Relevansi bagi BPD
              </p>
              <p className="text-xs text-gray-700 leading-relaxed">{reg.relevansi}</p>
            </div>

            {/* Catatan khusus */}
            {reg.catatan && (
              <div className="flex items-start gap-2 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-amber-800 leading-relaxed">{reg.catatan}</p>
              </div>
            )}

            {/* Tombol lihat regulasi */}
            <div className="flex items-center gap-3 pt-1">
              {reg.url ? (
                <a
                  href={reg.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-700 hover:text-primary-900 bg-primary-50 hover:bg-primary-100 border border-primary-200 px-3 py-1.5 rounded-lg transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Lihat Regulasi (BPK RI)
                </a>
              ) : (
                <span className="text-xs text-gray-400 italic">
                  Link sumber belum tersedia — hubungi instansi terkait.
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function KelompokSection({ kelompok }) {
  const Icon = kelompokIcon[kelompok.id] || FileText;
  const aktif = kelompok.regulasi.filter((r) => !r.arsip);
  const arsip = kelompok.regulasi.filter((r) => r.arsip);
  const [showArsip, setShowArsip] = useState(false);

  return (
    <section id={kelompok.id} className="scroll-mt-20">
      {/* Header kelompok */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-primary-700" />
        </div>
        <div>
          <span className="text-xs font-bold text-primary-500 uppercase tracking-widest">
            Kelompok {kelompok.label}
          </span>
          <h2 className="font-display font-bold text-gray-900 text-lg leading-tight">
            {kelompok.judul}
          </h2>
        </div>
      </div>
      {kelompok.deskripsi && (
        <p className="text-sm text-gray-500 mb-4 ml-13 pl-1">{kelompok.deskripsi}</p>
      )}

      {/* Regulasi aktif */}
      <div className="space-y-3">
        {aktif.map((reg) => (
          <RegulasiCard key={reg.id} reg={reg} />
        ))}
      </div>

      {/* Regulasi arsip (kolap) */}
      {arsip.length > 0 && (
        <div className="mt-4">
          <button
            onClick={() => setShowArsip(!showArsip)}
            className="flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-gray-600 transition-colors"
          >
            <Archive className="w-3.5 h-3.5" />
            {showArsip ? 'Sembunyikan' : 'Tampilkan'} {arsip.length} regulasi yang telah dicabut (arsip)
            {showArsip ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
          {showArsip && (
            <div className="mt-3 space-y-3 pl-4 border-l-2 border-gray-100">
              {arsip.map((reg) => (
                <RegulasiCard key={reg.id} reg={reg} />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}

// ── Halaman Utama ─────────────────────────────────────────────────────────
export default function Regulasi() {
  const { kelompok } = regulasiData;

  return (
    <div>
      <PageHeader
        title="Regulasi & Dasar Hukum BPD Desa Jeruk"
        subtitle="Kumpulan peraturan perundang-undangan yang menjadi landasan kerja BPD Desa Jeruk, Kecamatan Miri, Kabupaten Sragen."
        breadcrumbs={[{ label: 'Regulasi' }]}
      />

      {/* Navigasi cepat kelompok */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-2.5 flex gap-2 overflow-x-auto">
          {kelompok.map((k) => {
            const Icon = kelompokIcon[k.id] || FileText;
            return (
              <a
                key={k.id}
                href={`#${k.id}`}
                className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-800 transition-colors"
              >
                <Icon className="w-3.5 h-3.5" />
                {k.label}. {k.judul}
              </a>
            );
          })}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Peringatan informasi */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl px-5 py-4 flex items-start gap-3 mb-8">
          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-blue-900 mb-0.5">Informasi Penting</p>
            <p className="text-xs text-blue-800 leading-relaxed">
              Halaman ini menyajikan regulasi yang relevan bagi BPD Desa Jeruk berdasarkan verifikasi
              dari <strong>Database Peraturan BPK RI (peraturan.bpk.go.id)</strong>.
              Regulasi yang telah dicabut ditampilkan sebagai arsip historis dan diberi keterangan
              jelas. Selalu merujuk pada teks asli dari sumber resmi untuk keperluan hukum.
            </p>
          </div>
        </div>

        {/* Ringkasan status */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
          {[
            { label: 'Regulasi Berlaku', count: kelompok.flatMap(k => k.regulasi).filter(r => r.status === 'BERLAKU').length, cls: 'bg-emerald-50 border-emerald-200 text-emerald-800' },
            { label: 'Dicabut (Arsip)', count: kelompok.flatMap(k => k.regulasi).filter(r => r.status === 'DICABUT').length, cls: 'bg-red-50 border-red-200 text-red-700' },
            { label: 'Perlu Verifikasi', count: kelompok.flatMap(k => k.regulasi).filter(r => r.status === 'PERLU VERIFIKASI').length, cls: 'bg-amber-50 border-amber-200 text-amber-800' },
          ].map((item) => (
            <div key={item.label} className={`border rounded-xl p-4 text-center ${item.cls}`}>
              <p className="text-2xl font-display font-extrabold">{item.count}</p>
              <p className="text-xs font-medium mt-0.5">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Kelompok regulasi */}
        <div className="space-y-12">
          {kelompok.map((k) => (
            <KelompokSection key={k.id} kelompok={k} />
          ))}
        </div>

        {/* Footer keterangan sumber */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-400 text-center leading-relaxed">
            Data regulasi diverifikasi melalui{' '}
            <a href="https://peraturan.bpk.go.id" target="_blank" rel="noopener noreferrer"
              className="text-primary-600 hover:underline">
              peraturan.bpk.go.id
            </a>{' '}
            (Database Peraturan BPK RI). Terakhir diperbarui: Agustus 2026.
            Untuk keperluan hukum, selalu merujuk pada teks asli dari sumber resmi.
          </p>
        </div>
      </div>
    </div>
  );
}
