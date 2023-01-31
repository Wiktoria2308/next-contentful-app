import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Skeleton from "@/components/Skeleton";

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

export const getStaticPaths = async () => {
    const res = await client.getEntries({
        content_type: 'product'
    })
    const paths = res.items.map(item => {
        return {
            params: { slug: item.fields.slug }
        }
    })
    return {
        paths,
        fallback: true
    }
}
export async function getStaticProps({ params }) {
    const { items } = await client.getEntries({
        content_type: 'product',
        'fields.slug': params.slug
    })

    if(!items.length){
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
   // revalidate or webhook
    return {
        props: { product: items[0]},
        revalidate: 1
    }
}

export default function ProductDetails({product}) {
    if(!product) return <Skeleton />

    const { title, image, price, height, description} = product.fields
    return (
      <div>
         <div className="banner">
            <Image src={"https:" + image.fields.file.url} width={300} height={300} alt='product-image'/>
            <h2>{title}</h2>
         </div>
         <div className="info">
            <p>Price: {price} kr</p>
            <p>Height: {height} cm</p>
         </div>
         <div className="description">
            <h3>Description:</h3>
            { documentToReactComponents(description)}
         </div>
         <style jsx>
         {`
        h2,h3 {
          text-transform: uppercase;
        }
        .banner {
        position: relative;
        top: -50px;
        }
        .banner h2 {
          margin: 0;
          background: #fff;
          width: max-content;
          padding: 20px;
          position: relative;
          top: -85px;
          left: 50px;
          transform: rotateZ(-1deg);
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
        }
        .info p {
          margin-bottom:2px;
        }
        .info {
        position: relative;
        top: -70px;
        }
        .description {
        position: relative;
        top: -50px;
        }
      `}
         </style>
      </div>
    )
  }