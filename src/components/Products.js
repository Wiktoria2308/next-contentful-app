import ProductCard from "@/components/ProductCard";



export default function Products({ products }) {

return (
<div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.sys.id} product={product}></ProductCard>
      ))}

        <style jsx>{ `
        .product-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px 60px;
        }
        ` }</style>
    </div>
)

}