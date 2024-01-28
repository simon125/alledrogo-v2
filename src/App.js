import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Products } from "./pages/Products/Products";
import { Orders } from "./pages/Orders/Orders";
import { OrderSummary } from "./pages/OrderSummary/OrderSummary";
import { Exercises } from "./pages/Exercises/Exercises";

export const App = () => {
  return (
    <>
      <Navigation />

      <main className="container">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path="/exercises" element={<Exercises />} />
        </Routes>
      </main>
    </>
  );
};
