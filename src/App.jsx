import Home from './pages/Home'
import About from './pages/About'
import Setting from './pages/Setting'
import Products from './pages/Products'
import Product2 from './pages/Product2'
import './App.css'
import Layout from './components/Layout'
import Category from './pages/Category'
// import SideNav from './components/SideNa
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     <>
//       <BrowserRouter>
//         <Routes>

//        <Route path="/" element={<Home/>} />
//        <Route path="about" element={<About/>} />
//        <Route path="setting" element={<Setting/>} />
//        <Route path="products" element={<Products/>} />
//        <Route path="product2" element={<Product2/>} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App

function App () {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='setting' element={<Setting />} />
        <Route path='products' element={<Products />} />
        <Route path='product2' element={<Product2 />} />
        <Route path='/category' element={<Category/>} />
      </Route>
    )
  )
  return <RouterProvider router={router} />
}
export default App
