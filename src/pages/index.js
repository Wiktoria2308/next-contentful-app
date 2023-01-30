import { createClient } from "contentful";
import ProductCard from "@/components/ProductCard";

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "product" });

  return {
    props: {
      products: res.items,
    },
  };
}

export default function Products({ products }) {
  // console.log(products);
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
  );
}
