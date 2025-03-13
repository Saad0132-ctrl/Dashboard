# React Dashboard Project
 
git clone https://github.com/Saad0132-ctrl/Dashboard

For Live Demo: https://dashboard-sable-psi-58.vercel.app/
## Overview
This project is a **React-based dashboard application** featuring multiple pages, navigation, and data fetching. It utilizes **React Router** for client-side routing and **Material UI** for UI components.

## Features
✅ **React Router** - Implements seamless navigation between pages.  
✅ **Material UI** - Provides modern and responsive UI components.  
✅ **Reusable Components** - Includes a Navbar and Sidebar for consistent layout.  
✅ **API Integration** - Fetches product data from FakeStore API.  
✅ **Responsive Design** - Adapts to different screen sizes.  


## Technologies Used
- **React**
- **React Router**
- **Material UI**
- **FakeStore API**

## Installation
Follow these steps to set up and run the project locally:

1 Clone the repository:
``bash
   git clone https://github.com/yourusername/your-repo.git
```

2 Navigate into the project directory:
```bash
   cd your-repo
```

3 Install dependencies:
```bash
   npm install
```

4 Start the development server:
```bash
   npm start
```

## Available Pages
| Path       | Component   | Description |
|------------|------------|-------------|
| `/`        | **Home**       | Displays dashboard with UI cards and graphs |
| `/about`   | **About**      | Contains an image and basic project information |
| `/setting` | **Setting**    | Settings page layout |
| `/products`| **Products**   | Displays product listings |
| `/product2`| **Product2**   | Fetches and displays data from FakeStore API |

## API Integration
The `Product2` component fetches product data from FakeStore API:
```js
useEffect(() => {
  async function fetchData () {
    let output = await fetch('https://fakestoreapi.com/products');
    let res = await output.json();
    setData(res);
  }
  fetchData();
}, []);
```

## Contributing
Contributions are **welcome**! Feel free to **open an issue** or **submit a pull request** with your improvements.

## License
This project is **open-source** and available under the **MIT License**.


