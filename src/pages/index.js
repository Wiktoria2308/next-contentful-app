import {getContentfulNavbar, getContentfulProducts} from '../lib/api'
import Products from '@/components/Products';
import Layout from '@/components/Layout';

export async function getStaticProps() {

  return {
    props: {
      elements: {
        products: await getContentfulProducts(),
        navbar: await getContentfulNavbar(),
      }
    },
    revalidate: 1
  };
}

export default function Home({ elements }) {

  return (
    <>
    <Layout navbar={elements.navbar}>
    <Products products={elements.products}/>
    </Layout>
    </>
  );
}
