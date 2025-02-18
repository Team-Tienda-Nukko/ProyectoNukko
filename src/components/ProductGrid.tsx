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
      <div className="flex justify-between items-center mb-6">
        <select
          onChange={(e) => setFilter(e.target.value || null)}
          value={filter || ""}
          className="px-4 py-2 border border-gray-300 rounded"
        >
          <option value="">Todos</option>
          <option value="T-shirt">T-shirt</option>
          <option value="Boxer">Boxer</option>
          <option value="Polo">Polo</option>
          <option value="Funda Iphone">Funda Iphone</option>
          <option value="Towel">Towel</option>
          <option value="Hoodie">Hoodie</option>
          <option value="Bag">Bag</option>
          <option value="Gorra">Gorra</option>
          <option value="Patches">Patches</option>
        </select>
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
