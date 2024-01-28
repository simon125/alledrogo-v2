import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Products } from "./pages/Products/Products";
import { Exercises } from "./pages/Exercises/Exercises";
import { OrderSummary } from "./pages/OrderSummary/OrderSummary";
import { Orders } from "./pages/Orders/Orders";
import { SingleExercise } from "./pages/SingleExercise/SingleExercise";

/**
 * Aliasy jeżeli nazwy funkcji są takie same
 */
// import { increment as counterIncrement } from "./redux/CounterSlice";
// import { increment as cartIncrement } from "./redux/CartSlice";

export const App = () => {
  return (
    <>
      <Navigation />

      <main className="container">
        {/* 

          if(url zawiera /) {
            return <Products />
          }

          if(url zawiera /exercises){
            return <article>Test Exercises</article>
          }

          */}

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/exercises/:trelemorele" element={<SingleExercise />} />
        </Routes>
      </main>
    </>
  );
};
