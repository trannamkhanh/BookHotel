import { Link } from 'react-router-dom';
import { Calendar, Users, Search, Wifi, Waves, UtensilsCrossed, Dumbbell, Sparkles, Star } from 'lucide-react';
import { rooms } from '../data/rooms';
import { testimonials } from '../data/services';
import { RoomCard } from '../components/RoomCard';
import { useBooking } from '../context/BookingContext';
import { useState } from 'react';

export function HomePage() {
  const { updateBooking } = useBooking();
  const [searchData, setSearchData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 2,
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateBooking(searchData);
    window.location.href = '/rooms';
  };

  const amenities = [
    { icon: Wifi, title: 'WiFi Miễn Phí', description: 'Tốc độ cao' },
    { icon: Waves, title: 'Hồ Bơi', description: 'View biển' },
    { icon: UtensilsCrossed, title: 'Nhà Hàng', description: 'Ẩm thực đa dạng' },
    { icon: Dumbbell, title: 'Phòng Gym', description: '24/7' },
    { icon: Sparkles, title: 'Spa & Massage', description: 'Thư giãn' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1723465308831-29da05e011f3?w=1600"
            alt="Luxury Resort"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl mb-6 tracking-tight">
            Trải Nghiệm Nghỉ Dưỡng Đẳng Cấp
          </h1>
          <p className="text-xl mb-8 text-stone-200">
            Khám phá sự sang trọng và tinh tế tại resort 5 sao của chúng tôi
          </p>

          {/* Search Form */}
          <form
            onSubmit={handleSearch}
            className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl max-w-3xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-left">
                <label className="text-stone-700 text-sm block mb-2">Ngày nhận phòng</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                  <input
                    type="date"
                    value={searchData.checkIn}
                    onChange={(e) => setSearchData({ ...searchData, checkIn: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-stone-300 rounded focus:outline-none focus:border-amber-600 text-stone-700"
                    required
                  />
                </div>
              </div>

              <div className="text-left">
                <label className="text-stone-700 text-sm block mb-2">Ngày trả phòng</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                  <input
                    type="date"
                    value={searchData.checkOut}
                    onChange={(e) => setSearchData({ ...searchData, checkOut: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-stone-300 rounded focus:outline-none focus:border-amber-600 text-stone-700"
                    required
                  />
                </div>
              </div>

              <div className="text-left">
                <label className="text-stone-700 text-sm block mb-2">Số khách</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                  <select
                    value={searchData.guests}
                    onChange={(e) => setSearchData({ ...searchData, guests: Number(e.target.value) })}
                    className="w-full pl-10 pr-4 py-3 border border-stone-300 rounded focus:outline-none focus:border-amber-600 text-stone-700 appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'khách' : 'khách'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full bg-amber-700 text-white py-3 rounded hover:bg-amber-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Search className="w-5 h-5" />
                  Tìm Phòng
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Chào Mừng Đến Luxury Resort</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Nằm tại vị trí đắc địa bên bờ biển Nha Trang, Luxury Resort mang đến trải nghiệm nghỉ dưỡng 
              đẳng cấp 5 sao với dịch vụ hoàn hảo và tiện nghi hiện đại nhất.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-16 px-4 bg-stone-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl">Phòng Nổi Bật</h2>
            <Link
              to="/rooms"
              className="text-amber-700 hover:text-amber-800 transition-colors flex items-center gap-2"
            >
              Xem Tất Cả
              <Search className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.slice(0, 3).map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Tiện Ích Nổi Bật</h2>
            <p className="text-stone-600">Trải nghiệm các tiện nghi cao cấp tại resort</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <amenity.icon className="w-12 h-12 mx-auto mb-4 text-amber-700" />
                <h3 className="mb-2">{amenity.title}</h3>
                <p className="text-sm text-stone-600">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-amber-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Đánh Giá Từ Khách Hàng</h2>
            <p className="text-stone-600">Những trải nghiệm tuyệt vời của khách hàng tại resort</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="mb-1">{testimonial.name}</div>
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-stone-600 text-sm">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-stone-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl mb-6">Sẵn Sàng Cho Kỳ Nghỉ Của Bạn?</h2>
          <p className="text-stone-300 mb-8 text-lg">
            Đặt phòng ngay hôm nay để nhận ưu đãi đặc biệt
          </p>
          <Link
            to="/rooms"
            className="inline-block bg-amber-700 text-white px-8 py-4 rounded-lg hover:bg-amber-800 transition-colors text-lg"
          >
            Đặt Phòng Ngay
          </Link>
        </div>
      </section>
    </div>
  );
}
