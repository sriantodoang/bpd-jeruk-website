import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';
import HomePage from './pages/HomePage';
import ProfilBPD from './pages/ProfilBPD';
import TugasFungsi from './pages/TugasFungsi';
import Aspirasi from './pages/Aspirasi';
import Transparansi from './pages/Transparansi';
import Berita from './pages/Berita';
import BeritaDetail from './pages/BeritaDetail';
import Galeri from './pages/Galeri';
import DesaJeruk from './pages/DesaJeruk';
import Pilkades from './pages/Pilkades';
import KomitmenBPD from './pages/KomitmenBPD';
import ProgramKerja from './pages/ProgramKerja';
import ProgramPrioritas from './pages/ProgramPrioritas';
import Regulasi from './pages/Regulasi';
import NotFound from './pages/NotFound';
import configData from './data/config.json';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profil-bpd" element={<ProfilBPD />} />
            <Route path="/tugas-fungsi" element={<TugasFungsi />} />
            <Route path="/aspirasi" element={<Aspirasi />} />
            <Route path="/transparansi" element={<Transparansi />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/berita/:slug" element={<BeritaDetail />} />
            <Route path="/galeri" element={<Galeri />} />
            <Route path="/desa-jeruk" element={<DesaJeruk />} />
            <Route path="/pilkades-2027" element={<Pilkades />} />
            <Route path="/komitmen-bpd" element={<KomitmenBPD />} />
            <Route path="/program-kerja" element={<ProgramKerja />} />
            <Route path="/program-prioritas" element={<ProgramPrioritas />} />
            <Route path="/regulasi" element={<Regulasi />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        {/* Tombol WA hanya ditampilkan jika nomor tersedia */}
        {configData.whatsapp && (
          <WhatsAppButton phoneNumber={configData.whatsapp} />
        )}
      </div>
    </Router>
  );
}

export default App;
