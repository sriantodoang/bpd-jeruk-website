import { Link } from 'react-router-dom';
import { MapPin, Mail, Landmark, ExternalLink } from 'lucide-react';
import configData from '../../data/config.json';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gov-darkgreen text-white">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <Landmark className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-lg">BPD Desa Jeruk</div>
                <div className="text-primary-300 text-xs">{configData.kecamatan}, {configData.kabupaten}</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4 max-w-sm">
              Portal resmi Badan Permusyawaratan Desa Jeruk — pusat transparansi
              dan aspirasi masyarakat desa. Bergerak bersama menuju desa yang
              transparan dan partisipatif.
            </p>
            <div className="flex flex-col gap-2 text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-400 flex-shrink-0" />
                <span>{configData.address}</span>
              </div>
              {configData.email && (
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary-400 flex-shrink-0" />
                  <a href={`mailto:${configData.email}`} className="hover:text-white transition-colors">
                    {configData.email}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Menu cepat */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Menu Utama</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Beranda', path: '/' },
                { label: 'Profil BPD', path: '/profil-bpd' },
                { label: 'Tugas & Fungsi', path: '/tugas-fungsi' },
                { label: 'Aspirasi Masyarakat', path: '/aspirasi' },
                { label: 'Transparansi', path: '/transparansi' },
                { label: 'Berita & Kegiatan', path: '/berita' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links tambahan */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Informasi</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Program Kerja', path: '/program-kerja' },
                { label: 'Pakta Komitmen', path: '/komitmen-bpd' },
                { label: 'Data Desa Jeruk', path: '/desa-jeruk' },
                { label: 'Pilkades 2027', path: '/pilkades-2027' },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-300 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-white mt-6 mb-4 text-sm uppercase tracking-wider">Tautan Resmi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://mail.jeruk-miri.desa.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                >
                  Website Desa Jeruk <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.sragenkab.go.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                >
                  Kab. Sragen <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-900">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-400">
          <span>© {year} BPD Desa Jeruk, Kecamatan Miri, Kabupaten Sragen. Semua hak dilindungi.</span>
          <span>Masa Jabatan 2026–2034</span>
        </div>
      </div>
    </footer>
  );
}
