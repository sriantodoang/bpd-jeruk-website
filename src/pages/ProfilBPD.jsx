import { Users, BookOpen, Target, ExternalLink, User } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import bpdData from '../data/bpd.json';

function MemberCard({ member, isLeader = false }) {
  return (
    <div className={`card p-5 text-center ${isLeader ? 'border-primary-200 bg-primary-50/50' : ''}`}>
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 ${
        isLeader ? 'bg-primary-700' : 'bg-gray-200'
      }`}>
        <User className={`w-8 h-8 ${isLeader ? 'text-white' : 'text-gray-400'}`} />
      </div>
      <div className="font-display font-semibold text-gray-900 text-sm">{member.nama}</div>
      <div className={`text-xs font-medium mt-1 ${isLeader ? 'text-primary-700' : 'text-gray-500'}`}>
        {member.jabatan}
      </div>
      {member.wilayah && (
        <div className="text-xs text-gray-400 mt-1">{member.wilayah}</div>
      )}
      {member.pendidikan && (
        <span className="badge bg-gray-100 text-gray-600 mt-2 text-xs">{member.pendidikan}</span>
      )}
    </div>
  );
}

export default function ProfilBPD() {
  const { ketua, wakilKetua, sekretaris, anggota } = bpdData.struktur;

  return (
    <div>
      <PageHeader
        title="Profil BPD Desa Jeruk"
        subtitle="Badan Permusyawaratan Desa Jeruk, Kecamatan Miri, Kabupaten Sragen — Periode 2026–2034"
        breadcrumbs={[{ label: 'Profil BPD' }]}
      />

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Sejarah */}
        <section className="mb-12">
          <div className="card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-700" />
              </div>
              <h2 className="text-xl font-display font-bold text-gray-900">Sejarah & Latar Belakang</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">{bpdData.sejarah}</p>
          </div>
        </section>

        {/* Visi Misi */}
        <section className="mb-12 grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-blue-700" />
              </div>
              <h2 className="text-lg font-display font-bold text-gray-900">Visi</h2>
            </div>
            <p className="text-gray-600 leading-relaxed italic">"{bpdData.visi}"</p>
          </div>
          <div className="card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-emerald-700" />
              </div>
              <h2 className="text-lg font-display font-bold text-gray-900">Misi</h2>
            </div>
            <ol className="space-y-2">
              {bpdData.misi.map((m, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-600">
                  <span className="w-5 h-5 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {m}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Dasar Hukum */}
        <section className="mb-12">
          <h2 className="text-xl font-display font-bold text-gray-900 mb-6">Dasar Hukum</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {bpdData.dasar_hukum.map((hukum) => (
              <div key={hukum.nomor} className="card p-5 flex items-start gap-4">
                <div className="w-8 h-8 bg-primary-100 text-primary-700 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">
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
                      className="text-xs text-primary-600 hover:underline flex items-center gap-1 mt-1"
                    >
                      Lihat Dokumen <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Struktur Organisasi */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-primary-700" />
            </div>
            <div>
              <h2 className="text-xl font-display font-bold text-gray-900">Struktur Organisasi</h2>
              <p className="text-sm text-gray-500">BPD Desa Jeruk Periode 2026–2034</p>
            </div>
          </div>

          {/* Pimpinan */}
          <div className="mb-8">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Pimpinan BPD</div>
            <div className="grid sm:grid-cols-3 gap-4">
              <MemberCard member={ketua} isLeader />
              <MemberCard member={wakilKetua} isLeader />
              <MemberCard member={sekretaris} isLeader />
            </div>
          </div>

          {/* Anggota */}
          <div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Anggota BPD</div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {anggota.map((a, i) => (
                <MemberCard key={i} member={a} />
              ))}
            </div>
          </div>

          {/* Info wilayah keterwakilan */}
          <div className="mt-8 bg-primary-50 rounded-xl p-5 border border-primary-100">
            <h3 className="font-semibold text-primary-800 mb-3 text-sm">Keterwakilan Wilayah</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <div className="bg-white rounded-lg p-3 border border-primary-100">
                <div className="font-medium text-gray-900 mb-1">Wilayah 1</div>
                <div className="text-gray-500 text-xs">Dusun Jeruk & Dusun Koplak</div>
                <div className="text-primary-600 text-xs mt-1 font-medium">2 anggota</div>
              </div>
              <div className="bg-white rounded-lg p-3 border border-primary-100">
                <div className="font-medium text-gray-900 mb-1">Wilayah 2</div>
                <div className="text-gray-500 text-xs">Dusun Kedungrejo & Dusun Kebonan</div>
                <div className="text-primary-600 text-xs mt-1 font-medium">2 anggota</div>
              </div>
              <div className="bg-white rounded-lg p-3 border border-primary-100">
                <div className="font-medium text-gray-900 mb-1">Wilayah 3</div>
                <div className="text-gray-500 text-xs">Dusun Karanganom & Dusun Bakalan</div>
                <div className="text-primary-600 text-xs mt-1 font-medium">2 anggota</div>
              </div>
            </div>
            <div className="mt-3 bg-white rounded-lg p-3 border border-primary-100">
              <div className="font-medium text-gray-900 mb-1">Keterwakilan Perempuan</div>
              <div className="text-gray-500 text-xs">Representasi kepentingan perempuan desa</div>
              <div className="text-primary-600 text-xs mt-1 font-medium">3 anggota (termasuk Sekretaris BPD)</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
