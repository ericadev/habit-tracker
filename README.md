# Habit Tracker

A modern habit tracking application built with React, TypeScript, Vite, and Tailwind CSS. Track daily habits, maintain streaks, and analyze your progress with beautiful visualizations.

## Project Overview

This is a habit tracker application built with React, TypeScript, Vite, and Tailwind CSS. The app allows users to create and track daily habits, view streaks, and analyze their progress with statistics and visualizations.

## Features

- ✅ Create and manage habits with custom categories
- ✅ Daily check-ins with streak tracking
- ✅ Visual calendar showing completion history
- ✅ Statistics and analytics dashboard
- ✅ Category-based organization and filtering
- ✅ Local storage persistence
- ✅ Responsive design (mobile, tablet, desktop)

## Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **State Management**: React Context API + useState/useReducer
- **Data**: Mock/dummy data with localStorage persistence
- **Charts**: Recharts or Chart.js for analytics
- **Dev Tools**: ESLint, Prettier

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ericadev/habit-tracker.git

# Navigate to the project directory
cd habit-tracker

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
habit-tracker/
├── src/
│   ├── components/     # React components
│   ├── context/        # React Context providers
│   ├── data/           # Mock data
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   ├── services/       # API services (mock)
│   ├── types/          # TypeScript type definitions
│   └── utils/          # Utility functions
├── public/             # Static assets
└── docs/              # Documentation
```

## Documentation

- **[TODO.md](TODO.md)** - Full project roadmap and milestone checklists
- **[CLAUDE.md](CLAUDE.md)** - Development workflow guidelines for contributors

## Development Workflow

This project uses a feature branch workflow. Please read [CLAUDE.md](CLAUDE.md) for detailed guidelines on:
- Creating feature branches
- Commit message conventions
- Branch naming standards
- Git workflow best practices

**Important**: Never commit directly to the `main` branch.

## Current Status

- ✅ Milestone 1: Project Setup & Mock Data (Completed)
- 🚧 Milestone 2: State Management & Mock Service Layer (In Progress)
- ⏳ Milestone 3-7: Upcoming milestones (See TODO.md)

## License

MIT

## Contributing

Contributions are welcome! Please follow the workflow outlined in [CLAUDE.md](CLAUDE.md).