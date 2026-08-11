import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function PageHeader({ title, subtitle, breadcrumbs = [] }) {
  return (
    <div className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-primary-200 mb-4" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            Beranda
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <span key={idx} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-primary-400" />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white font-medium">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <h1 className="text-2xl md:text-4xl font-display font-bold mb-3">{title}</h1>
        {subtitle && (
          <p className="text-primary-200 text-sm md:text-base max-w-2xl">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
