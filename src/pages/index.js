import ProductCard from "@/components/ProductCard";
import {getContentfulProducts} from '../lib/api'

export async function getStaticProps() {

  return {
    props: {
      elements: {
        products: await getContentfulProducts(),
      }
    },
    revalidate: 1
  };
}

export default function Products({ elements }) {
  // console.log(elements);
  return (
    <div className="product-list">
      {elements.products.map((product) => (
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
