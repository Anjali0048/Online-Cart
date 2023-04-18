import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({post}) => {

  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("item removed from cart")
  }

  return (
    <div className="flex flex-col rounded-xl border-2 border-slate-200 gap-3 p-2 mt-10 ml-5 items-center justify-between hover:scale-110 transition duration-300 ease-in hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
      <div>
        <p className="text-gray-700 font-semibold text-lg truncate w-48 mt-1">{post.title}</p>
      </div>
      <div>
        <p className="w-48 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ")}</p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} className="h-full w-full" alt="" />
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">${post.price}</p>
        </div>
        <button>
          {
            cart.some((p) => p.id == post.id) ? 
            (
              <button  className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
                onClick={removeFromCart}>
                Remove Item
              </button>
            ) :
            (
              <button  className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
                onClick={addToCart}>
                Add To Cart
              </button>
            )
          }
        </button>
      </div>
    </div>
  )
};

export default Product;
