import { Link, useLocation } from 'react-router-dom';
import { Hotel, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Trang Chủ' },
    { path: '/rooms', label: 'Phòng' },
    { path: '/services', label: 'Dịch Vụ' },
    { path: '/about', label: 'Giới Thiệu' },
    { path: '/contact', label: 'Liên Hệ' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white border-b border-stone-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-stone-800">
            <Hotel className="w-8 h-8 text-amber-700" />
            <span className="text-2xl tracking-tight">Luxury Resort</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  isActive(link.path)
                    ? 'text-amber-700'
                    : 'text-stone-600 hover:text-amber-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/booking"
              className="bg-amber-700 text-white px-6 py-2 rounded hover:bg-amber-800 transition-colors"
            >
              Đặt Phòng
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-stone-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-stone-200">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 transition-colors ${
                  isActive(link.path)
                    ? 'text-amber-700'
                    : 'text-stone-600'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/booking"
              className="block bg-amber-700 text-white px-6 py-3 rounded mt-4 text-center hover:bg-amber-800 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Đặt Phòng
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
