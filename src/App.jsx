import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/error-page";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";

function Layout() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "products",
          element: <ProductList />,
        },
        {
          path: "product/:productId",
          element: <Product />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
