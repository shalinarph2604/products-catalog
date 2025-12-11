/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "./App.css";
import { Truck } from "lucide-react";

export default function App() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-10 text-pink-600">Happy Shopping!</h1>
      <h1 className="text-2xl font-semibold mb-6 text-gray-500">Products List</h1>

      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl shadow p-4 flex flex-col hover:shadow-lg transition"
            >
              <div className="relative">
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="rounded-xl h-40 w-full object-cover mb-3"
                />
                {p.availabilityStatus=="Low Stock" ?
                  <span className=" absolute top-2 left-2 text-xs rounded-full bg-red-500 text-red-100 font-semibold px-3 py-1 shadow-md">Low Stock!</span>
                  : ""
                }
              </div>
              <h2 className="font-semibold text-lg mb-1">{p.title}</h2>
              <p className="text-sm text-gray-600 line-clamp-2 mb-2">{p.description}</p>
              <div className="grid grid-cols-3 items-center mt-auto">
                <p className="font-bold text-pink-500 text-xl">${p.price}</p>
                <div className="bg-amber-100 rounded-full flex items-center justify-center col-end-4">
                  <svg className="w-5 h-5 fill-orange-400" viewBox="0 0 20 20"
                    >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <span className="ml-1 text-gray-700">{p.rating}</span>
                </div>
              </div>
              <div className="flex items-center mt-3 text-sm gap-1">
                <Truck className="w-5 h-5 text-emerald-500"/>
                <span className="text-emerald-500">{p.shippingInformation}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
