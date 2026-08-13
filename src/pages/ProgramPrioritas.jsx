import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Search, Eye, MessageSquare, Users,
  Target, BookOpen, ListChecks, FileStack,
  CheckCircle2, AlertCircle, ChevronRight, ArrowLeft,
  Info, Scale, ExternalLink
} from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import programData from '../data/programPrioritas.json';

// Map ikon string ke komponen Lucide
const ikonMap = { Search, Eye, MessageSquare, Users };

const warnaMap = {
  amber: {
    headerBg: 'bg-gradient-to-r from-amber-700 to-amber-600',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-700',
    badge: 'bg-amber-100 text-amber-800 border border-amber-200',
    accent: 'border-l-amber-500',
    sectionIcon: 'text-amber-600',
    dot: 'bg-amber-500',
    numberBg: 'bg-amber-600',
  },
  blue: {
    headerBg: 'bg-gradient-to-r from-blue-700 to-blue-600',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-700',
    badge: 'bg-blue-100 text-blue-800 border border-blue-200',
    accent: 'border-l-blue-500',
    sectionIcon: 'text-blue-600',
    dot: 'bg-blue-500',
    numberBg: 'bg-blue-600',
  },
  green: {
    headerBg: 'bg-gradient-to-r from-emerald-700 to-emerald-600',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-700',
    badge: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
    accent: 'border-l-emerald-500',
    sectionIcon: 'text-emerald-600',
    dot: 'bg-emerald-500',
    numberBg: 'bg-emerald-600',
  },
  purple: {
    headerBg: 'bg-gradient-to-r from-purple-700 to-purple-600',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-700',
    badge: 'bg-purple-100 text-purple-800 border border-purple-200',
    accent: 'border-l-purple-500',
    sectionIcon: 'text-purple-600',
    dot: 'bg-purple-500',
    numberBg: 'bg-purple-600',
  },
};

const statusWarnaMap = {
  amber: 'bg-amber-100 text-amber-800 border border-amber-200',
  green: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
  blue: 'bg-blue-100 text-blue-800 border border-blue-200',
};

function ProgramCard({ program, index }) {
  const Icon = ikonMap[program.ikon] || Search;
  const w = warnaMap[program.warna] || warnaMap.blue;
  const sw = statusWarnaMap[program.statusWarna] || statusWarnaMap.blue;

  return (
    <div
      id={program.id}
      className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden scroll-mt-24"
    >
      {/* Header Kartu */}
      <div className={`${w.headerBg} px-6 py-5 text-white`}>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="text-white/70 text-xs font-medium uppercase tracking-wider">
                Program {String(index + 1).padStart(2, '0')}
              </span>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full bg-white/20`}>
                {program.status}
              </span>
            </div>
            <h2 className="font-display font-extrabold text-lg leading-tight">
              {program.judulLengkap}
            </h2>
          </div>
        </div>
      </div>

      {/* Keterangan singkat */}
      <div className={`border-l-4 ${w.accent} bg-gray-50 px-5 py-4 mx-6 mt-5 rounded-r-lg`}>
        <p className="text-sm text-gray-700 leading-relaxed">{program.keterangan}</p>
      </div>

      {/* Isi Detail */}
      <div className="px-6 pb-6 mt-5 grid md:grid-cols-2 gap-6">
        {/* Tujuan */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Target className={`w-4 h-4 ${w.sectionIcon}`} />
            <h3 className="font-display font-bold text-gray-900 text-sm uppercase tracking-wide">Tujuan</h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">{program.tujuan}</p>
        </div>

        {/* Latar Belakang */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className={`w-4 h-4 ${w.sectionIcon}`} />
            <h3 className="font-display font-bold text-gray-900 text-sm uppercase tracking-wide">Latar Belakang</h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">{program.latarBelakang}</p>
        </div>

        {/* Langkah */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <ListChecks className={`w-4 h-4 ${w.sectionIcon}`} />
            <h3 className="font-display font-bold text-gray-900 text-sm uppercase tracking-wide">Langkah yang Akan Dilakukan</h3>
          </div>
          <ol className="space-y-2">
            {program.langkah.map((langkah, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                <span className={`flex-shrink-0 w-5 h-5 ${w.numberBg} text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5`}>
                  {i + 1}
                </span>
                <span className="leading-relaxed">{langkah}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Dokumen Diperlukan */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <FileStack className={`w-4 h-4 ${w.sectionIcon}`} />
            <h3 className="font-display font-bold text-gray-900 text-sm uppercase tracking-wide">Dokumen yang Diperlukan</h3>
          </div>
          <ul className="space-y-1.5">
            {program.dokumenDiperlukan.map((dok, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className={`flex-shrink-0 w-1.5 h-1.5 ${w.dot} rounded-full mt-2`} />
                <span>{dok}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hasil yang Diharapkan - full width */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className={`w-4 h-4 ${w.sectionIcon}`} />
            <h3 className="font-display font-bold text-gray-900 text-sm uppercase tracking-wide">Hasil yang Diharapkan</h3>
          </div>
          <ul className="grid sm:grid-cols-2 gap-2">
            {program.hasilDiharapkan.map((hasil, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">
                <CheckCircle2 className={`w-4 h-4 ${w.sectionIcon} flex-shrink-0 mt-0.5`} />
                <span className="leading-relaxed">{hasil}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Regulasi Terkait (jika ada) */}
        {program.regulasiTerkait && program.regulasiTerkait.length > 0 && (
          <div className="md:col-span-2 bg-primary-50 border border-primary-100 rounded-xl px-4 py-4">
            <div className="flex items-center gap-2 mb-3">
              <Scale className={`w-4 h-4 ${w.sectionIcon}`} />
              <h3 className="font-display font-bold text-gray-900 text-sm uppercase tracking-wide">Regulasi Terkait</h3>
            </div>
            <div className="space-y-2">
              {program.regulasiTerkait.map((reg, i) => (
                <div key={i} className="bg-white rounded-lg border border-primary-100 px-3 py-2.5 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold text-primary-700">{reg.nomor}</p>
                    <p className="text-xs text-gray-700 leading-snug">{reg.judul}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{reg.keterangan}</p>
                  </div>
                  {reg.url && (
                    <a
                      href={reg.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 inline-flex items-center gap-1 text-xs font-semibold text-primary-700 hover:text-primary-900 bg-primary-50 border border-primary-200 px-2 py-1 rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Lihat
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Catatan (jika ada) */}
        {program.catatan && (
          <div className="md:col-span-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 flex items-start gap-3">
            <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-amber-800 leading-relaxed">
              <span className="font-semibold">Catatan Kelembagaan: </span>
              {program.catatan}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProgramPrioritas() {
  const location = useLocation();

  // Scroll ke anchor setelah render
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const { judul, subtitle, program } = programData;

  return (
    <div>
      <PageHeader
        title={judul}
        subtitle={subtitle}
        breadcrumbs={[
          { label: 'Beranda', path: '/' },
          { label: 'Program Prioritas' }
        ]}
      />

      {/* Navigasi cepat program */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto">
          {program.map((p, idx) => {
            const w = warnaMap[p.warna] || warnaMap.blue;
            return (
              <a
                key={p.id}
                href={`#${p.id}`}
                className={`flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border ${w.badge} hover:opacity-80 transition-opacity`}
              >
                <span>{String(idx + 1).padStart(2, '0')}</span>
                {p.judul}
              </a>
            );
          })}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">
        {/* Pernyataan kelembagaan */}
        <div className="bg-primary-50 border border-primary-100 rounded-xl px-5 py-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-primary-800 leading-relaxed">
            Seluruh program prioritas BPD Desa Jeruk dilaksanakan dalam kerangka kewenangan kelembagaan
            BPD sesuai peraturan perundang-undangan yang berlaku. Setiap pernyataan dan tindakan mengacu
            pada dokumen resmi dan prinsip kehati-hatian kelembagaan.
          </p>
        </div>

        {/* Kartu setiap program */}
        {program.map((p, idx) => (
          <ProgramCard key={p.id} program={p} index={idx} />
        ))}

        {/* Kembali ke Beranda */}
        <div className="text-center pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
