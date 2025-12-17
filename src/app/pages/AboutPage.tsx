import { Hotel, Award, Users, Star } from 'lucide-react';

export function AboutPage() {
  const stats = [
    { icon: Hotel, value: '150+', label: 'Phòng Cao Cấp' },
    { icon: Award, value: '10+', label: 'Năm Kinh Nghiệm' },
    { icon: Users, value: '50K+', label: 'Khách Hàng' },
    { icon: Star, value: '4.9', label: 'Đánh Giá' },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="bg-stone-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl mb-4">Giới Thiệu</h1>
          <p className="text-stone-300 text-lg">
            Câu chuyện về chúng tôi
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        {/* Story */}
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl mb-6">Câu Chuyện Của Chúng Tôi</h2>
              <div className="space-y-4 text-stone-600">
                <p>
                  Luxury Resort được thành lập vào năm 2014 với sứ mệnh mang đến 
                  trải nghiệm nghỉ dưỡng đẳng cấp quốc tế cho du khách Việt Nam 
                  và quốc tế.
                </p>
                <p>
                  Tọa lạc tại vị trí đắc địa bên bờ biển Nha Trang, khách sạn của 
                  chúng tôi kết hợp hoàn hảo giữa kiến trúc hiện đại và văn hóa 
                  truyền thống Việt Nam.
                </p>
                <p>
                  Với đội ngũ nhân viên chuyên nghiệp, tận tâm và cơ sở vật chất 
                  hiện đại, chúng tôi cam kết mang đến cho quý khách những kỷ niệm 
                  khó quên trong mỗi chuyến đi.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800"
                alt="Luxury Resort Lobby"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
              <stat.icon className="w-12 h-12 text-amber-700 mx-auto mb-4" />
              <div className="text-3xl mb-2">{stat.value}</div>
              <div className="text-stone-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl mb-4">Sứ Mệnh</h2>
            <p className="text-stone-600">
              Mang đến trải nghiệm nghỉ dưỡng đẳng cấp 5 sao với dịch vụ hoàn hảo, 
              tạo nên những kỷ niệm đáng nhớ cho mỗi vị khách.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl mb-4">Tầm Nhìn</h2>
            <p className="text-stone-600">
              Trở thành chuỗi khách sạn resort hàng đầu Việt Nam, được công nhận 
              quốc tế về chất lượng dịch vụ và trải nghiệm khách hàng.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
