import { useState } from "react";
import Product from "./Product";

const ProductGrid = ({ products }) => {
  const [filter, setFilter] = useState<string | null>(null);

  if (!products || products.length === 0) {
    return <p className="text-center text-gray-500">No hay productos disponibles.</p>;
  }

  // Filtrar productos que contengan la palabra clave en el nombre
  const filteredProducts = filter
    ? products.filter((product) =>
        product.name && product.name.toLowerCase().includes(filter.toLowerCase())
      )
    : products;

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-4">All Products</h1>

      {/* Botones para filtrar */}
      <div className="flex justify-center flex-wrap gap-4 mb-6">
        <button
          onClick={() => setFilter(null)}
          className={`px-4 py-2 rounded ${filter === null ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Todos
        </button>
        <button
          onClick={() => setFilter("T-shirt")}
          className={`px-4 py-2 rounded ${filter === "T-shirt" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          T-shirt
        </button>
        <button
          onClick={() => setFilter("Boxer")}
          className={`px-4 py-2 rounded ${filter === "Boxer" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Boxer
        </button>
        <button
          onClick={() => setFilter("Polo")}
          className={`px-4 py-2 rounded ${filter === "Polo" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Polo
        </button>
        <button
          onClick={() => setFilter("Funda Iphone")}
          className={`px-4 py-2 rounded ${filter === "Funda Iphone" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Funda Iphone
        </button>
        <button
          onClick={() => setFilter("Towel")}
          className={`px-4 py-2 rounded ${filter === "Towel" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Towel
        </button>
        <button
          onClick={() => setFilter("Hoodie")}
          className={`px-4 py-2 rounded ${filter === "Hoodie" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Hoodie
        </button>
        <button
          onClick={() => setFilter("Bag")}
          className={`px-4 py-2 rounded ${filter === "Bag" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Bag
        </button>
        <button
          onClick={() => setFilter("Gorra")}
          className={`px-4 py-2 rounded ${filter === "Gorra" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Gorra
        </button>
        <button
          onClick={() => setFilter("Patches")}
          className={`px-4 py-2 rounded ${filter === "Patches" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Patches
        </button>
      </div>

      {/* Mostrar productos filtrados */}
      {filteredProducts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No hay productos con este nombre.</p>
      )}
    </div>
  );
};

export default ProductGrid;
