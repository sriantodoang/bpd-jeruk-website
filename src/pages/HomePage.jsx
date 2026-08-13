import { Link } from 'react-router-dom';
import {
  Users, FileText, MessageSquare, Eye, Newspaper,
  FolderOpen, ChevronRight, MapPin, Calendar, ArrowRight,
  Landmark, Scale, Vote, ClipboardList, ShieldCheck
} from 'lucide-react';
import bpdData from '../data/bpd.json';
import desaData from '../data/desa.json';
import beritaData from '../data/berita.json';
import AgendaPrioritas from '../components/ui/AgendaPrioritas';

const quickMenus = [
  { icon: Users, label: 'Profil BPD', path: '/profil-bpd', color: 'bg-emerald-600' },
  { icon: Scale, label: 'Tugas & Fungsi', path: '/tugas-fungsi', color: 'bg-blue-600' },
  { icon: MessageSquare, label: 'Aspirasi', path: '/aspirasi', color: 'bg-orange-500' },
  { icon: Eye, label: 'Transparansi', path: '/transparansi', color: 'bg-purple-600' },
  { icon: ClipboardList, label: 'Program Kerja', path: '/program-kerja', color: 'bg-teal-600' },
  { icon: Newspaper, label: 'Berita', path: '/berita', color: 'bg-rose-500' },
];

const bpdInfoCards = [
  {
    label: 'BPD Periode',
    value: '2026–2034',
    icon: Landmark,
    color: 'text-primary-700',
    bg: 'bg-primary-50',
  },
  {
    label: 'Jumlah Anggota',
    value: '9',
    icon: Users,
    color: 'text-emerald-700',
    bg: 'bg-emerald-50',
  },
  {
    label: 'Keterwakilan',
    value: '3 Wilayah + 3 Perempuan',
    icon: ShieldCheck,
    color: 'text-blue-700',
    bg: 'bg-blue-50',
    small: true,
  },
  {
    label: 'Agenda Strategis',
    value: 'Pilkades 2027',
    icon: Vote,
    color: 'text-amber-700',
    bg: 'bg-amber-50',
  },
];

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('id-ID', {
    day: 'numeric', month: 'long', year: 'numeric'
  });
}

export default function HomePage() {
  const latestNews = beritaData.slice(0, 3);

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm mb-6">
                <Landmark className="w-4 h-4" />
                <span>Periode 2026 – 2034</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-display font-extrabold leading-tight mb-4">
                Badan Permusyawaratan Desa Jeruk
              </h1>
              <p className="text-primary-100 text-base md:text-lg leading-relaxed mb-8">
                "Bergerak Bersama Masyarakat Menuju Desa Transparan dan Partisipatif"
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/aspirasi" className="btn-primary bg-white text-primary-800 hover:bg-gray-100">
                  <MessageSquare className="w-4 h-4" />
                  Sampaikan Aspirasi
                </Link>
                <Link to="/profil-bpd" className="btn-secondary border-white text-white hover:bg-white/10">
                  Profil BPD
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Kartu Ketua BPD */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-primary-600 flex items-center justify-center mx-auto mb-4 border-4 border-white/30">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div className="text-xs text-primary-200 font-medium uppercase tracking-wider mb-1">
                  Sambutan Ketua BPD
                </div>
                <div className="font-display font-bold text-xl mb-1">{bpdData.struktur.ketua.nama}</div>
                <div className="text-primary-200 text-sm mb-4">{bpdData.struktur.ketua.jabatan}</div>
                <blockquote className="text-sm text-primary-100 italic leading-relaxed">
                  "Kami berkomitmen untuk menjadi jembatan aspirasi masyarakat dan pengawal
                  transparansi pemerintahan Desa Jeruk demi kemajuan bersama."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KARTU INFO BPD ── */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {bpdInfoCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.label} className={`${card.bg} rounded-xl p-4 text-center`}>
                  <div className={`w-10 h-10 ${card.bg} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                    <Icon className={`w-5 h-5 ${card.color}`} />
                  </div>
                  <div className={`font-display font-extrabold ${card.small ? 'text-sm' : 'text-2xl'} ${card.color}`}>
                    {card.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{card.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── QUICK MENU ── */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="section-title">Menu Layanan</h2>
            <p className="section-subtitle">Akses cepat ke seluruh layanan dan informasi BPD</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {quickMenus.map((menu) => (
              <Link
                key={menu.path + menu.label}
                to={menu.path}
                className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className={`w-12 h-12 ${menu.color} rounded-xl flex items-center justify-center`}>
                  <menu.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-semibold text-gray-700 text-center">{menu.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FUNGSI BPD ── */}
      <section className="py-12 px-4 bg-primary-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="section-title">Fungsi Utama BPD</h2>
            <p className="section-subtitle">Tiga fungsi pokok Badan Permusyawaratan Desa</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {bpdData.fungsi.map((fungsi) => (
              <div key={fungsi.id} className="card p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-display font-extrabold text-primary-700">{fungsi.id}</span>
                </div>
                <h3 className="font-display font-bold text-gray-900 mb-2">{fungsi.judul}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{fungsi.deskripsi}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/tugas-fungsi" className="btn-primary">
              Selengkapnya
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── AGENDA PRIORITAS BPD ── */}
      <AgendaPrioritas />

      {/* ── BERITA TERBARU ── */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="section-title">Berita Terkini</h2>
              <p className="section-subtitle">Kabar terbaru kegiatan BPD Desa Jeruk</p>
            </div>
            <Link to="/berita" className="text-primary-700 hover:text-primary-800 text-sm font-medium flex items-center gap-1">
              Lihat Semua <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {latestNews.map((berita) => (
              <Link to={`/berita/${berita.slug}`} key={berita.id} className="card overflow-hidden group">
                <div className="bg-gradient-to-br from-primary-100 to-primary-200 h-40 flex items-center justify-center">
                  <Newspaper className="w-12 h-12 text-primary-400" />
                </div>
                <div className="p-5">
                  <span className="badge bg-primary-100 text-primary-700 mb-2">{berita.kategori}</span>
                  <h3 className="font-display font-semibold text-gray-900 leading-snug mb-2 group-hover:text-primary-700 transition-colors line-clamp-2">
                    {berita.judul}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-3">{berita.ringkasan}</p>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(berita.tanggal)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PILKADES BANNER ── */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-amber-600 to-amber-500 rounded-2xl p-6 md:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Vote className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-1">Pilkades 2027</h3>
                <p className="text-amber-100 text-sm">
                  BPD menjaga netralitas dan memastikan proses Pilkades berjalan demokratis, transparan, dan sesuai aturan.
                </p>
              </div>
            </div>
            <Link
              to="/pilkades-2027"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-amber-700 font-semibold px-5 py-2.5 rounded-lg hover:bg-amber-50 transition-colors text-sm"
            >
              Info Pilkades
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── LOKASI ── */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="section-title">Lokasi Kami</h2>
            <p className="section-subtitle">
              Balai Desa Jeruk, Kecamatan Miri, Kabupaten Sragen, Jawa Tengah
            </p>
          </div>
          <div className="card overflow-hidden">
            <div className="bg-gray-200 h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-3 text-primary-400" />
                <p className="font-medium text-gray-700">Balai Desa Jeruk</p>
                <p className="text-sm">Kecamatan Miri, Kabupaten Sragen</p>
                <a
                  href={desaData.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 btn-primary inline-flex"
                >
                  Buka di Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
