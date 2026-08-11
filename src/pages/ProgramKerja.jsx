import {
  ClipboardList, Users, FileText, Target, Inbox, BookOpen,
  CheckCircle, Clock, CalendarDays, Info
} from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';

const program100Hari = [
  {
    nomor: 1,
    icon: Users,
    warna: 'bg-emerald-100 text-emerald-700',
    warnaNumor: 'bg-emerald-600',
    judul: 'Konsolidasi Internal BPD',
    deskripsi:
      'Membangun pondasi kerja yang solid melalui konsolidasi seluruh anggota BPD. Termasuk pembagian tugas, penetapan mekanisme komunikasi internal, dan penyamaan visi seluruh anggota.',
    rencana: [
      'Rapat perdana dan pembagian tugas anggota BPD',
      'Penetapan jadwal rapat rutin BPD',
      'Penyusunan mekanisme koordinasi internal',
      'Pengenalan tupoksi kepada seluruh anggota',
    ],
    status: 'Rencana Kerja',
    target: '0–30 Hari',
  },
  {
    nomor: 2,
    icon: FileText,
    warna: 'bg-blue-100 text-blue-700',
    warnaNumor: 'bg-blue-600',
    judul: 'Penyusunan Tata Tertib BPD',
    deskripsi:
      'Menyusun Peraturan Tata Tertib BPD sebagai landasan operasional lembaga. Tata Tertib mengatur mekanisme rapat, pengambilan keputusan, hak dan kewajiban anggota, serta tata kelola administrasi BPD.',
    rencana: [
      'Kajian referensi Tata Tertib BPD dari kabupaten/kecamatan',
      'Penyusunan draft Tata Tertib oleh tim kecil',
      'Pembahasan dan finalisasi bersama seluruh anggota',
      'Pengesahan dan dokumentasi Tata Tertib BPD',
    ],
    status: 'Rencana Kerja',
    target: '15–45 Hari',
  },
  {
    nomor: 3,
    icon: Target,
    warna: 'bg-purple-100 text-purple-700',
    warnaNumor: 'bg-purple-600',
    judul: 'Penyusunan Program Kerja',
    deskripsi:
      'Menyusun Program Kerja BPD untuk jangka pendek (tahunan) dan jangka panjang (periode 2026–2034). Program kerja disusun mengacu pada visi-misi BPD, kebutuhan masyarakat, dan rencana pembangunan desa.',
    rencana: [
      'Pemetaan kebutuhan dan prioritas masyarakat desa',
      'Penyusunan draft program kerja tahunan',
      'Pembahasan program kerja dalam rapat pleno BPD',
      'Penetapan dan publikasi program kerja kepada masyarakat',
    ],
    status: 'Rencana Kerja',
    target: '30–60 Hari',
  },
  {
    nomor: 4,
    icon: Inbox,
    warna: 'bg-orange-100 text-orange-700',
    warnaNumor: 'bg-orange-600',
    judul: 'Membangun Sistem Aspirasi Masyarakat',
    deskripsi:
      'Merancang dan membangun sistem yang memudahkan masyarakat dalam menyampaikan aspirasi kepada BPD. Sistem ini mencakup kanal digital (website/WhatsApp) maupun tatap muka langsung di tingkat dusun.',
    rencana: [
      'Merancang alur penerimaan dan tindak lanjut aspirasi',
      'Mengaktifkan kanal aspirasi melalui website dan media sosial',
      'Sosialisasi kepada masyarakat tentang cara menyampaikan aspirasi',
      'Membuat buku register aspirasi masyarakat',
    ],
    status: 'Rencana Kerja',
    target: '30–70 Hari',
  },
  {
    nomor: 5,
    icon: BookOpen,
    warna: 'bg-teal-100 text-teal-700',
    warnaNumor: 'bg-teal-600',
    judul: 'Memahami Dokumen Dasar Desa',
    deskripsi:
      'Mempelajari dan memahami dokumen-dokumen dasar perencanaan desa sebagai landasan pengawasan BPD. Termasuk RPJMDes, RKPDes, APBDes, dan dokumen regulasi lainnya.',
    rencana: [
      'Inventarisasi seluruh dokumen perencanaan desa yang berlaku',
      'Kajian mendalam RPJMDes dan APBDes berjalan',
      'Koordinasi dengan Pemerintah Desa untuk akses dokumen',
      'Penyusunan catatan dan agenda pengawasan berdasarkan dokumen',
    ],
    status: 'Rencana Kerja',
    target: '45–100 Hari',
  },
];

const programStrategis = [
  {
    judul: 'Legislasi Desa',
    deskripsi: 'Pembahasan dan penetapan Peraturan Desa sesuai kebutuhan masyarakat',
    icon: FileText,
  },
  {
    judul: 'Pengawasan APBDes',
    deskripsi: 'Evaluasi dan pengawasan realisasi Anggaran Pendapatan Belanja Desa',
    icon: ClipboardList,
  },
  {
    judul: 'Musyawarah Desa',
    deskripsi: 'Penyelenggaraan musyawarah desa untuk pengambilan keputusan strategis',
    icon: Users,
  },
  {
    judul: 'Pilkades 2027',
    deskripsi: 'Persiapan dan pelaksanaan Pemilihan Kepala Desa secara demokratis',
    icon: CheckCircle,
  },
];

export default function ProgramKerja() {
  return (
    <div>
      <PageHeader
        title="Program Kerja BPD"
        subtitle="Rencana Kerja Badan Permusyawaratan Desa Jeruk Periode 2026–2034"
        breadcrumbs={[{ label: 'Program Kerja' }]}
      />

      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* Status banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10 flex items-start gap-4">
          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-blue-800 text-sm mb-1">Status: Rencana Kerja</p>
            <p className="text-blue-700 text-sm leading-relaxed">
              Seluruh program yang tercantum pada halaman ini berstatus <strong>Rencana Kerja</strong> — 
              belum dilaksanakan. Dokumen ini merupakan rencana awal BPD yang akan difinalisasi 
              setelah proses konsolidasi internal selesai. Status akan diperbarui seiring 
              pelaksanaan program.
            </p>
          </div>
        </div>

        {/* 100 Hari Pertama */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <CalendarDays className="w-5 h-5 text-primary-700" />
            </div>
            <div>
              <h2 className="text-xl font-display font-bold text-gray-900">Program 100 Hari Pertama</h2>
              <p className="text-sm text-gray-500">Prioritas kerja awal BPD sejak pelantikan</p>
            </div>
          </div>

          {/* Garis waktu visual */}
          <div className="mt-4 mb-8 bg-primary-50 rounded-xl p-4 border border-primary-100">
            <div className="flex items-center gap-2 text-xs text-primary-700 font-medium mb-3">
              <Clock className="w-4 h-4" />
              Rentang Waktu: Bulan 1 – Bulan 3 Setelah Pelantikan
            </div>
            <div className="grid grid-cols-5 gap-1">
              {['30 Hari', '45 Hari', '60 Hari', '70 Hari', '100 Hari'].map((label, i) => (
                <div key={i} className="text-center">
                  <div className="h-2 bg-primary-200 rounded-full mb-1 relative overflow-hidden">
                    <div
                      className="h-full bg-primary-600 rounded-full"
                      style={{ width: `${((i + 1) / 5) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-primary-600">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {program100Hari.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.nomor} className="card p-6">
                  <div className="flex items-start gap-4">
                    {/* Nomor */}
                    <div className={`w-10 h-10 ${item.warnaNumor} text-white rounded-xl flex items-center justify-center font-display font-bold text-lg flex-shrink-0`}>
                      {item.nomor}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                        <h3 className="font-display font-bold text-gray-900 text-base">{item.judul}</h3>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="badge bg-blue-100 text-blue-700 text-xs">{item.status}</span>
                          <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                            {item.target}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.deskripsi}</p>

                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                          Rencana Kegiatan
                        </p>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {item.rencana.map((r, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className={`w-5 h-5 ${item.warna} rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5`}>
                                {idx + 1}
                              </div>
                              <span className="text-sm text-gray-600">{r}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Program Strategis Jangka Panjang */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <h2 className="text-xl font-display font-bold text-gray-900">Agenda Strategis 2026–2034</h2>
              <p className="text-sm text-gray-500">Program prioritas jangka panjang BPD</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {programStrategis.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="card p-5 text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-primary-700" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">{p.judul}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{p.deskripsi}</p>
                  <span className="badge bg-blue-100 text-blue-700 text-xs mt-3">Rencana Kerja</span>
                </div>
              );
            })}
          </div>

          <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-800 text-sm mb-1">Catatan Penting</p>
                <p className="text-amber-700 text-sm leading-relaxed">
                  Program kerja ini bersifat rencana awal dan akan disempurnakan melalui musyawarah
                  BPD setelah konsolidasi internal selesai. Perubahan dan penambahan program dapat
                  dilakukan sesuai perkembangan kebutuhan masyarakat dan kebijakan desa.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
