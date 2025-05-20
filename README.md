# Intercom Admin Panel Clone

## Project Overview
This project replicates the Intercom AI-enhanced admin panel, focusing on UI/UX and functionality. It's built with React and styled with Tailwind CSS, featuring responsive design, animations, and intuitive workflows.

## Features Implemented

### Core Functional Modules
- **Sidebar Navigation**
  - Icons with text (hover reveals full text)
  - Active state highlighting
  - Routes to different sections

- **Top Bar (Header)**
  - Search bar
  - Notification icon with dropdown
  - Profile section with dropdown menu

- **Main Dashboard (Inbox/Conversation Panel)**
  - Chat conversation list
  - Chat window with message thread
  - AI suggestion interface with pre-filled replies
  - Customer details sidebar

- **Customer Details Sidebar**
  - Name, Email, Last seen, Tags, Priority status
  - Scrollable with relevant customer information

- **Customers Page**
  - List of all customers with filtering
  - Customer search functionality
  - Tag filtering

- **Reports Page**
  - Statistics cards
  - Data visualization components
  - Team performance metrics

- **Settings Page**
  - Multiple setting categories
  - Toggle controls for features
  - Form inputs for configuration

### UI/UX Features
- Clean, modern design with light color theme
- Smooth transitions and animations using Framer Motion
- Mobile-responsive layouts
- Interactive elements with hover and active states

## Tech Stack
- **Framework**: React
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Animation**: Framer Motion
- **Icons**: Lucide Icons

## How to Run Locally

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
/src
  /components
    /layout - Layout components (Sidebar, Header)
    /chat - Chat-related components
    /ui - Reusable UI components
  /pages - Page components
  /contexts - React context providers
  /assets - Static assets like images


## Mobile Responsiveness
The application is fully responsive and adapts to different screen sizes:
- Sidebar collapses on smaller screens
- Chat becomes full-screen on mobile
- Tables and layouts adjust for optimal viewing on all devices

## Future Enhancements
- Dark mode toggle
- More advanced AI suggestion functionality
- Additional data visualizations in Reports
- User authentication system
- Integration with backend services
