import Image from "next/image";

async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((p) => (
        <div key={p.id} className="border p-4 rounded shadow hover:shadow-lg transition">
          <Image src={p.image} alt={p.title} width={200} height={200} className="mx-auto" />
          <h2 className="mt-2 font-bold">{p.title}</h2>
          <p className="mt-1 text-green-600 font-semibold">${p.price}</p>
        </div>
      ))}
    </div>
  );
}
