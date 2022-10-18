import { lazy, Suspense, useEffect } from "react";
import "./App.scss";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Loader from './components/loader/loader.component';

const LoginPage = lazy(()=> import("./pages/login/login.component"))
const ProductsPage = lazy(()=> import("./pages/products/products.components"))

function App() {


  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/products')
    }
  }, [])

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<LoginPage loggenIn={false}/>} />
          <Route path='/products'
            element={
              localStorage.getItem('token') ? <ProductsPage /> : < Navigate to='/' />
            } />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;