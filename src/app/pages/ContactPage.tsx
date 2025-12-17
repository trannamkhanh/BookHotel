import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="bg-stone-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl mb-4">Liên Hệ</h1>
          <p className="text-stone-300 text-lg">
            Chúng tôi luôn sẵn sàng hỗ trợ bạn
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <MapPin className="w-8 h-8 text-amber-700 mb-4" />
              <h3 className="mb-2">Địa Chỉ</h3>
              <p className="text-stone-600">
                123 Trần Phú, Lộc Thọ<br />
                Nha Trang, Khánh Hòa
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Phone className="w-8 h-8 text-amber-700 mb-4" />
              <h3 className="mb-2">Điện Thoại</h3>
              <p className="text-stone-600">
                Hotline: 1900 1234<br />
                Đặt phòng: (258) 388 9999
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Mail className="w-8 h-8 text-amber-700 mb-4" />
              <h3 className="mb-2">Email</h3>
              <p className="text-stone-600">
                info@luxuryresort.vn<br />
                booking@luxuryresort.vn
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Clock className="w-8 h-8 text-amber-700 mb-4" />
              <h3 className="mb-2">Giờ Làm Việc</h3>
              <p className="text-stone-600">
                Thứ 2 - Chủ Nhật<br />
                24/7
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl mb-6">Gửi Tin Nhắn</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2">Họ và tên *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-stone-300 rounded focus:outline-none focus:border-amber-600"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-stone-300 rounded focus:outline-none focus:border-amber-600"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-2">Số điện thoại</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-stone-300 rounded focus:outline-none focus:border-amber-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2">Nội dung *</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-stone-300 rounded focus:outline-none focus:border-amber-600 h-32 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-700 text-white py-3 rounded hover:bg-amber-800 transition-colors"
                >
                  Gửi Tin Nhắn
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="mt-8 bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl mb-6">Bản Đồ</h2>
              <div className="relative h-[400px] bg-stone-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.7218793004686!2d109.19289931533106!3d12.243543991313556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31705d1d4095a9d3%3A0x2e83e09a61e0eacd!2zVHLhuqduIFBow7osIE5oYSBUcmFuZywgS2jDoW5oIEhvw6A!5e0!3m2!1svi!2s!4v1639123456789!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Google Map"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
