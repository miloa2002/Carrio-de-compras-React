import Product from "./components/Product";
import ProductSummary from "./components/ProductSummary";
import emptyCart from "./assets/images/illustration-empty-cart.svg";
import { data } from "./data/data";
import { useState } from "react";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    product.quantity = 1;
    setCart([...cart, product]);
  };

  const deleteToCart = (id) => {
    setCart(
      cart.filter(e => e.id !== id)
    )
  }

  const total = () => {
    return cart.reduce((accum, product) => accum + (product.quantity * product.price), 0)
  }

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((product) => {
      if(product.id === id) {
        return {
          ...product,
          quantity: product.quantity + 1
        }
      }

      return product
    })

    setCart(updatedCart)
  }

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((product) => {
      if(product.id === id) {
        return {
          ...product,
          quantity: product.quantity - 1
        }
      }

      return product
    })

    setCart(updatedCart)
  }

  return (
    <>
      <main className="container mx-auto mb-14">
        <div className="md:flex items-start gap-8">
          <div className="w-full sm:w-2/3">
            <h1 className="text-6xl font-bold mb-5">Postres</h1>
            <div className="grid grid-cols-3 items-center gap-4">
              {products.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                  cart={cart}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                />
              ))}
            </div>
          </div>

          <div className="w-full sm:w-1/3 h-auto bg-white p-8 rounded-lg mt-10">
            {cart.length <= 0 ? (
              <div>
                <p className="text-2xl text-[#BC3C12] font-bold mb-8">
                  Tu carrito <span>(0)</span>
                </p>
                <div className="text-center">
                  <img
                    className="mx-auto"
                    src={emptyCart}
                    alt="No hay productos"
                  />
                  <p className="text-[#8A7A78] font-medium">
                    Los artículos que agregues aparecerán aquí
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-2xl text-[#BC3C12] font-bold mb-8">
                  Tu carrito <span>{cart.length}</span>
                </p>

                {cart.map((product) => (
                  <ProductSummary 
                    key={product.id} 
                    product={product} 
                    deleteToCart={deleteToCart}
                  />
                ))}

                <div className="mt-8 flex items-center justify-between">
                  <p className="text-[#BC3C12] font-bold">Total: </p>
                  <p className="text-[#6e615f] font-extrabold text-3xl">$ {total()}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
