import { useState } from 'react';
import { rooms } from '../data/rooms';
import { RoomCard } from '../components/RoomCard';
import { SlidersHorizontal } from 'lucide-react';

export function RoomsPage() {
  const [filters, setFilters] = useState({
    type: 'all',
    priceMax: 10000000,
    guests: 0,
  });

  const filteredRooms = rooms.filter((room) => {
    if (filters.type !== 'all' && room.type !== filters.type) return false;
    if (room.price > filters.priceMax) return false;
    if (filters.guests > 0 && room.maxGuests < filters.guests) return false;
    return true;
  });

  const roomTypes = ['all', ...Array.from(new Set(rooms.map((r) => r.type)))];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-stone-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl mb-4">Danh Sách Phòng</h1>
          <p className="text-stone-300 text-lg">
            Khám phá các phòng nghỉ cao cấp của chúng tôi
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <SlidersHorizontal className="w-5 h-5 text-amber-700" />
                <h2 className="text-xl">Bộ Lọc</h2>
              </div>

              <div className="space-y-6">
                {/* Room Type */}
                <div>
                  <label className="block mb-3">Loại Phòng</label>
                  <select
                    value={filters.type}
                    onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                    className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:border-amber-600"
                  >
                    {roomTypes.map((type) => (
                      <option key={type} value={type}>
                        {type === 'all' ? 'Tất cả' : type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price */}
                <div>
                  <label className="block mb-3">
                    Giá tối đa: {filters.priceMax.toLocaleString('vi-VN')}đ
                  </label>
                  <input
                    type="range"
                    min="1000000"
                    max="10000000"
                    step="500000"
                    value={filters.priceMax}
                    onChange={(e) => setFilters({ ...filters, priceMax: Number(e.target.value) })}
                    className="w-full accent-amber-700"
                  />
                  <div className="flex justify-between text-sm text-stone-500 mt-2">
                    <span>1.000.000đ</span>
                    <span>10.000.000đ</span>
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label className="block mb-3">Số Khách</label>
                  <select
                    value={filters.guests}
                    onChange={(e) => setFilters({ ...filters, guests: Number(e.target.value) })}
                    className="w-full px-4 py-2 border border-stone-300 rounded focus:outline-none focus:border-amber-600"
                  >
                    <option value="0">Tất cả</option>
                    {[1, 2, 3, 4].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'khách' : 'khách'}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={() => setFilters({ type: 'all', priceMax: 10000000, guests: 0 })}
                  className="w-full py-2 text-amber-700 hover:text-amber-800 transition-colors border border-amber-700 rounded"
                >
                  Xóa Bộ Lọc
                </button>
              </div>
            </div>
          </div>

          {/* Room List */}
          <div className="lg:col-span-3">
            <div className="mb-6 text-stone-600">
              Tìm thấy {filteredRooms.length} phòng
            </div>
            
            {filteredRooms.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredRooms.map((room) => (
                  <RoomCard key={room.id} room={room} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 rounded-lg text-center">
                <p className="text-stone-600">Không tìm thấy phòng phù hợp với bộ lọc của bạn</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
