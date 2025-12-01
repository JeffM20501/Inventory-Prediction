# Inventory Prediction & Supply Chain (IPSC)

## Table of Contents

- [Inventory Prediction \& Supply Chain (IPSC)](#inventory-prediction--supply-chain-ipsc)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Features](#features)
    - [Dashboard](#dashboard)
    - [Products Management](#products-management)
    - [Analytics \& Forecasting](#analytics--forecasting)
    - [Alerts System](#alerts-system)
    - [Settings \& Customization](#settings--customization)
  - [Screenshots](#screenshots)
  - [Tech Stack](#tech-stack)
  - [Key Components](#key-components)
    - [DashBoard Features](#dashboard-features)
    - [Data Management](#data-management)
    - [User Experience](#user-experience)
  - [How to Setup](#how-to-setup)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Port Information](#port-information)
  - [Deployment](#deployment)
    - [Frontend(Versel)](#frontendversel)
    - [Backend(Render)](#backendrender)
  - [API Interactions](#api-interactions)
    - [RESTful Endpointds](#restful-endpointds)
    - [Form Implementations](#form-implementations)
  - [Enviroment Variables](#enviroment-variables)
  - [Security \& Best Practices](#security--best-practices)
  - [Links](#links)

## Project Overview

- **IPSC** is a comprehensive inventory management dashboard built with React that provides insights into **stock levels, demand forecasting, and supply chain analytics**.
- The application helps businesses optimize inventory management through predictive analytics and visual data representation.

## Features

### Dashboard

- **Real-time Inventory Overview**: Total stock, predicted demand, low-stock alerts, and sales velocity

- **Interactive Charts**: Bar charts showing stock distribution by category

- **Category Filtering**: Filter inventory by product categories

- **Inventory Table**: Detailed product information with risk status indicators

1. **Fetch & display product info** : Produt data and details are fetched and rendered dynamically

2. **Loading skeleton**:While data loads, users see smooth Material UI skeleton placeholders.
3. **Data visualization**: Charts are included to visualize data like stock amount

### Products Management

- Complete product catalog with SKU tracking
- Stock level monitoring with reorder alerts
- Demand forecasting data
- Supplier information management

### Analytics & Forecasting

- Sales performance tracking
- Demand prediction analytics
- Inventory trend analysis
- Data visualization with interactive charts

### Alerts System

- Real-time low-stock notifications
- Alert categorization (critical, warning, info)
- Search and filter functionality
- Alert acknowledgment system

### Settings & Customization

- User profile management
- Account security settings
- Notification preferences
- Dark/Light theme toggle
- Appearance customization

## Screenshots

- **DashBoard**
![dashboard](./src/assets/screenshot/dashboard.png)

- **Product Page**
![product-page](./src/assets/screenshot/productPage.png)

- **Analytics**
![Analytics](./src/assets/screenshot/Analytics.png)

- **Alerts**
![alerts](./src/assets/screenshot/alerts.png)

- **Settings**
![settings](./src/assets/screenshot/settings.png)

## Tech Stack

**Frontend Framework**

- **React** - Modern React with latest features
- **React Router DOM** - Client-side routing

**UI Libraries & Styling**

- **Material-UI (MUI)** - Component library
- **Custom CSS** - Responsive design with CSS variables

**Data Visualization**

- **Recharts**- Interactive charts and graphs

**Development Tools**

- **Vite** - Fast build tool and dev server
- **JSON Server** - Mock REST API backend

**Icons & Assets**

- **React Icons** - Comprehensive icon library
  
- **Custom SVG Icons**- Brand-specific icons

**Deployment**

- **Vercel** - Frontend hosting
- **Render** - Backend API hosting

## Key Components

### DashBoard Features

- **Real-time Metrics**: Live calculation of inventory KPIs
- **Category-wise Analysis**: Stock distribution by product categories
- **Risk Assessment**: Automated low-stock detection and alerts

### Data Management

- **RESTful API Integration**: JSON Server for data persistence
- **State Management**: React hooks for local state

- **Data Filtering**: Real-time search and category filters

- **Chart Optimization**: Memoized components for performance

### User Experience

- **Loading States**: Skeleton components during data fetch
- **Error Handling**: Graceful error boundaries
- **Theme Persistence**: Local storage for user preferences
- **Accessibility**: Semantic HTML and keyboard navigation

## How to Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or pnpm

### Installation

- Ensure you have **Node.js** and the npm command line interface  installed on you machine if not:- [Use this resourece guide you on how to install Node.js and npm on you machine](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

- To see if you already have Node.js and npm installed and check the installed version, run the following commands:-

```bash
  node -v
```

```bash
  npm -v
```

- First **fork** this repo and then **clone** it to your machine
  
  ```bash
    git clone <repository-url>
  ```

- **Navigate into the project**:
  
  ```bash
  cd <name of directory>
  ```

- **Install Dependencies**: now you can install dependencies

  - **Using npm**:

    ```bash
      npm install
    ```

  - **Using pnpm**:

    ```bash
      pnpm install
    ```

  - Start Jthe development server in one terminal
  
    - **npm**:

    ```bash
      npm  run dev
    ```

    - **pnpm**:

    ```bash
      pnpm run dev
    ```
  
  - Then, in another terminal, start the JSON Server
  
  - **npm**:
  
  ```bash
    npm run server
  ```

  - **pnpm**:
  
  ```bash
    pnpm run server
  ```

### Port Information

- **Development Server**: `http://localhost:5173` (Vite)
- **JSON API Server**: `http://localhost:4000` (JSON Server)

## Deployment

### Frontend(Versel)

**1.Build the project**

```bash
  npm run build
```

**2.Deploy to Vercel**

- Push your code to GitHub

- Connect your GitHub repo to Vercel

- Add environment variables in Vercel dashboard

- Deploy automatically
  
### Backend(Render)

**1.Prepare your Backend**

- Ensure you have a `server.js` or similar entry point

- Include `db.json` in your repository

**2.Deploy to Render**:

- Create a new Web Service on Render

- Connect your GitHub repository

- Set build command: `npm install`

- Set start command: `npm run server`

- Add environment variables if needed
  
## API Interactions

### RESTful Endpointds

- **GET** `/products` - Fetch all products

- **POST** `/products` - Add new product (ProductPage)

- **GET** `/users` - Fetch all users

- **PATCH** `/users/:id` - Update user profile (SettingsPage)

### Form Implementations

1.**Product Creation Form** (`ProductPage.jsx`)

- Controlled form with validation

- POST request to JSON Server

- Immediate state update after submission

- Profile Update Form (`SettingsPage.jsx`)

- Controlled form pre-filled with user data

- PATCH request to update user info

- Real-time UI update after changes


## Enviroment Variables

Create a `.env` file in the root directory

```env
  VITE_API_URL=https://your-url-render-app.onrender.com
```

Update your API calls to use the enviroment variables

```jsx
  const API_BASE_URL = import.meta.env.VITE_API_URL
  fetch(`${API_BASE_URL}/products`)
```



## Security & Best Practices

- Environment variables for API URLs

- Sensitive files excluded via .gitignore

- Proper error handling in fetch requests

- LocalStorage for theme persistence



## Links

- **Click link to go to the website** [Live Site Link](https://inventory-prediction-peach.vercel.app/)