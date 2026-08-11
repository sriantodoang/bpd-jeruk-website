import { useState } from 'react';
import { MapPin, Users, Home, Map, User, ExternalLink, Building } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import desaData from '../data/desa.json';

const TABS = [
  { id: 'profil', label: 'Profil Desa' },
  { id: 'aparatur', label: 'Aparatur Desa' },
  { id: 'statistik', label: 'Statistik' },
  { id: 'wilayah', label: 'Wilayah' },
];

function Bar({ value, max, color = 'bg-primary-500' }) {
  const pct = Math.round((value / max) * 100);
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 bg-gray-100 rounded-full h-2">
        <div className={`${color} h-2 rounded-full`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs text-gray-500 w-16 text-right">{value.toLocaleString('id-ID')}</span>
    </div>
  );
}

export default function DesaJeruk() {
  const [activeTab, setActiveTab] = useState('profil');

  const maxPendidikan = Math.max(...desaData.statistik.pendidikan.map((i) => i.jumlah));
  const maxPekerjaan = Math.max(...desaData.statistik.pekerjaan.map((i) => i.jumlah));

  return (
    <div>
      <PageHeader
        title="Data Desa Jeruk"
        subtitle="Informasi lengkap Desa Jeruk, Kecamatan Miri, Kabupaten Sragen, Jawa Tengah"
        breadcrumbs={[{ label: 'Data Desa Jeruk' }]}
      />

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Users, label: 'Penduduk', value: desaData.jumlahPenduduk.toLocaleString('id-ID'), color: 'bg-blue-100 text-blue-700' },
            { icon: Home, label: 'Kepala Keluarga', value: desaData.jumlahKK.toLocaleString('id-ID'), color: 'bg-green-100 text-green-700' },
            { icon: Map, label: 'Dusun', value: desaData.jumlahDusun, color: 'bg-amber-100 text-amber-700' },
            { icon: MapPin, label: 'Luas Wilayah', value: desaData.luasWilayah, color: 'bg-rose-100 text-rose-700' },
          ].map((s) => (
            <div key={s.label} className="card p-5 flex items-center gap-4">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${s.color}`}>
                <s.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl font-display font-bold text-gray-900">{s.value}</div>
                <div className="text-xs text-gray-500">{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 flex-wrap mb-8 border-b border-gray-200">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 text-sm font-medium rounded-t-lg transition-colors ${
                activeTab === tab.id
                  ? 'text-primary-700 border-b-2 border-primary-700 bg-primary-50'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Profil */}
        {activeTab === 'profil' && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="font-display font-bold text-gray-900 mb-5 flex items-center gap-2">
                <Building className="w-5 h-5 text-primary-700" /> Identitas Desa
              </h3>
              <dl className="space-y-3 text-sm">
                {[
                  ['Nama Desa', desaData.nama],
                  ['Kecamatan', desaData.kecamatan],
                  ['Kabupaten', desaData.kabupaten],
                  ['Provinsi', desaData.provinsi],
                  ['Kode Pos', desaData.kodePos],
                  ['Kode Wilayah', desaData.kodeWilayah],
                  ['Luas Wilayah', desaData.luasWilayah],
                  ['Jumlah RT', desaData.jumlahRT],
                  ['Jumlah RW', desaData.jumlahRW],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between py-1.5 border-b border-gray-50">
                    <dt className="text-gray-500">{k}</dt>
                    <dd className="font-medium text-gray-900">{v}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={desaData.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm text-primary-600 hover:underline flex items-center gap-1"
              >
                Website Desa Jeruk <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="space-y-4">
              <div className="card p-6">
                <h3 className="font-display font-bold text-gray-900 mb-4">Batas Wilayah</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {Object.entries(desaData.batasDesa).map(([arah, nilai]) => (
                    <div key={arah} className="bg-gray-50 rounded-lg p-3">
                      <div className="text-xs text-gray-400 uppercase font-medium mb-1">{arah}</div>
                      <div className="text-gray-800">{nilai}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card p-6">
                <h3 className="font-display font-bold text-gray-900 mb-4">Potensi Desa</h3>
                <div className="space-y-2">
                  {desaData.potensiDesa.map((p) => (
                    <div key={p} className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 rounded-full bg-primary-500" />
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Aparatur */}
        {activeTab === 'aparatur' && (
          <div>
            <h2 className="text-lg font-display font-bold text-gray-900 mb-5">Aparatur Pemerintah Desa Jeruk</h2>
            {/* Kepala Desa */}
            <div className="card p-6 mb-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center">
                  <User className="w-7 h-7 text-primary-700" />
                </div>
                <div>
                  <div className="font-display font-bold text-gray-900">{desaData.aparaturDesa.kepalaDesa.nama}</div>
                  <div className="text-primary-700 font-medium text-sm">{desaData.aparaturDesa.kepalaDesa.jabatan}</div>
                  <div className="text-xs text-gray-400">Periode {desaData.aparaturDesa.kepalaDesa.periode}</div>
                </div>
              </div>
            </div>
            {/* Sekdes */}
            <div className="card p-5 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-gray-500" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">{desaData.aparaturDesa.sekretarisDesa.nama}</div>
                  <div className="text-gray-500 text-sm">{desaData.aparaturDesa.sekretarisDesa.jabatan}</div>
                </div>
              </div>
            </div>
            {/* Perangkat */}
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Perangkat Desa</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {desaData.aparaturDesa.perangkatDesa.map((p, i) => (
                <div key={i} className="card p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">{p.nama}</div>
                    <div className="text-xs text-gray-500">{p.jabatan}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Statistik */}
        {activeTab === 'statistik' && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="font-display font-bold text-gray-900 mb-5">Tingkat Pendidikan</h3>
              <div className="space-y-4">
                {desaData.statistik.pendidikan.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">{item.label}</span>
                    </div>
                    <Bar value={item.jumlah} max={maxPendidikan} color="bg-primary-500" />
                  </div>
                ))}
              </div>
            </div>
            <div className="card p-6">
              <h3 className="font-display font-bold text-gray-900 mb-5">Mata Pencaharian</h3>
              <div className="space-y-4">
                {desaData.statistik.pekerjaan.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">{item.label}</span>
                    </div>
                    <Bar value={item.jumlah} max={maxPekerjaan} color="bg-blue-500" />
                  </div>
                ))}
              </div>
            </div>
            <div className="card p-6 md:col-span-2">
              <h3 className="font-display font-bold text-gray-900 mb-5">Agama</h3>
              <div className="grid grid-cols-3 gap-4">
                {desaData.statistik.agama.map((item) => {
                  const pct = Math.round((item.jumlah / desaData.jumlahPenduduk) * 100);
                  return (
                    <div key={item.label} className="text-center p-4 bg-gray-50 rounded-xl">
                      <div className="text-2xl font-display font-bold text-gray-900">{item.jumlah.toLocaleString('id-ID')}</div>
                      <div className="text-sm text-gray-600 mt-1">{item.label}</div>
                      <div className="text-xs text-gray-400">{pct}%</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Wilayah */}
        {activeTab === 'wilayah' && (
          <div>
            <h2 className="text-lg font-display font-bold text-gray-900 mb-5">Wilayah Desa Jeruk</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {desaData.wilayah.map((w) => (
                <div key={w.id} className="card p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-primary-100 rounded-lg flex items-center justify-center font-bold text-primary-700 text-sm">
                      {w.id}
                    </div>
                    <div className="font-display font-semibold text-gray-900">{w.nama}</div>
                  </div>
                  <div className="space-y-1.5">
                    {w.rt.map((rt) => (
                      <div key={rt} className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                        {rt}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
