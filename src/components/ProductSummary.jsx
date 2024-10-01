/* eslint-disable react/prop-types */
import iconRemoveItem from "../assets/images/icon-remove-item.svg"

// eslint-disable-next-line react/prop-types
const ProductSummary = ({product, deleteToCart}) => {
  return (
    <>
      <div className="border-b border-b-[#94868452] pb-3 mb-4 overflow-auto">
        <div className="flex items-center justify-between">
            <div>
                <p className="text-[#6e615f] font-extrabold">{product.name}</p>
                <div className="flex items-center gap-4 mt-2">
                    <span className="text-[#BC3C12] font-bold">{product.quantity}</span>
                    <p className="text-[#6e615f] font-normal">$ {product.price}</p>
                </div>
            </div>
            <div  className="border border-[#6e615f] rounded-full max-w-max p-1 cursor-pointer">
                <img 
                  src={iconRemoveItem} 
                  alt="Icono eliminar" 
                  onClick={() => deleteToCart(product.id)}
                />
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductSummary