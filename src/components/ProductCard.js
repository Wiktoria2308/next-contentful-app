import Link from "next/link"
import Image from "next/image";

export default function ProductCard({product}) {

const { title, slug, price, image } = product.fields;

  return (
    <div className="product-card" data-sb-object-id={product.sys.id}>
        <div className="featured">
            {/* <Image src={"https:" + image.fields.file.url} width={image.fields.file.details.image.width} 
            height={image.fields.file.details.image.height} alt="product-image" /> */}
             <Image data-sb-field-path='image' src={"https:" + image.fields.file.url} width={300} 
            height={300} alt="product-image" priority="true"/>
        </div>
        <div className="content">
            <div className="info">
                <h4 data-sb-field-path='title'>
                    {title}
                </h4>
                <p data-sb-field-path='price'>Price: {price} kr</p>
            </div>
                <div className="actions">
                    <Link href={'/products/' + slug}>Buy this</Link>
                </div>
        </div>
        <style jsx>{`
        .product-card {
          transform: rotateZ(-1deg);
        }
        .content {
          background: #fff;
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
          margin: 0;
          position: relative;
          top: -40px;
          left: -10px;
        }
        .info {
          padding: 16px;
        }
        .info h4 {
          margin: 4px 0;
          text-transform: uppercase;
        }
        .info p {
          margin: 0;
          color: #777;
        }
        .actions {
          margin-top: 20px;
          display: flex;
          justify-content: flex-end;
        }
        .actions span {
          color: #fff;
          background: #f01b29;
          padding: 16px 24px;
        }
    
      `}</style>
    </div>
  )
}
