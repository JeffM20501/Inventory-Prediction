# Inventory-Prediction
 
## Table of Contents

- [Inventory-Prediction](#inventory-prediction)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Screenshots](#screenshots)
  - [How to Setup](#how-to-setup)

## Features

1. **Fetch & display product info** : Produt data and details are fetched and rendered dynamically

2. **Loading skeleton**:While data loads, users see smooth Material UI skeleton placeholders.
3. **Data visualization**: Charts are included to visualize data like stock amount

## Screenshots

- ![dashboard](./src/assets/screenshot/dashboard.png)

- ![ForeCast](./src/assets/screenshot/ForeCast.png)

<!-- - ![Screenshot page 3](./src/assets/screenshot/3.png) -->

## How to Setup

- First **fork** this repo and then **clone** it to your machine

- Ensure you have **Node.js** and the npm command line interface  installed on you machine if not:- [Use this resourece guide you on how to install Node.js and npm on you machine](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

- To see if you already have Node.js and npm installed and check the installed version, run the following commands:-

```bash
  node -v
```

```bash
  npm -v
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

  **Start the development server**
  - **npm**:
  
  ```bash
    npm  run dev
  ```

  - **pnpm**:
  
  ```bash
    pnpm run dev
  ```

- **Open the App in Browser**: '<http://localhost:5173/>' (Vite)