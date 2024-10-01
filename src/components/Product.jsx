/* eslint-disable react/prop-types */
import { useMemo } from "react";
import productImage from "../assets/images/image-baklava-desktop.jpg";
import iconAddToCart from "../assets/images/icon-add-to-cart.svg";

// eslint-disable-next-line react/prop-types
const Product = ({ product, addToCart, cart, increaseQuantity, decreaseQuantity }) => {

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const existsProduct = useMemo(() => cart.findIndex((e) => e.id === product.id) >= 0, [cart])  

  return (
    <>
      <div>
        <div className="relative flex justify-center">
          <img className="rounded-lg" src={productImage} />

          {existsProduct ? (
            <div className="flex items-center justify-center gap-2 text-white font-bold bg-[#BC3C12] hover:scale-110 transition-transform rounded-full px-6 py-3   absolute bottom-[-20px]">
              <button 
                className="border border-white w-5 h-5 flex justify-center items-center rounded-full"
                onClick={() => increaseQuantity(product.id)}
              >
                +
              </button>
              <button 
                className="border border-white w-5 h-5 flex justify-center items-center rounded-full"
                onClick={() => decreaseQuantity(product.id)}
              >
                -
              </button>
            </div>
          ) : (
            <button
              className="flex items-center justify-center gap-2 text-[#6e615f] font-bold bg-white hover:scale-110 transition-transform rounded-full px-6 py-3 border border-[#6e615f] absolute bottom-[-20px]"
              onClick={() => addToCart(product)}
            >
              <img src={iconAddToCart} alt="Icono cart" />
              Añadir al carrito
            </button>
          )}
        </div>
        <div className="mt-10 space-y-2">
          <span className="text-[#6e615f]">{product.category}</span>
          <p className="text-[#6e615f] font-extrabold">{product.name}</p>
          <p className="text-[#BC3C12] font-bold">$ {product.price}</p>
        </div>
      </div>
    </>
  );
};

export default Product;
