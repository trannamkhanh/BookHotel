import { Hotel, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 text-white mb-4">
              <Hotel className="w-6 h-6 text-amber-600" />
              <span className="text-xl">Luxury Resort</span>
            </div>
            <p className="text-sm leading-relaxed">
              Khách sạn 5 sao đẳng cấp quốc tế, mang đến trải nghiệm nghỉ dưỡng tuyệt vời
              với dịch vụ chuyên nghiệp và tiện nghi hiện đại.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Liên Kết</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-amber-600 transition-colors">
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-amber-600 transition-colors">
                  Phòng
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-amber-600 transition-colors">
                  Dịch Vụ
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-600 transition-colors">
                  Giới Thiệu
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-600 transition-colors">
                  Liên Hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-4">Liên Hệ</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 text-amber-600" />
                <span>123 Trần Phú, Nha Trang, Khánh Hòa</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-600" />
                <span>1900 1234</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-600" />
                <span>info@luxuryresort.vn</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white mb-4">Nhận Tin</h3>
            <p className="text-sm mb-4">
              Đăng ký nhận thông tin ưu đãi mới nhất từ chúng tôi
            </p>
            <div className="flex gap-2 mb-4">
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 px-4 py-2 bg-stone-800 border border-stone-700 rounded text-sm focus:outline-none focus:border-amber-600"
              />
              <button className="px-4 py-2 bg-amber-700 text-white rounded hover:bg-amber-800 transition-colors text-sm">
                Gửi
              </button>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-stone-400 hover:text-amber-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-amber-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-amber-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 text-center text-sm">
          <p>© 2024 Luxury Resort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
