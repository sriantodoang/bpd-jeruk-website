import { ShieldCheck, Users, Scale, Heart, Vote, Handshake, Building2, CheckCircle } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import bpdData from '../data/bpd.json';

const komitmenList = [
  {
    id: 1,
    icon: Users,
    warna: 'bg-emerald-100 text-emerald-700',
    warnaGaris: 'border-emerald-200',
    judul: 'Menjaga Kekompakan BPD',
    isi: 'Seluruh anggota BPD berkomitmen untuk menjaga persatuan, solidaritas, dan kekompakan internal lembaga. Perbedaan pendapat diselesaikan secara internal dengan semangat kekeluargaan dan tidak dibawa ke ranah publik yang dapat melemahkan wibawa lembaga.',
    poin: [
      'Menghormati perbedaan pendapat antar anggota secara dewasa',
      'Menjaga komunikasi dan koordinasi yang baik antar anggota',
      'Tidak membawa konflik internal ke ranah publik',
      'Hadir aktif dalam setiap kegiatan BPD',
    ],
  },
  {
    id: 2,
    icon: Scale,
    warna: 'bg-blue-100 text-blue-700',
    warnaGaris: 'border-blue-200',
    judul: 'Keputusan Berdasarkan Musyawarah',
    isi: 'Setiap keputusan BPD diambil melalui proses musyawarah untuk mufakat. Tidak ada keputusan sepihak yang diambil tanpa melalui proses pembahasan bersama seluruh anggota BPD sesuai tata tertib yang berlaku.',
    poin: [
      'Mengutamakan musyawarah mufakat dalam setiap pengambilan keputusan',
      'Menghormati dan melaksanakan hasil keputusan bersama',
      'Tidak mengambil keputusan sepihak atas nama BPD',
      'Mendokumentasikan setiap keputusan dalam berita acara resmi',
    ],
  },
  {
    id: 3,
    icon: ShieldCheck,
    warna: 'bg-purple-100 text-purple-700',
    warnaGaris: 'border-purple-200',
    judul: 'Bekerja Berdasarkan Aturan',
    isi: 'Seluruh kegiatan dan keputusan BPD dilandasi oleh peraturan perundang-undangan yang berlaku, termasuk UU Desa, Permendagri No. 110 Tahun 2016, dan Perbup Sragen No. 21 Tahun 2018. BPD tidak akan mengambil langkah yang bertentangan dengan hukum dan regulasi.',
    poin: [
      'Mematuhi seluruh peraturan perundang-undangan yang berlaku',
      'Menyusun tata tertib BPD sebagai pedoman kerja',
      'Tidak melanggar batas kewenangan yang telah ditetapkan',
      'Berkonsultasi dengan pihak berwenang bila terdapat keraguan hukum',
    ],
  },
  {
    id: 4,
    icon: Vote,
    warna: 'bg-amber-100 text-amber-700',
    warnaGaris: 'border-amber-200',
    judul: 'Menjaga Netralitas Pilkades',
    isi: 'BPD berkomitmen penuh untuk bersikap netral dalam proses Pemilihan Kepala Desa (Pilkades) 2027. Sebagai penyelenggara Pilkades, BPD memastikan proses berlangsung demokratis, transparan, adil, dan sesuai aturan tanpa keberpihakan kepada calon manapun.',
    poin: [
      'Tidak mendukung atau berpihak kepada calon Kades manapun',
      'Memastikan proses Pilkades berjalan demokratis dan transparan',
      'Menjalankan tugas kepanitiaan Pilkades dengan profesional',
      'Menolak segala bentuk intervensi yang tidak sesuai aturan',
    ],
  },
  {
    id: 5,
    icon: Heart,
    warna: 'bg-rose-100 text-rose-700',
    warnaGaris: 'border-rose-200',
    judul: 'Menjalankan Fungsi Aspirasi Masyarakat',
    isi: 'BPD berkomitmen untuk menjadi jembatan yang efektif antara masyarakat desa dan pemerintah desa. Setiap aspirasi masyarakat akan ditampung, dirumuskan, dan diperjuangkan secara sungguh-sungguh melalui mekanisme yang tepat.',
    poin: [
      'Membuka saluran aspirasi yang mudah diakses seluruh warga',
      'Menampung aspirasi tanpa diskriminasi dari seluruh lapisan masyarakat',
      'Menyampaikan dan memperjuangkan aspirasi kepada pemerintah desa',
      'Memberikan umpan balik kepada masyarakat atas tindak lanjut aspirasi',
    ],
  },
  {
    id: 6,
    icon: Handshake,
    warna: 'bg-teal-100 text-teal-700',
    warnaGaris: 'border-teal-200',
    judul: 'Menjaga Hubungan Kerja Profesional dengan Pemerintah Desa',
    isi: 'BPD berkomitmen membangun hubungan kerja yang profesional, harmonis, dan konstruktif dengan Pemerintah Desa (Kepala Desa beserta perangkatnya). Pengawasan dilakukan secara objektif dan konstruktif demi kemajuan desa, bukan sebagai bentuk oposisi.',
    poin: [
      'Membangun komunikasi yang terbuka dan konstruktif dengan Kepala Desa',
      'Melakukan pengawasan secara objektif dan bertanggung jawab',
      'Mengedepankan dialog sebelum mengambil langkah formal',
      'Bersinergi dalam pelaksanaan program pembangunan desa',
    ],
  },
];

export default function KomitmenBPD() {
  return (
    <div>
      <PageHeader
        title="Pakta Komitmen BPD"
        subtitle="Pakta Komitmen Bersama Anggota BPD Desa Jeruk Periode 2026–2034"
        breadcrumbs={[{ label: 'Pakta Komitmen BPD' }]}
      />

      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* Intro Card */}
        <div className="card p-6 md:p-8 mb-10 bg-primary-50 border border-primary-200">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary-700 rounded-xl flex items-center justify-center flex-shrink-0">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-display font-bold text-primary-900 mb-2">
                Pakta Komitmen Bersama Anggota BPD
              </h2>
              <p className="text-primary-800 text-sm leading-relaxed mb-2">
                Badan Permusyawaratan Desa Jeruk Periode 2026–2034, yang terdiri dari{' '}
                <strong>{bpdData.jumlahAnggota} orang anggota</strong>, menyatakan komitmen
                bersama untuk menjalankan tugas, fungsi, dan kewenangan lembaga dengan penuh
                tanggung jawab, integritas, dan dedikasi kepada masyarakat Desa Jeruk.
              </p>
              <p className="text-primary-800 text-sm leading-relaxed">
                Pakta komitmen ini menjadi landasan moral dan etika bersama seluruh anggota
                BPD dalam menjalankan amanah yang dipercayakan oleh masyarakat.
              </p>
            </div>
          </div>
        </div>

        {/* 6 Komitmen */}
        <div className="space-y-6 mb-10">
          {komitmenList.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className={`card p-6 border-l-4 ${item.warnaGaris}`}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${item.warna} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                        Komitmen {item.id}
                      </span>
                    </div>
                    <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                      {item.judul}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.isi}</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {item.poin.map((poin, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{poin}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Penutup */}
        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200 text-center">
          <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-6 h-6 text-primary-700" />
          </div>
          <h3 className="font-display font-bold text-gray-900 text-lg mb-3">
            Pernyataan Bersama
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto mb-4">
            Seluruh anggota BPD Desa Jeruk Periode 2026–2034 menyatakan kesanggupan untuk
            melaksanakan pakta komitmen ini dengan penuh ketulusan dan tanggung jawab.
            Kami siap menjalankan amanah masyarakat demi kemajuan dan kesejahteraan Desa Jeruk.
          </p>
          <div className="inline-flex items-center gap-2 bg-primary-700 text-white px-5 py-2 rounded-lg text-sm font-medium">
            <Building2 className="w-4 h-4" />
            BPD Desa Jeruk — Periode 2026–2034
          </div>
        </div>

      </div>
    </div>
  );
}
