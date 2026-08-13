import { Link } from 'react-router-dom';
import {
  Search, Eye, MessageSquare, Users,
  ArrowRight, ChevronRight
} from 'lucide-react';
import programData from '../../data/programPrioritas.json';

// Map ikon string ke komponen Lucide
const ikonMap = {
  Search,
  Eye,
  MessageSquare,
  Users,
};

// Map warna ke kelas Tailwind
const warnaMap = {
  amber: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-700',
    badge: 'bg-amber-100 text-amber-800',
    hover: 'hover:border-amber-400',
    link: 'text-amber-700 hover:text-amber-900',
    number: 'text-amber-200',
  },
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-700',
    badge: 'bg-blue-100 text-blue-800',
    hover: 'hover:border-blue-400',
    link: 'text-blue-700 hover:text-blue-900',
    number: 'text-blue-200',
  },
  green: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-700',
    badge: 'bg-emerald-100 text-emerald-800',
    hover: 'hover:border-emerald-400',
    link: 'text-emerald-700 hover:text-emerald-900',
    number: 'text-emerald-200',
  },
  purple: {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-700',
    badge: 'bg-purple-100 text-purple-800',
    hover: 'hover:border-purple-400',
    link: 'text-purple-700 hover:text-purple-900',
    number: 'text-purple-200',
  },
};

const statusWarnaMap = {
  amber: 'bg-amber-100 text-amber-800 border border-amber-200',
  green: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
  blue: 'bg-blue-100 text-blue-800 border border-blue-200',
};

export default function AgendaPrioritas() {
  const { judul, subtitle, program } = programData;

  return (
    <section className="py-14 px-4 bg-gray-50 border-y border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Program Strategis
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-gray-900 mb-2">
            {judul}
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Kartu Program */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {program.map((p, idx) => {
            const Icon = ikonMap[p.ikon] || Search;
            const w = warnaMap[p.warna] || warnaMap.blue;
            const sw = statusWarnaMap[p.statusWarna] || statusWarnaMap.blue;

            return (
              <div
                key={p.id}
                className={`relative bg-white rounded-2xl border-2 ${w.border} ${w.hover} p-5 flex flex-col gap-4 shadow-sm hover:shadow-md transition-all duration-200`}
              >
                {/* Nomor latar */}
                <span
                  className={`absolute top-3 right-4 text-5xl font-display font-extrabold ${w.number} select-none pointer-events-none leading-none`}
                  aria-hidden="true"
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>

                {/* Ikon */}
                <div className={`w-11 h-11 ${w.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${w.iconColor}`} />
                </div>

                {/* Konten */}
                <div className="flex-1">
                  <h3 className="font-display font-bold text-gray-900 text-sm leading-snug mb-2">
                    {p.judul}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">
                    {p.ringkasan}
                  </p>
                  <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ${sw}`}>
                    {p.status}
                  </span>
                </div>

                {/* Link Detail */}
                <Link
                  to={`/program-prioritas#${p.id}`}
                  className={`inline-flex items-center gap-1 text-xs font-semibold ${w.link} mt-1`}
                >
                  Lihat Detail <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <Link
            to="/program-prioritas"
            className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-800 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
          >
            Lihat Seluruh Program Prioritas
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
