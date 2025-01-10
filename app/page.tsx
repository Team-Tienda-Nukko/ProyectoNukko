"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  thumbnail_url: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/printful/store/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        console.log("Products fetched:", data); // Verifica la estructura aquí
        setProducts(data || []);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError((err as Error).message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-2xl font-bold">Lista de Productos</h1>
        {error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.length > 0 ? (
              products.map((product) => (
                <li
                  key={product.id}
                  className="border p-4 rounded shadow hover:shadow-lg transition"
                >
                  <Image
                    src={product.thumbnail_url}
                    alt={product.name}
                    width={150}
                    height={150}
                    className="mb-4"
                  />
                  <p className="text-lg font-semibold">{product.name}</p>
                </li>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </ul>
        )}
      </main>
    </div>
  );
}