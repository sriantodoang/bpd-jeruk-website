import { useState } from 'react';
import { MessageSquare, Send, CheckCircle, Phone, Mail, Info } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import configData from '../data/config.json';

// Google Form URL — ganti dengan URL Google Form BPD Desa Jeruk yang sebenarnya
const GOOGLE_FORM_URL = 'https://forms.google.com/';

const KATEGORI = [
  'Pemerintahan',
  'Pembangunan',
  'Infrastruktur',
  'Sosial',
  'Ekonomi',
  'Perempuan',
  'Pemuda',
  'Lainnya',
];

const WILAYAH = [
  'Dusun Jeruk',
  'Dusun Kedungrejo',
  'Dusun Kebonan',
  'Dusun Karanganom',
  'Dusun Koplak',
  'Dusun Bakalan',
];

const initialForm = { nama: '', alamat: '', wilayah: '', kategori: '', pesan: '' };

export default function Aspirasi() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.nama.trim()) e.nama = 'Nama wajib diisi';
    if (!form.wilayah) e.wilayah = 'Pilih wilayah';
    if (!form.kategori) e.kategori = 'Pilih kategori';
    if (!form.pesan.trim() || form.pesan.length < 20) e.pesan = 'Pesan minimal 20 karakter';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    // Buat pesan WhatsApp
    const waMessage = encodeURIComponent(
      `*ASPIRASI MASYARAKAT BPD DESA JERUK*\n\n` +
      `Nama: ${form.nama}\n` +
      `Alamat: ${form.alamat || '-'}\n` +
      `Wilayah: ${form.wilayah}\n` +
      `Kategori: ${form.kategori}\n\n` +
      `*Aspirasi/Pesan:*\n${form.pesan}`
    );
    const waUrl = `https://wa.me/${configData.whatsapp}?text=${waMessage}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
    setForm(initialForm);
  };

  const inputClass = (field) =>
    `w-full px-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${
      errors[field] ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white focus:border-primary-400'
    }`;

  return (
    <div>
      <PageHeader
        title="Sampaikan Aspirasi Anda"
        subtitle="BPD Desa Jeruk siap menampung dan menyalurkan aspirasi seluruh masyarakat"
        breadcrumbs={[{ label: 'Aspirasi' }]}
      />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h2 className="font-display font-bold text-gray-900">Form Aspirasi</h2>
                  <p className="text-xs text-gray-500">Aspirasi akan diteruskan via WhatsApp BPD</p>
                </div>
              </div>

              {submitted ? (
                <div className="text-center py-10">
                  <CheckCircle className="w-16 h-16 text-primary-500 mx-auto mb-4" />
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-2">Aspirasi Terkirim!</h3>
                  <p className="text-gray-500 text-sm mb-6">
                    Terima kasih telah menyampaikan aspirasi. BPD akan segera menindaklanjutinya.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-primary">
                    Kirim Aspirasi Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    {/* Nama */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Nama Lengkap <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="nama"
                        value={form.nama}
                        onChange={handleChange}
                        placeholder="Masukkan nama lengkap"
                        className={inputClass('nama')}
                      />
                      {errors.nama && <p className="text-red-500 text-xs mt-1">{errors.nama}</p>}
                    </div>

                    {/* Alamat */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Alamat
                      </label>
                      <input
                        type="text"
                        name="alamat"
                        value={form.alamat}
                        onChange={handleChange}
                        placeholder="RT/RW, Dusun (opsional)"
                        className={inputClass('alamat')}
                      />
                    </div>

                    {/* Wilayah */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Wilayah/Dusun <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="wilayah"
                        value={form.wilayah}
                        onChange={handleChange}
                        className={inputClass('wilayah')}
                      >
                        <option value="">-- Pilih Wilayah --</option>
                        {WILAYAH.map((w) => <option key={w} value={w}>{w}</option>)}
                      </select>
                      {errors.wilayah && <p className="text-red-500 text-xs mt-1">{errors.wilayah}</p>}
                    </div>

                    {/* Kategori */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Kategori Aspirasi <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="kategori"
                        value={form.kategori}
                        onChange={handleChange}
                        className={inputClass('kategori')}
                      >
                        <option value="">-- Pilih Kategori --</option>
                        {KATEGORI.map((k) => <option key={k} value={k}>{k}</option>)}
                      </select>
                      {errors.kategori && <p className="text-red-500 text-xs mt-1">{errors.kategori}</p>}
                    </div>
                  </div>

                  {/* Pesan */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Aspirasi / Pesan <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="pesan"
                      value={form.pesan}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tuliskan aspirasi, saran, atau laporan Anda secara jelas dan lengkap..."
                      className={`${inputClass('pesan')} resize-none`}
                    />
                    <div className="flex justify-between mt-1">
                      {errors.pesan
                        ? <p className="text-red-500 text-xs">{errors.pesan}</p>
                        : <span />}
                      <span className="text-xs text-gray-400">{form.pesan.length} karakter</span>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 flex items-start gap-3">
                    <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-700">
                      Dengan menekan tombol kirim, Anda akan diarahkan ke WhatsApp BPD untuk 
                      mengirimkan aspirasi. Pastikan nomor WhatsApp BPD tersimpan di perangkat Anda.
                    </p>
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center py-3">
                    <Send className="w-4 h-4" />
                    Kirim Aspirasi via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Kontak */}
            <div className="card p-6">
              <h3 className="font-display font-semibold text-gray-900 mb-4">Hubungi BPD</h3>
              <div className="space-y-4">
                <a
                  href={`https://wa.me/${configData.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <div className="w-9 h-9 bg-green-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">WhatsApp BPD</div>
                    <div className="text-sm font-medium text-gray-900">Klik untuk chat</div>
                  </div>
                </a>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-9 h-9 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary-700" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Email BPD</div>
                    <div className="text-sm font-medium text-gray-900 break-all">{configData.email}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Kategori aspirasi */}
            <div className="card p-6">
              <h3 className="font-display font-semibold text-gray-900 mb-4">Kategori Aspirasi</h3>
              <div className="flex flex-wrap gap-2">
                {KATEGORI.map((k) => (
                  <span key={k} className="badge bg-primary-50 text-primary-700 text-xs px-2.5 py-1 rounded-full">
                    {k}
                  </span>
                ))}
              </div>
            </div>

            {/* Proses aspirasi */}
            <div className="card p-6">
              <h3 className="font-display font-semibold text-gray-900 mb-4">Alur Aspirasi</h3>
              <ol className="space-y-3">
                {[
                  'Masyarakat menyampaikan aspirasi',
                  'BPD menerima dan merekap aspirasi',
                  'Aspirasi dibahas dalam rapat BPD',
                  'BPD menyalurkan ke Pemerintah Desa',
                  'Tindak lanjut dan monitoring',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="w-5 h-5 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
