import {getArticle, getContentfulNavbar, getContentfulProducts} from '../lib/api'
import Products from '@/components/Products';
import Layout from '@/components/Layout';

export async function getStaticProps() {

  return {
    props: {
      elements: {
        products: await getContentfulProducts(),
        navbar: await getContentfulNavbar(),
        article: await getArticle(),
      }
    },
    revalidate: 1
  };
}


export default function Home({ elements }) {

  return (
    <>
    <Layout navbar={elements.navbar} article={elements.article}>
    <Products products={elements.products}/>
    </Layout>
    </>
  );
}
