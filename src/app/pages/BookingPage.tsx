import { useState } from 'react';
import { useBooking } from '../context/BookingContext';
import { Check, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function BookingPage() {
  const { booking, clearBooking } = useBooking();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    paymentMethod: 'credit_card',
    notes: '',
  });
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  if (!booking.room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Vui lòng chọn phòng trước</h2>
          <button
            onClick={() => navigate('/rooms')}
            className="text-amber-700 hover:text-amber-800"
          >
            Chọn phòng
          </button>
        </div>
      </div>
    );
  }

  if (confirmed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50 p-4">
        <div className="bg-white p-12 rounded-lg shadow-md max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl mb-4">Đặt Phòng Thành Công!</h2>
          <p className="text-stone-600 mb-8">
            Cảm ơn bạn đã đặt phòng tại Luxury Resort. 
            Chúng tôi đã gửi email xác nhận đến {formData.email}
          </p>
          <button
            onClick={() => {
              clearBooking();
              navigate('/');
            }}
            className="w-full bg-amber-700 text-white py-3 rounded hover:bg-amber-800 transition-colors"
          >
            Quay về trang chủ
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="bg-stone-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl">Xác Nhận Đặt Phòng</h1>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl mb-6">Thông Tin Khách Hàng</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block mb-2">Họ và tên *</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 border border-stone-300 rounded focus:outline-none focus:border-amber-600"
                    required
                  />
                </div>

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
                  <label className="block mb-2">Số điện thoại *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-stone-300 rounded focus:outline-none focus:border-amber-600"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-4">Phương thức thanh toán *</label>
                  <div className="space-y-3">
                    {[
                      { value: 'credit_card', label: 'Thẻ tín dụng / Ghi nợ' },
                      { value: 'bank_transfer', label: 'Chuyển khoản ngân hàng' },
                      { value: 'cash', label: 'Thanh toán tại khách sạn' },
                    ].map((method) => (
                      <label key={method.value} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method.value}
                          checked={formData.paymentMethod === method.value}
                          onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                          className="w-4 h-4 accent-amber-700"
                        />
                        <span>{method.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block mb-2">Ghi chú (tùy chọn)</label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 border border-stone-300 rounded focus:outline-none focus:border-amber-600 h-24 resize-none"
                    placeholder="Yêu cầu đặc biệt..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-700 text-white py-4 rounded hover:bg-amber-800 transition-colors flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-5 h-5" />
                  Xác Nhận Đặt Phòng
                </button>
              </div>
            </form>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
              <h2 className="text-xl mb-6">Tóm Tắt Đặt Phòng</h2>
              
              <div className="mb-6">
                <img
                  src={booking.room.image}
                  alt={booking.room.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="mb-2">{booking.room.name}</h3>
                <p className="text-sm text-stone-600">{booking.room.type}</p>
              </div>

              <div className="space-y-3 pb-6 border-b border-stone-200">
                <div className="flex justify-between text-sm">
                  <span className="text-stone-600">Nhận phòng</span>
                  <span>{booking.checkIn || 'Chưa chọn'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-stone-600">Trả phòng</span>
                  <span>{booking.checkOut || 'Chưa chọn'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-stone-600">Số khách</span>
                  <span>{booking.guests} khách</span>
                </div>
              </div>

              <div className="pt-6 space-y-3">
                <div className="flex justify-between">
                  <span className="text-stone-600">Giá phòng</span>
                  <span>{booking.room.price.toLocaleString('vi-VN')}đ</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-600">Phí dịch vụ</span>
                  <span>0đ</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-stone-200">
                  <span>Tổng cộng</span>
                  <span className="text-2xl text-amber-700">
                    {booking.room.price.toLocaleString('vi-VN')}đ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
