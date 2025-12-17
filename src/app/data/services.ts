export interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: '1',
    name: 'Spa & Wellness',
    description: 'Trải nghiệm thư giãn tuyệt vời với các liệu trình massage và chăm sóc sức khỏe cao cấp.',
    image: 'https://images.unsplash.com/photo-1677763856232-d9eb9e127e9b?w=800',
    icon: 'Sparkles',
  },
  {
    id: '2',
    name: 'Nhà Hàng Cao Cấp',
    description: 'Thưởng thức ẩm thực đẳng cấp quốc tế được chế biến bởi các đầu bếp hàng đầu.',
    image: 'https://images.unsplash.com/photo-1703565426315-4209c2e88eea?w=800',
    icon: 'UtensilsCrossed',
  },
  {
    id: '3',
    name: 'Hồ Bơi',
    description: 'Hồ bơi vô cực với tầm nhìn tuyệt đẹp ra biển, mở cửa từ 6:00 - 22:00.',
    image: 'https://images.unsplash.com/photo-1534612899740-55c821a90129?w=800',
    icon: 'Waves',
  },
  {
    id: '4',
    name: 'Phòng Gym',
    description: 'Phòng tập gym hiện đại với trang thiết bị tiên tiến, huấn luyện viên chuyên nghiệp.',
    image: 'https://images.unsplash.com/photo-1574755851171-8959b8334d6e?w=800',
    icon: 'Dumbbell',
  },
  {
    id: '5',
    name: 'Tour Du Lịch',
    description: 'Khám phá các địa điểm nổi tiếng với tour du lịch được tổ chức chuyên nghiệp.',
    image: 'https://images.unsplash.com/photo-1723465308831-29da05e011f3?w=800',
    icon: 'MapPin',
  },
  {
    id: '6',
    name: 'Dịch Vụ Hội Nghị',
    description: 'Phòng hội nghị sang trọng với đầy đủ trang thiết bị hiện đại cho sự kiện doanh nghiệp.',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800',
    icon: 'Presentation',
  },
];

export const testimonials = [
  {
    id: '1',
    name: 'Nguyễn Minh Anh',
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    comment: 'Trải nghiệm tuyệt vời! Phòng sạch đẹp, nhân viên nhiệt tình. Chắc chắn sẽ quay lại.',
    date: '2024-12-10',
  },
  {
    id: '2',
    name: 'Trần Văn Bình',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    comment: 'Khách sạn đẳng cấp 5 sao thực sự. View biển tuyệt đẹp, đồ ăn ngon. Rất hài lòng!',
    date: '2024-12-08',
  },
  {
    id: '3',
    name: 'Lê Thị Hương',
    avatar: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    comment: 'Dịch vụ spa rất chuyên nghiệp. Nhân viên tận tâm, chu đáo. Sẽ giới thiệu cho bạn bè.',
    date: '2024-12-05',
  },
];
