import {
  Vote, Clock, FileText, AlertCircle, Info, ShieldCheck, CheckCircle
} from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import pilkadesData from '../data/pilkades.json';

const statusColor = {
  'Selesai': 'bg-green-100 text-green-700 border-green-200',
  'Sedang Berjalan': 'bg-blue-100 text-blue-700 border-blue-200',
  'Belum Mulai': 'bg-gray-100 text-gray-500 border-gray-200',
};

const statusIcon = {
  'Selesai': <CheckCircle className="w-4 h-4 text-green-600" />,
  'Sedang Berjalan': <Clock className="w-4 h-4 text-blue-600" />,
  'Belum Mulai': <Clock className="w-4 h-4 text-gray-400" />,
};

export default function Pilkades() {
  return (
    <div>
      <PageHeader
        title="Pemilihan Kepala Desa 2027"
        subtitle="Informasi resmi tahapan, pengumuman, dan transparansi Pilkades Desa Jeruk"
        breadcrumbs={[{ label: 'Pilkades 2027' }]}
      />

      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* Status — Menunggu jadwal resmi */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6 flex items-start gap-4">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-amber-800 text-sm mb-1">
              Status: Menunggu Jadwal Resmi Pemerintah Daerah
            </p>
            <p className="text-amber-700 text-sm mt-1 leading-relaxed">
              Jadwal dan tahapan Pilkades Desa Jeruk 2027 masih menunggu penetapan resmi dari
              Pemerintah Kabupaten Sragen. Seluruh informasi pada halaman ini bersifat persiapan
              dan akan diperbarui segera setelah jadwal resmi diterbitkan oleh pemerintah daerah.
            </p>
          </div>
        </div>

        {/* Prinsip BPD dalam Pilkades — Banner utama */}
        <div className="bg-primary-700 text-white rounded-2xl p-6 md:p-8 mb-10">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-display font-bold mb-2">Prinsip BPD dalam Pilkades 2027</h2>
              <p className="text-primary-100 text-sm leading-relaxed italic text-base">
                "BPD menjaga netralitas dan memastikan proses Pilkades berjalan demokratis,
                transparan, dan sesuai aturan."
              </p>
              <p className="text-primary-200 text-sm mt-3 leading-relaxed">
                Sebagai penyelenggara Pilkades, BPD Desa Jeruk berkomitmen penuh untuk tidak 
                berpihak kepada calon manapun dan memastikan setiap tahapan berjalan sesuai 
                ketentuan hukum yang berlaku demi terselenggaranya pemilihan yang jujur dan adil.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">

            {/* Peran BPD */}
            <section>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Vote className="w-5 h-5 text-primary-700" />
                </div>
                <h2 className="text-xl font-display font-bold text-gray-900">Peran BPD dalam Pilkades</h2>
              </div>
              <div className="card p-6">
                <ul className="space-y-3">
                  {pilkadesData.peranBPD.map((peran, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {i + 1}
                      </span>
                      {peran}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Tahapan */}
            <section>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-blue-700" />
                </div>
                <h2 className="text-xl font-display font-bold text-gray-900">Tahapan Pilkades</h2>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4 flex items-start gap-3 text-sm">
                <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span className="text-amber-700">
                  Tahapan di bawah ini bersifat gambaran umum. Jadwal resmi belum ditetapkan 
                  oleh pemerintah daerah.
                </span>
              </div>
              <div className="space-y-3">
                {pilkadesData.tahapan.map((tahap) => (
                  <div key={tahap.nomor} className={`card p-5 border ${statusColor[tahap.status]?.split(' ').slice(2).join(' ') || 'border-gray-100'}`}>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-9 h-9 bg-primary-100 rounded-lg flex items-center justify-center font-bold text-primary-700 flex-shrink-0">
                          {tahap.nomor}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{tahap.nama}</div>
                          <div className="text-sm text-gray-600 mt-1">{tahap.deskripsi}</div>
                          <div className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            Target: {tahap.target}
                          </div>
                        </div>
                      </div>
                      <div className={`badge text-xs px-2.5 py-1 rounded-full border flex items-center gap-1.5 whitespace-nowrap ${statusColor[tahap.status]}`}>
                        {statusIcon[tahap.status]}
                        {tahap.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Dasar Hukum */}
            <section>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-gray-600" />
                </div>
                <h2 className="text-xl font-display font-bold text-gray-900">Dasar Hukum</h2>
              </div>
              <div className="card p-6">
                <ul className="space-y-2">
                  {pilkadesData.dasarHukum.map((hukum, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0 mt-2" />
                      {hukum}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Info className="w-5 h-5 text-green-700" />
                </div>
                <h2 className="text-xl font-display font-bold text-gray-900">Pertanyaan Umum</h2>
              </div>
              <div className="space-y-4">
                {pilkadesData.faq.map((item, i) => (
                  <div key={i} className="card p-5">
                    <h3 className="font-semibold text-gray-900 text-sm mb-2">{item.pertanyaan}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.jawaban}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Status info */}
            <div className="card p-6">
              <h3 className="font-display font-semibold text-gray-900 mb-4">Status Pilkades</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Tahun Pilkades</span>
                  <span className="font-medium text-gray-900">{pilkadesData.tahun}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Status</span>
                  <span className="badge bg-amber-100 text-amber-700">{pilkadesData.statusPelaksanaan}</span>
                </div>
                <div className="flex justify-between items-start gap-2">
                  <span className="text-gray-500 flex-shrink-0">Jadwal Resmi</span>
                  <span className="text-amber-600 font-medium text-xs text-right">
                    Menunggu jadwal resmi pemerintah daerah
                  </span>
                </div>
              </div>
            </div>

            {/* Netralitas BPD */}
            <div className="card p-6 bg-primary-50 border-primary-200">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-6 h-6 text-primary-700" />
                <h3 className="font-display font-bold text-primary-900">Komitmen Netralitas</h3>
              </div>
              <p className="text-sm text-primary-800 leading-relaxed">
                {pilkadesData.komitmenNetralitas}
              </p>
            </div>

            {/* Jadwal tentative */}
            <div className="card p-6">
              <h3 className="font-display font-semibold text-gray-900 mb-1">Jadwal Tentatif</h3>
              <p className="text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded mb-4 border border-amber-100">
                ⚠ Belum resmi — menunggu penetapan
              </p>
              <div className="space-y-2 text-xs">
                {Object.entries(pilkadesData.jadwalTentative).map(([key, val]) => (
                  <div key={key} className="flex justify-between py-1.5 border-b border-gray-50">
                    <span className="text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className="text-gray-700 font-medium">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dokumen */}
            <div className="card p-6">
              <h3 className="font-display font-semibold text-gray-900 mb-4">Dokumen Pilkades</h3>
              <div className="space-y-2">
                {[
                  'SK Panitia Pilkades',
                  'Tata Tertib Pilkades',
                  'DPT (Daftar Pemilih Tetap)',
                  'Jadwal Tahapan Resmi',
                  'Pengumuman Calon',
                ].map((doc) => (
                  <div key={doc} className="flex items-center gap-2 py-2 border-b border-gray-50 last:border-0">
                    <FileText className="w-4 h-4 text-gray-300" />
                    <span className="text-sm text-gray-400">{doc}</span>
                    <span className="ml-auto badge bg-gray-100 text-gray-400 text-xs">Belum tersedia</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
