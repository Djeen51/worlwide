import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Homepage from './pages/Homepage';
import PageNotFound from "./pages/PageNotFound";
import AppLayout from './pages/AppLayout';
import Login from "./pages/Login";
import AppNav from "./components/AppNav";


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Homepage />} />
          <Route path="/product" element ={<Product/>}/>
          <Route path="/pricing" element ={<Pricing/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="*" element={<PageNotFound/>} />
          <Route path="app" element={<AppLayout />}>
          <Route index element={<p>Default</p>}/>
            <Route path="cities" element={<p>list of cities</p>}/>
            <Route path="countries" element={<p>Countries</p>}/>
            <Route path="form" element={<p>form</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
