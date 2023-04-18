import { useSelector } from "react-redux";
import { Link } from "react-router-dom/dist";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import "./Cart.css";

const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount( cart.reduce((acc,curr) => acc + curr.price, 0));
  },[cart])

  return (
    <div className=" max-w-6xl mx-auto mt-10">
      {
        cart.length > 0 ?
        (
          <div className="container">
            <div className="w-[60%]">
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index}/>
                })
              }
            </div>

            <div className=" w-[40%] flex flex-col max-h-screen ">
              <div>
                <div className="text-green-600 font-semibold text-xl">Your Cart</div>
                <div className="text-green-600 font-bold text-3xl">Summary</div>
                <p className="mt-4">
                  <span className="">Total Items : {cart.length}</span>
                </p>
              </div>

              <div className="w-[100%] mt-96">
                <p>Total Amount : ${totalAmount}</p>
                <button className="bg-green-500 p-2 w-[70%] rounded-md my-2 text-white font-semibold">
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
        ) :
        (
          <div>
            <h1>Cart Empty</h1>
            <Link to={"/"}>
              <button>
                Shop Now
              </button>
            </Link>

          </div>
        )
      }
    </div>
  )
};

export default Cart;
