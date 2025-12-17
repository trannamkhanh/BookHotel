import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { rooms } from '../data/rooms';
import { Calendar, Users, ArrowLeft, Check } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

export function RoomDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { updateBooking } = useBooking();
  const room = rooms.find((r) => r.id === id);
  
  const [currentImage, setCurrentImage] = useState(0);
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 2,
  });

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Không tìm thấy phòng</h2>
          <Link to="/rooms" className="text-amber-700 hover:text-amber-800">
                Quay lại danh sách phòng
              </Link>
            </div>
          </div>
        );
      }

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    updateBooking({ ...bookingData, room });
    navigate('/booking');
  };

  const similarRooms = rooms.filter((r) => r.id !== room.id && r.type === room.type).slice(0, 2);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Back Button */}
      <div className="bg-white border-b border-stone-200">
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <Link
            to="/rooms"
            className="flex items-center gap-2 text-stone-600 hover:text-amber-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Quay lại
          </Link>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="relative h-[400px] rounded-lg overflow-hidden mb-4">
                <img
                  src={room.images[currentImage]}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {room.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`relative h-24 rounded overflow-hidden ${
                      currentImage === index ? 'ring-2 ring-amber-700' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${room.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Room Info */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-sm text-amber-700 mb-2">{room.type}</div>
                  <h1 className="text-3xl mb-2">{room.name}</h1>
                </div>
                <div className="text-right">
                  <div className="text-3xl text-amber-700 mb-1">
                    {room.price.toLocaleString('vi-VN')}đ
                  </div>
                  <div className="text-stone-500">/ đêm</div>
                </div>
              </div>

              <p className="text-stone-600 mb-6">{room.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 pb-6 border-b border-stone-200">
                <div>
                  <div className="text-stone-500 text-sm mb-1">Diện tích</div>
                  <div>{room.area}m²</div>
                </div>
                <div>
                  <div className="text-stone-500 text-sm mb-1">Số khách</div>
                  <div>{room.maxGuests} khách</div>
                </div>
                <div>
                  <div className="text-stone-500 text-sm mb-1">Giường</div>
                  <div>{room.beds}</div>
                </div>
                <div>
                  <div className="text-stone-500 text-sm mb-1">View</div>
                  <div>{room.view}</div>
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="text-xl mb-4">Tiện Nghi</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-amber-700" />
                      <span className="text-stone-600">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h2 className="text-xl mb-4">Chính Sách Hủy Phòng</h2>
              <p className="text-stone-600">{room.cancellationPolicy}</p>
            </div>

            {/* Similar Rooms */}
            {similarRooms.length > 0 && (
              <div>
                <h2 className="text-2xl mb-6">Phòng Tương Tự</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {similarRooms.map((similarRoom) => (
                    <Link
                      key={similarRoom.id}
                      to={`/rooms/${similarRoom.id}`}
                      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      <img
                        src={similarRoom.image}
                        alt={similarRoom.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="mb-2">{similarRoom.name}</h3>
                        <div className="text-amber-700">
                          {similarRoom.price.toLocaleString('vi-VN')}đ / đêm
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <h2 className="text-xl mb-6">Đặt Phòng</h2>
              <form onSubmit={handleBooking} className="space-y-4">
                <div>
                  <label className="block text-sm mb-2">Ngày nhận phòng</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                    <input
                      type="date"
                      value={bookingData.checkIn}
                      onChange={(e) => setBookingData({ ...bookingData, checkIn: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border border-stone-300 rounded focus:outline-none focus:border-amber-600"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2">Ngày trả phòng</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                    <input
                      type="date"
                      value={bookingData.checkOut}
                      onChange={(e) => setBookingData({ ...bookingData, checkOut: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border border-stone-300 rounded focus:outline-none focus:border-amber-600"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2">Số khách</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                    <select
                      value={bookingData.guests}
                      onChange={(e) => setBookingData({ ...bookingData, guests: Number(e.target.value) })}
                      className="w-full pl-10 pr-4 py-3 border border-stone-300 rounded focus:outline-none focus:border-amber-600 appearance-none"
                    >
                      {Array.from({ length: room.maxGuests }, (_, i) => i + 1).map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'khách' : 'khách'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-200">
                  <div className="flex justify-between mb-2">
                    <span className="text-stone-600">Giá phòng</span>
                    <span>{room.price.toLocaleString('vi-VN')}đ</span>
                  </div>
                  <div className="flex justify-between mb-4">
                    <span>Tổng cộng</span>
                    <span className="text-xl text-amber-700">
                      {room.price.toLocaleString('vi-VN')}đ
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-700 text-white py-3 rounded hover:bg-amber-800 transition-colors"
                >
                  Đặt Ngay
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
