import { Link } from 'react-router-dom';
import { Users, ArrowRight } from 'lucide-react';
import { Room } from '../data/rooms';

interface RoomCardProps {
  room: Room;
}

export function RoomCard({ room }: RoomCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-64 overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 bg-amber-700 text-white px-3 py-1 rounded text-sm">
          {room.type}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl mb-2">{room.name}</h3>
        <p className="text-stone-600 text-sm mb-4 line-clamp-2">{room.description}</p>
        
        <div className="flex items-center gap-4 mb-4 text-sm text-stone-600">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{room.maxGuests} khách</span>
          </div>
          <div>{room.area}m²</div>
          <div>{room.view}</div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-stone-200">
          <div>
            <div className="text-amber-700 text-2xl">
              {room.price.toLocaleString('vi-VN')}đ
            </div>
            <div className="text-stone-500 text-sm">/ đêm</div>
          </div>
          <Link
            to={`/rooms/${room.id}`}
            className="flex items-center gap-2 text-amber-700 hover:text-amber-800 transition-colors"
          >
            Xem Chi Tiết
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
