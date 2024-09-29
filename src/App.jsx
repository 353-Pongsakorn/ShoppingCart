"use client";
import { useState } from "react";


const products = [
  {
    id: 1,
    name: "GQ Easy T-Shirt Navy Size L",
    price: 20,
    imageSrc:
      "https://medias.watsons.co.th/publishing/WTCTH-305453-side-zoom.jpg",
    imageAlt: "T-Shirt Navy",
  },
  {
    id: 2,
    name: "Dry Men's Running Breathable T-shirt - Red",
    price: 25,
    imageSrc:
      "https://contents.mediadecathlon.com/p2606947/k$1c9e0ffdefc3e67bdeabc82be7893e93/dry-men-s-running-breathable-t-shirt-red-decathlon-8771124.jpg?f=1920x0&format=auto",
    imageAlt: "T-shirt - Red",
  },
  {
    id: 3,
    name: "Mens Cotton Sticker Printed T-Shirt TTMPS94 - Green",
    price: 89,
    imageSrc:
      "https://teetall.pk/cdn/shop/products/035b600c93b37df75e8b1d409ee51a25.webp?v=1694555326",
    imageAlt: "T-Shirt Green",
  },
  {
    id: 4,
    name: "Men's UA Tactical Elite Cargo Pants",
    price: 119,
    imageSrc:
      "https://underarmour.scene7.com/is/image/Underarmour/PS1386717-001_HF?rp=standard-0pad|pdpZoomDesktop&scl=0.72&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=1836&hei=1950&size=1500,1500",
    imageAlt: "Cargo Pants",
  },
  {
    id: 5,
    name: "TRUEWERK Pants",
    price: 99,
    imageSrc:
      "https://truewerk.com/cdn/shop/files/t2_werkpants_mens_sand_flat_lay_8ef2f98e-2d28-4d79-9661-ccab84a67cf3.jpg?v=1701119637&width=2400",
    imageAlt: "TRUEWERK Pants",
  },
  {
    id: 6,
    name: "MEN'S MIRACLE AIR PANTS",
    price: 109,
    imageSrc:
      "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/460624/item/goods_32_460624.jpg?width=494",
    imageAlt: "MIRACLE AIR PANTS",
  },
  {
    id: 7,
    name: "Patek Philippe Nautilus 5712/1A-001",
    price: 58498,
    imageSrc:
      "https://www.thehourglass.com/th/wp-content/uploads/sites/20/2020/06/Patek-Philippe-Nautilus_5711-1A-010.jpg",
    imageAlt: "Patek Philippe",
  },
  {
    id: 8,
    name: "Jalaja Delicate Floral Hoop Earrings ",
    price: 13,
    imageSrc:
      "https://www.tarinika.in/cdn/shop/files/UntitledSession4526_2048x.jpg?v=1692291834",
    imageAlt: "Floral Hoop Earrings",
  },
  {
    id: 9,
    name: "Engagement Ring with Pave Set Side Stones ",
    price: 2370,
    imageSrc:
      "https://eternate.com/cdn/shop/files/EG007-150P-ROSE_bc3e75ac-7182-4155-bdad-18ccff7eacfe_1024x.jpg?v=1726840659",
    imageAlt: "Backpack",
  },
  {
    id: 10,
    name: "Chanel 11.12",
    price: 5016,
    imageSrc:
      "https://www.chanel.com/images/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_386/FSH-1711464573035-m05.jpg",
    imageAlt: "Chanel",
  },
  {
    id: 11,
    name: "Bulgari Gold Ruby Ancient Coin Necklace",
    price: 16000,
    imageSrc:
      "https://oakgem.com/cdn/shop/products/DSCN5107_b49f2a9d-b28a-4b18-b11d-d9c2a82d3ad3_1000x.jpg?v=1669928029",
    imageAlt: "Bulgari Necklace",
  },
];

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [discountCode, setDiscountCode] = useState("");
  const [shippingCost] = useState(100);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const calculateTotal = () => {
    const productTotal = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const discount = discountCode === "DISCOUNT10" ? 0.1 * productTotal : 0;
    return productTotal - discount + shippingCost;
  };

  return (
    <div className="bg-gray-100 py-10">
      <Brander /> {/* ส่วนของแบรนด์ */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Products
        </h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="relative w-full h-48 bg-gray-200">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-700">
                  {product.name}
                </h3>
                <p className="mt-1 text-lg font-bold text-gray-900">
                  ${product.price}
                </p>
                <div className="flex justify-center">
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-2 bg-blue-500 text-white text-lg px-8 py-4 rounded"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Shopping Cart
          </h2>
          {cart.length > 0 ? (
            <>
              <ul className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <li key={item.id} className="flex justify-between py-6">
                    <div className="flex">
                      <img
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        className="h-24 w-24 rounded-md object-cover"
                      />
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-gray-900">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          ${item.price} x {item.quantity}
                        </p>
                        <div className="flex mt-2">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="bg-gray-200 px-2 py-1 rounded-l"
                          >
                            -
                          </button>
                          <span className="bg-white px-3 py-1 border">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => increaseQuantity(item.id)}
                            className="bg-gray-200 px-2 py-1 rounded-r"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <label
                  htmlFor="discountCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Discount Code (Use: DISCOUNT10)
                </label>
                <input
                  type="text"
                  id="discountCode"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mt-4">
                <p className="text-lg font-medium text-gray-900">
                  Total: ${calculateTotal()}
                </p>
                <p className="text-sm text-gray-600">
                  Shipping cost included: $100
                </p>
              </div>
            </>
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
      </div>
    </div>
  );
}

// คอมโพเนนต์สำหรับแบรนด์
export function Brander() {
  return (
    <div className="relative">
      <div className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5"
           style={{
             background: 'linear-gradient(115deg, var(--tw-gradient-stops), #fff1be 28%, #ee87cb 70%, #b060ff)',
           }}>
      </div>
      <div className="relative px-6 lg:px-8">
        {/* Additional content here */}
      </div>
    </div>
  );
}

