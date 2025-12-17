# Hotel Booking Website

A modern and responsive hotel booking website built with React, TypeScript, and Tailwind CSS.

## Features

- **Browse Rooms**: View available hotel rooms with detailed information
- **Room Booking**: Easy booking system with date and guest selection
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and intuitive user interface with smooth animations
- **Contact Page**: Get in touch with the hotel through the contact form
- **About Section**: Learn more about the hotel and its services

## Tech Stack

- **Frontend**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **UI Components**: shadcn/ui

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/trannamkhanh/BookHotel.git
cd BookHotel
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── components/      # Reusable React components
│   ├── pages/           # Page components
│   ├── context/         # React context for state management
│   └── data/            # Static data
├── styles/              # CSS files
└── main.tsx            # Entry point
```

## Pages

- **Home**: Welcome page with hotel overview
- **Rooms**: Browse all available rooms
- **Room Detail**: Detailed information about a specific room
- **Booking**: Book your room
- **Services**: Hotel services and amenities
- **About**: About the hotel
- **Contact**: Contact information and form
