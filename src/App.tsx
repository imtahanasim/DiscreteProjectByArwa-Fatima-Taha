import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link, useLocation } from 'react-router-dom';
import { Activity, Compass, UsersRound, type LucideIcon } from 'lucide-react';
import ProjectOverviewPage from './pages/ProjectOverviewPage';
import VisualizationPage from './pages/VisualizationPage';
import TeamPage from './pages/TeamPage';
import AuroraBackground from './components/AuroraBackground';

type NavItem = { to: string; label: string; icon: LucideIcon };

const NAV_LINKS: NavItem[] = [
  { to: '/', label: 'Project Brief', icon: Compass },
  { to: '/visualization', label: 'Visualization', icon: Activity },
  { to: '/team', label: 'Team', icon: UsersRound }
];

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
};

const SiteNav = () => (
  <header className="sticky top-0 z-40 border-b border-white/5 bg-[#020617]/80 backdrop-blur-xl">
    <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5">
      <Link to="/" className="text-xl font-black tracking-tight text-white hover-lift">
        <span className="soft-gradient-text">Pakistan Economic Observatory</span>
      </Link>
      <nav className="flex items-center gap-3 text-sm font-semibold">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `group inline-flex items-center gap-2 rounded-full border px-4 py-2 transition-all duration-300 hover-lift ${
                isActive
                  ? 'border-cyan-400 bg-cyan-500/20 text-cyan-100 shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                  : 'border-white/20 text-slate-300 hover:text-white hover:border-cyan-300/70'
              }`
            }
          >
            <link.icon className="h-4 w-4" />
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  </header>
);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AuroraBackground />
      <div className="relative flex min-h-screen flex-col bg-[#010511]/80 text-slate-100">
        <SiteNav />
        <main className="flex-1 pb-16">
          <Routes>
            <Route path="/" element={<ProjectOverviewPage />} />
            <Route path="/visualization" element={<VisualizationPage />} />
            <Route path="/team" element={<TeamPage />} />
          </Routes>
        </main>
        <footer className="border-t border-white/5 bg-black/40 px-6 py-6 text-center text-xs text-slate-400">
          Pakistan Economic Observatory · Updated {new Date().getFullYear()}
        </footer>
      </div>
    </BrowserRouter>
  );
}


