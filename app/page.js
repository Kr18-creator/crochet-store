"use client";
import Card from "./components/Card";
import useSWR from "swr";
import axios from "axios";

const fetcher = url => axios.get(url).then(res => res.data);

export default function Home() {
  const { data, error } = useSWR("http://localhost:8080/products", fetcher);

  if (error) return <div>Error loading products</div>;
  if (!data) return <div>Loading...</div>;

  const products = data.products;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="hero min-h-[600px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.pinimg.com/736x/27/f6/a6/27f6a66b74a509fdbd07a778cf912f44.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="w-full lg:w-[700px]">
            <h1 className="text-5xl font-bold">Experience Woven.in</h1>
            <p className="py-6">
              Redefining Fashion with Handcrafted Crochet Dresses
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      {/* end of hero section */}
      <div className="new-arrivals">
        <h1 className="text-3xl font-bold text-center m-4">New Arrivals</h1>
        <div className="flex">
          {products.map((product) => (
           <Card
           key={product._id}
           productId={product._id}
           name={product.name}
           description={product.description}
           price={product.price}
           image={product.image}
         />
          ))}
        </div>
      </div>
    </main>
  );
}
