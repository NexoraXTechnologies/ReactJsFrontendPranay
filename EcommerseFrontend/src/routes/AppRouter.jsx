import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import MainLayout from "../components/layout/MainLayout";
import PrivateRoute from "./PrivateRoute";
import Loader from "../components/common/Loader";

const HomePage = lazy(() => import("../pages/Home/HomePage"));
const LoginPage = lazy(() => import("../pages/Auth/LoginPage"));
const ProductsPage = lazy(() => import("../pages/Products/ProductsPage"));
const CartPage = lazy(() => import("../pages/Cart/CartPage"));
const CheckoutPage = lazy(() => import("../pages/Checkout/CheckoutPage"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />

            <Route element={<PrivateRoute />}>
              <Route path="/checkout" element={<CheckoutPage />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;