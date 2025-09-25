# Event Planner - Client

This is the frontend application for the Event Planner platform, built with React and Vite.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)

## Technologies Used
- React 
- Vite
- TailwindCSS
- React Router DOM
- Axios

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
client/
├── public/             # Static files
├── src/
│   ├── assets/        # Images and other assets
│   ├── components/    # Reusable React components
│   │   ├── Customer/  # Customer-specific components
│   │   ├── Hero.jsx
│   │   └── Navbar.jsx
│   ├── config/       # Configuration files
│   ├── pages/        # Page components
│   ├── App.jsx       # Root component
│   ├── index.css     # Global styles
│   └── main.jsx      # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_API_URL=http://localhost:5000 # Backend API URL
```

## Features

- User authentication (login/register)
- Customer dashboard
- Profile management
- Event booking system
- User feedback system
- Responsive design

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Create a Pull Request

## License

This project is licensed under the MIT License.
