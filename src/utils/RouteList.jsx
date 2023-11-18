import About from "../screens/About";
import DashboardScreen from "../screens/DashboardScreen";
import ErrorRoute from "../screens/ErrorRoute";
import Home from "../screens/Home";
import ProductDetail from "../screens/ProductDetail";
import Products from "../screens/Products";


export const RouteList = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/product-details/:productId", // id is param
    element: <ProductDetail />,
  },
  {
    path: "/dashboard/*",
    element: <DashboardScreen />,
  },
  {
    path: "*",
    element: <ErrorRoute />,
  },
];
