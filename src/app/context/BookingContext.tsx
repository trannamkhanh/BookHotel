import { createContext, useContext, useState, ReactNode } from 'react';
import { Room } from '../data/rooms';

interface BookingData {
  checkIn: string;
  checkOut: string;
  guests: number;
  room?: Room;
}

interface BookingContextType {
  booking: BookingData;
  updateBooking: (data: Partial<BookingData>) => void;
  clearBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [booking, setBooking] = useState<BookingData>({
    checkIn: '',
    checkOut: '',
    guests: 2,
  });

  const updateBooking = (data: Partial<BookingData>) => {
    setBooking((prev) => ({ ...prev, ...data }));
  };

  const clearBooking = () => {
    setBooking({
      checkIn: '',
      checkOut: '',
      guests: 2,
    });
  };

  return (
    <BookingContext.Provider value={{ booking, updateBooking, clearBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
