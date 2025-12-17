export interface Room {
  id: string;
  name: string;
  type: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  area: number;
  maxGuests: number;
  beds: string;
  view: string;
  amenities: string[];
  cancellationPolicy: string;
}

export const rooms: Room[] = [
  {
    id: '1',
    name: 'Deluxe Ocean View',
    type: 'Deluxe',
    price: 2500000,
    image: 'https://images.unsplash.com/photo-1731336478850-6bce7235e320?w=800',
    images: [
      'https://images.unsplash.com/photo-1731336478850-6bce7235e320?w=800',
      'https://images.unsplash.com/photo-1579427421635-a0015b804b2e?w=800',
      'https://images.unsplash.com/photo-1534612899740-55c821a90129?w=800',
    ],
    description: 'Phòng cao cấp với tầm nhìn tuyệt đẹp ra biển. Thiết kế hiện đại, sang trọng với đầy đủ tiện nghi 5 sao.',
    area: 45,
    maxGuests: 2,
    beds: '1 giường King',
    view: 'Biển',
    amenities: [
      'WiFi tốc độ cao',
      'Điều hòa nhiệt độ',
      'TV màn hình phẳng 55"',
      'Minibar',
      'Két sắt',
      'Bồn tắm & Vòi sen',
      'Đồ vệ sinh cao cấp',
      'Máy pha cà phê',
      'Ban công riêng',
      'Dịch vụ phòng 24/7',
    ],
    cancellationPolicy: 'Miễn phí hủy phòng trước 48 giờ. Sau thời gian này sẽ tính phí 50% giá trị đặt phòng.',
  },
  {
    id: '2',
    name: 'Premium Suite',
    type: 'Suite',
    price: 4500000,
    image: 'https://images.unsplash.com/photo-1702411200201-3061d0eea802?w=800',
    images: [
      'https://images.unsplash.com/photo-1702411200201-3061d0eea802?w=800',
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800',
      'https://images.unsplash.com/photo-1677763856232-d9eb9e127e9b?w=800',
    ],
    description: 'Suite rộng rãi với phòng khách riêng biệt và phòng ngủ cao cấp. Không gian lý tưởng cho kỳ nghỉ sang trọng.',
    area: 75,
    maxGuests: 3,
    beds: '1 giường King + 1 sofa bed',
    view: 'Thành phố & Biển',
    amenities: [
      'WiFi tốc độ cao',
      'Điều hòa nhiệt độ',
      '2 TV màn hình phẳng',
      'Minibar cao cấp',
      'Két sắt',
      'Bồn tắm Jacuzzi',
      'Vòi sen phun mưa',
      'Đồ vệ sinh Hermès',
      'Máy pha cà phê Nespresso',
      'Ban công lớn',
      'Phòng khách riêng',
      'Bàn làm việc',
      'Dịch vụ phòng 24/7',
    ],
    cancellationPolicy: 'Miễn phí hủy phòng trước 72 giờ. Sau thời gian này sẽ tính phí 50% giá trị đặt phòng.',
  },
  {
    id: '3',
    name: 'Presidential Suite',
    type: 'Presidential',
    price: 8500000,
    image: 'https://images.unsplash.com/photo-1748652252546-6bea5d896bd4?w=800',
    images: [
      'https://images.unsplash.com/photo-1748652252546-6bea5d896bd4?w=800',
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=800',
      'https://images.unsplash.com/photo-1534612899740-55c821a90129?w=800',
    ],
    description: 'Suite tổng thống đẳng cấp nhất với không gian rộng lớn, thiết kế tinh tế và dịch vụ butler riêng.',
    area: 120,
    maxGuests: 4,
    beds: '1 giường King + 2 giường đơn',
    view: 'Toàn cảnh biển',
    amenities: [
      'WiFi tốc độ cao',
      'Điều hòa thông minh',
      '3 TV màn hình phẳng',
      'Minibar cao cấp',
      'Két sắt lớn',
      'Bồn tắm Jacuzzi',
      'Phòng tắm hơi',
      'Đồ vệ sinh Hermès',
      'Máy pha cà phê Nespresso',
      'Ban công panorama',
      'Phòng khách riêng',
      'Phòng ăn riêng',
      'Bàn làm việc',
      'Dịch vụ Butler 24/7',
      'Đưa đón sân bay miễn phí',
    ],
    cancellationPolicy: 'Miễn phí hủy phòng trước 7 ngày. Sau thời gian này sẽ tính phí 100% giá trị đặt phòng.',
  },
  {
    id: '4',
    name: 'Garden View Room',
    type: 'Standard',
    price: 1800000,
    image: 'https://images.unsplash.com/photo-1579427421635-a0015b804b2e?w=800',
    images: [
      'https://images.unsplash.com/photo-1579427421635-a0015b804b2e?w=800',
      'https://images.unsplash.com/photo-1731336478850-6bce7235e320?w=800',
    ],
    description: 'Phòng tiêu chuẩn với view vườn xanh mát, thiết kế ấm cúng và đầy đủ tiện nghi cần thiết.',
    area: 35,
    maxGuests: 2,
    beds: '1 giường Queen',
    view: 'Vườn',
    amenities: [
      'WiFi miễn phí',
      'Điều hòa',
      'TV màn hình phẳng',
      'Minibar',
      'Két sắt',
      'Vòi sen',
      'Đồ vệ sinh cao cấp',
      'Máy sấy tóc',
      'Dịch vụ phòng',
    ],
    cancellationPolicy: 'Miễn phí hủy phòng trước 24 giờ.',
  },
];
