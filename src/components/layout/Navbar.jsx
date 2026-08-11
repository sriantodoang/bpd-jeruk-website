import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Landmark } from 'lucide-react';

const navLinks = [
  { label: 'Beranda', path: '/' },
  { label: 'Profil BPD', path: '/profil-bpd' },
  { label: 'Tugas & Fungsi', path: '/tugas-fungsi' },
  { label: 'Aspirasi', path: '/aspirasi' },
  { label: 'Transparansi', path: '/transparansi' },
  { label: 'Berita', path: '/berita' },
  {
    label: 'Lebih',
    children: [
      { label: 'Program Kerja', path: '/program-kerja' },
      { label: 'Pakta Komitmen', path: '/komitmen-bpd' },
      { label: 'Data Desa Jeruk', path: '/desa-jeruk' },
      { label: 'Pilkades 2027', path: '/pilkades-2027' },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    if (!dropdownOpen) return;
    const handler = (e) => {
      if (!e.target.closest('[data-dropdown]')) setDropdownOpen(false);
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [dropdownOpen]);

  const isActive = (path) => location.pathname === path;
  const isChildActive = (children) => children.some((c) => location.pathname === c.path);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-white border-b border-gray-100'
    }`}>
      {/* Top bar */}
      <div className="bg-gov-green text-white text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span>Badan Permusyawaratan Desa Jeruk — Kecamatan Miri, Kabupaten Sragen</span>
          <span>Masa Jabatan 2026 – 2034</span>
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 bg-primary-700 rounded-lg flex items-center justify-center">
              <Landmark className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <div className="text-xs text-gray-500 font-medium hidden sm:block">Website Resmi</div>
              <div className="font-display font-bold text-gray-900 text-sm md:text-base">BPD Desa Jeruk</div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative" data-dropdown>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isChildActive(link.children)
                        ? 'text-primary-700 bg-primary-50 font-semibold'
                        : 'text-gray-600 hover:text-primary-700 hover:bg-primary-50'
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute right-0 top-full mt-1 w-52 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            isActive(child.path)
                              ? 'text-primary-700 bg-primary-50 font-semibold'
                              : 'text-gray-600 hover:text-primary-700 hover:bg-primary-50'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-primary-700 bg-primary-50 font-semibold'
                      : 'text-gray-600 hover:text-primary-700 hover:bg-primary-50'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    {link.label}
                  </div>
                  {link.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className={`block px-6 py-2.5 text-sm rounded-md transition-colors ${
                        isActive(child.path)
                          ? 'text-primary-700 bg-primary-50 font-semibold'
                          : 'text-gray-600 hover:text-primary-700 hover:bg-primary-50'
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-primary-700 bg-primary-50 font-semibold'
                      : 'text-gray-600 hover:text-primary-700 hover:bg-primary-50'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
