import {getContentfulProducts} from '../lib/api'
import Products from '@/components/Products';

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

export default function ProductsPage({ elements }) {

  return (
    <>
    <Products products={elements.products}/>
    </>
  );
}
