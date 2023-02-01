import {getAllEntries, getContentfulNavbar, getContentfulProducts} from '../lib/api'
import Products from '@/components/Products';
import Layout from '@/components/Layout';
import { useState, useEffect } from 'react';

export async function getStaticProps() {


  return {
    props: {
      elements: {
        all: await getAllEntries(),
        products: await getContentfulProducts(),
        navbar: await getContentfulNavbar(),
      }
    },
    revalidate: 1
  };
}


export default function Home({ elements }) {
  const [useNavbar, setNavbar] = useState(null);

  const checkEntries = () => {
    const findNavbar = elements.all.find((item) => item.sys.contentType.sys.id = 'navbar2');
    if(findNavbar){
      setNavbar(findNavbar)
    }
  }
  
  useEffect(()=> {
    checkEntries();
  }, [])

 

  return (
    <>
     { useNavbar ? <Layout navbar={useNavbar}>
    <Products products={elements.products}/>
    </Layout>
    : null }
     { !useNavbar ? <Layout>
    <Products products={elements.products}/>
    </Layout>
    : null }
    </>
  );
}
